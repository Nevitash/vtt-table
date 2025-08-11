#!/bin/bash

# Define the paths for your OpenAPI specification and output directory
INPUT_SPEC="./src/assets/openapi/backend.json"
OUTPUT_DIR="./src/api-client"
GENERATOR="typescript-axios"

# Run the OpenAPI Generator CLI command
npx @openapitools/openapi-generator-cli generate \
  -i "$INPUT_SPEC" \
  -g "$GENERATOR" \
  -o "$OUTPUT_DIR"

echo "API client generation complete!"