import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: false,
    lib: {
      entry: "src/code.ts",
      formats: ["iife"],
      name: "code",
      fileName: () => "code.js",
    },
  },
});
