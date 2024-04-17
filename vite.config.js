import { defineConfig } from "vite";

export default defineConfig({
    base: "/saurojit-port/",
    build: {
        minify: "terser",
    },
});