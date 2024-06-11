import PocketBase from 'pocketbase'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const pb = new PocketBase(config.public.pocketBaseUrl)
  return {
    provide: { pb }
  }
})