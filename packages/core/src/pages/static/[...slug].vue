<script setup lang="ts">
const route = useRoute()
const { data: content } = useFetch('/api/pure-md-file')
</script>

<template>
  <div id="__file">
    <main>
      <Markdown :content="content || undefined"></Markdown>
    </main>
  </div>
</template>

<style lang="scss">
#__file {
  a {
    color: var(--#{$prefix}body-color);
  }

  main {
    margin: 0 auto;
    max-width: 798px;
    min-width: 320px;
    padding: 5em 1.75rem 3em;

    ul {
      padding-left: 0;
      list-style: none;
    }

    code {
      font-size: 0.9em;
      color: #242729;
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
      border: none;
      border-top: 1px solid #e4e6e8;
      margin-bottom: 1em;

      &:last-child {
        display: none;
      }
    }

    em {
      font-size: 0.8em;
      color: #848d95;
    }
  }
}
</style>
