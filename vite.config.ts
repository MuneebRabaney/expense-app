import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@bin": path.resolve(__dirname, "./bin"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@logs": path.resolve(__dirname, "./src/logs"),
      "@images": path.resolve(__dirname, "./src/images"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react()],
});
