import { defineStore } from "pinia";
import type { Ref } from "vue";
import type { authResponse } from "~/interfaces/auth.js";

export const useAuth = defineStore("auth", () => {
  const config = useRuntimeConfig();

  const user = useState("user", (): null | authResponse => null);
  const loginError = useState("loginError", () => null);

  const authenticate = async (email: Ref, password: Ref) => {
    const endpoint = `${config.public.apiBase}/login`;
    const { data, status, error } = await useFetch<authResponse>(endpoint, {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
      credentials: "include",
    });

    if (status.value === "success") {
      user.value = {
        fullName: data.value?.fullName,
        email: data.value?.email,
      };
      await navigateTo("/dashboard");
    } else {
      loginError.value = error?.value?.data.errors[0].message;
    }
  };

  const me = async () => {
    const endpoint = `${config.public.apiBase}/me`;
    const headers = useRequestHeaders(["cookie"]);
    const { data, status } = await useFetch<authResponse>(endpoint, {
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
