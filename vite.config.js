import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@pages", replacement: "/src/Pages/" },
      { find: "@components", replacement: "/src/Components/" },
      { find: "@images", replacement: "/src/Images/" },
      { find: "@styles", replacement: "/src/Styles/" },
      { find: "@svg", replacement: "/src/Svg/" },
      // {find:'', replacement:''},
    ],
  },
});
