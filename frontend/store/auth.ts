import { defineStore } from "pinia";
import type { AuthResponse } from "~/interfaces/auth.js";

export const useAuth = defineStore("auth", () => {
  const config = useRuntimeConfig();
  const user = useState("user", (): null | AuthResponse => null);
  const loginError = useState("loginError", () => null);

  const authenticate = async (email: string, password: string) => {
    const endpoint = `${config.public.apiBase}/login`;
    const { data, status, error } = await useFetch<AuthResponse>(endpoint, {
      method: "POST",
      body: {
        email: email,
        password: password,
      },
      credentials: "include",
    });

    if (status.value === "success") {
      user.value = {
        fullName: data.value?.fullName,
        email: data.value?.email,
      };
      await navigateTo("/notes");
    } else {
      loginError.value = error?.value?.data.errors[0].message;
    }
  };

  const me = async () => {
    const endpoint = `${config.public.apiBase}/me`;
    const headers = useRequestHeaders(["cookie"]);
    const { data, status } = await useFetch<AuthResponse>(endpoint, {
      credentials: "include",
      headers,
    });

    if (status.value === "success") {
      return data;
    } else {
      return null;
    }
  };

  return {
    user,
    loginError,
    authenticate,
    me,
  };
});
