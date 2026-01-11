import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  server: {
    watch: {
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/woori/**",
        "**/.react-router/**",
        "**/build/**",
        "**/dist/**",
        "**/.DS_Store",
      ],
      usePolling: false,
      interval: 1000,
    },
  },
});