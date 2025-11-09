import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  return {
    define: {
      VITE_GITHUB_TOKEN: process.env.VITE_GITHUB_TOKEN,
    },
    plugins: [react(), tailwindcss()],
  };
});
