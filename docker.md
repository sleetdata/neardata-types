# Docker Usage Guide

## Prerequisites

- Docker and Docker Compose installed
- A running NEAR stream server (default: `http://localhost:8080`)

## Build

```sh
docker compose build
```

## Run

```sh
docker compose up
```

Or with a custom stream URL:

```sh
NEAR_STREAM_URL=http://your-stream-server:8080 docker compose up
```

## Run in Background

```sh
docker compose up -d
```

## View Logs

```sh
docker compose logs -f
```

## Stop

```sh
docker compose down
```

## Error Logs

Error logs are persisted in the `./tmp/errors` directory on your host machine. You can inspect them:

```sh
ls -la ./tmp/errors/
```

## Manual Docker Commands

Build the image:

```sh
docker build -t neardata-stream .
```

Run the container:

```sh
docker run -e NEAR_STREAM_URL=http://localhost:8080 neardata-stream
```

## How It Works

1. **Multi-stage build**: The Dockerfile uses a multi-stage build to keep the final image small
2. **Compilation**: The Bun binary is compiled using `bun build --compile`
3. **Error handling**: Errors are logged to `/app/tmp/errors` and mounted to the host via volume
4. **Environment**: Configure `NEAR_STREAM_URL` to point to your stream server
