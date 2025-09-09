<script lang="ts" setup>
import * as v from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';

const formState = reactive({
  email: '',
  password: '',
});

const formSchema = v.object({
  email: v.pipe(v.string(), v.trim(), v.email('Enter a valid email address')),
  password: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(8, 'Password must be at least 8 characters long'),
    v.maxLength(48, 'Password must be at most 48 characters long'),
    v.regex(/[a-z]+/, 'Password must contain at least one lowercase letter'),
    v.regex(/[A-Z]+/, 'Password must contain at least one uppercase letter'),
    v.regex(/\d+/, 'Password must contain at least one digit'),
    v.regex(/[^a-zA-Z0-9\s]/, 'Password must contain at least one special character'),
    v.regex(/^\S*$/, 'Password must not contain whitespace'),
  ),
});

type FormSchema = v.InferOutput<typeof formSchema>;

const onSubmit = (event: FormSubmitEvent<FormSchema>) => {
  // Handle form submission
  console.log(event);
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <UForm
      :schema="formSchema"
      :state="formState"
      class="w-100 space-y-4"
      @submit="onSubmit"
    >
      <UFormField label="Email" name="email">
        <UInput
          v-model="formState.email"
          type="email"
          class="w-full"
        />
      </UFormField>
      <UFormField label="Password" name="password">
        <UInputPassword v-model="formState.password" class="w-full" />
      </UFormField>
      <UButton
        type="submit"
      >
        Sign Up
      </UButton>
    </UForm>
  </div>
</template>
