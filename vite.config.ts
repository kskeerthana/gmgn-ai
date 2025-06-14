import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gmgn-ai-react-clone-main/', // Make sure this matches your GitHub repo name exactly
  plugins: [
    react(),
    componentTagger() // Add the componentTagger plugin if you're using it
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Clear the output directory before building
    sourcemap: false, // Disable sourcemaps for production
    rollupOptions: {
      output: {
        manualChunks: undefined, // Prevent chunk splitting issues
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
