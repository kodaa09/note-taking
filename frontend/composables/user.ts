import type {AuthResponse} from "~/interfaces/auth";

export function useUsers() {
  const config = useRuntimeConfig();

  async function signUp(email: string, password: string) {
    const endpoint = `${config.public.apiBase}/signup`;
    const {data, status, error} = await useFetch<AuthResponse>(endpoint, {
      method: "POST",
      body: {
        email: email,
        password: password,
      },
      credentials: "include",
    });

    return {data, status, error}
  }

  return {
    signUp
  }
}
