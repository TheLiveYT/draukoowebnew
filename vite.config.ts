import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ⚠️ ZMĚŇ "draukoo-pixel-portal-main" na přesný název GitHub repozitáře
const repoName = "draukoowebnew";

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`, // ← přidáno pro GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
