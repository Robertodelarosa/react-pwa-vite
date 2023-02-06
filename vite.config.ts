import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "/public/favicon.ico",
        "/public/apple-touch-icon.png",
        "/public/masked-icon.svg",
        "/public/robots.txt",
      ],
      manifest: {
        name: "My PWA APP REACT",
        short_name: "REACT APP",
        description: "My PWA APP REACT Description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        start_url: "/",
        scope: "/",
      },
    }),
  ],
});
