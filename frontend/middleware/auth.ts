import {useAuth} from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuth()
  const me = await authStore.me()

  if (!me) {
    return navigateTo('/')
  }
})
