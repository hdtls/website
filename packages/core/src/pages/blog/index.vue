<template>
  <main id="__blog-gallery">
    <section v-if="latestBlog.length" class="lastest bg-light">
      <div class="container">
        <h1 class="p-3 pb-0">Latest Blog</h1>
        <ul class="list-unstyled d-flex flex-wrap mb-0">
          <li
            v-for="(blog, index) in latestBlog"
            :key="blog.id"
            :class="
              index === 0
                ? 'p-3 col-12'
                : index > 4
                ? 'p-3 col-12 col-md-6 col-lg-4'
                : 'p-3 col-12 col-md-6'
            "
          >
            <NuxtLink :to="'/blog/' + blog.alias">
              <Tile
                class="text-reset text-body border-light h-100"
                :data="blog"
              >
                <template #excerpt>
                  <div class="tile-head">
                    <div
                      class="tile-label fs-8 text-secondary text-uppercase mb-1"
                    >
                      Tag
                    </div>
                    <h4 class="text-dark">{{ blog.title }}</h4>
                  </div>
                </template>
              </Tile>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
    <section v-if="trunkedBlog.length" class="trunked">
      <div class="container">
        <h1 class="p-3 pb-0">More Blog</h1>
        <ul class="list-unstyled mb-0">
          <li class="p-3" v-for="blog in trunkedBlog" :key="blog.id">
            <NuxtLink :to="'/blog/' + blog.alias">
              <Tile
                layout-direction="horizontal"
                class="text-reset text-body border-light"
                :data="blog"
              >
                <template #excerpt>
                  <div class="tile-head">
                    <div
                      class="tile-label fs-8 text-secondary text-uppercase mb-1"
                    >
                      Tag
                    </div>
                    <h4 class="text-dark">{{ blog.title }}</h4>
                  </div>
                </template>
              </Tile>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { data } = useFetch('/api/blog-gallery')
const latestBlog = computed(() => unref(data)?.latestBlog || [])
const featuredBlog = computed(() => unref(data)?.featuredBlog || [])
const trunkedBlog = computed(() => unref(data)?.trunkedBlog || [])
</script>
