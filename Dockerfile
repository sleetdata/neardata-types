# Stage 1: Build
FROM oven/bun:1 AS builder

WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
COPY src/ ./src/
COPY bin/ ./bin/
COPY tsconfig.json tsconfig.build.json ./

# Build the compiled binary
RUN bun build ./bin/stream.ts --compile --outfile ./bin-out/stream

# Stage 2: Runtime
FROM oven/bun:1-slim

WORKDIR /app

# Copy the compiled binary from builder
COPY --from=builder /app/bin-out/stream ./bin-out/stream

# Create tmp directory for error logs
RUN mkdir -p /app/tmp/errors

# Default command
CMD ["./bin-out/stream"]
