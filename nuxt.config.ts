// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","nuxt-icon"],
  runtimeConfig: {
    public: {
      pocketBaseUrl: process.env.VITE_POCKETBASE_URL,
    },
  },
  }
)