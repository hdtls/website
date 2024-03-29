# ================================
# Build image
# ================================
FROM node:alpine as builder

# Install OS updates
RUN apk update \
    && apk upgrade \
    && rm -rf /var/cache/apk/*

# Install pnpm
RUN npm install -g pnpm

# Set up a build area
WORKDIR /build

# Copy entire repo into container
COPY . .

RUN pnpm install

# Build everything
RUN pnpm build:core


# ================================
# Run image
# ================================
FROM node:alpine

# Make sure all system packages are up to date.
RUN apk update \
    && apk upgrade \
    && rm -rf /var/cache/apk/*

WORKDIR /app

# Copy built executable and any staged resources from builder
COPY --from=builder /build/packages/core/.output .

ENV NITRO_PORT=3000
EXPOSE ${NITRO_PORT}

# Start the service when the image is run, default to listening on 3000 in production environment
ENTRYPOINT ["docker-entrypoint.sh", "server/index.mjs"]