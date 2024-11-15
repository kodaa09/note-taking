<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { useAuth } from "~/store/auth"

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const authStore = useAuth();
const useUser = useUsers();

const isLoginForm = ref(true);
const state = reactive({
  email: undefined,
  password: undefined
})

async function onAuthForm(event: FormSubmitEvent<Schema>) {
  if (isLoginForm.value) {
    if (state.email && state.password) {
      try {
        await authStore.authenticate(state.email, state.password)
      } catch (error) {
        console.log(error)
      }
    }
  } else {
    try {
      if (state.email && state.password)
        await useUser.signUp(state.email, state.password)
    } catch (error) {
      console.log(error)
    }
  }
}

function onChangeForm() {
  isLoginForm.value = !isLoginForm.value
  resetForm()
}

function resetForm() {
  state.email = undefined
  state.password = undefined
}
</script>

<template>
  <UCard class="w-[540px]">
    <div class="text-center mb-8">
      <h1 class="mb-4 text-xl">Notes</h1>
      <h2 class="mb-1 text-2xl">{{ isLoginForm ? 'Welcome to Note' : 'Create Your Account' }}</h2>
      <p class="text-sm text-zinc-400">{{ isLoginForm ? 'Please log in to continue' : 'Sign up to start organizing your notes and boost your productivity.' }}</p>
    </div>
    <UForm :schema="schema" :state="state" class="space-y-4 mb-5" @submit="onAuthForm">
      <UFormGroup label="Email Address" name="email">
        <UInput placeholder="you@example.com" v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <template #help>
          <UIcon name="i-heroicons-information-circle" /> At least 8 characters
        </template>
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton class="py-3" block type="submit">
        {{ isLoginForm ? 'Login' : 'Sign up' }}
      </UButton>
    </UForm>
    <ErrorMessage class="mt-3 mb-4" :message="authStore.loginError"/>
    <div>
      <UDivider class="mb-4" />
      <UButton class="flex mx-auto" @click="onChangeForm" color="gray" :padded="false" variant="link">
        {{ isLoginForm ? 'No account yet? Sign Up' : 'Already have an account? Login' }}
      </UButton>
    </div>
  </UCard>
</template>
