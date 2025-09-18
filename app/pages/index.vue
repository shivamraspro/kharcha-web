<script lang="ts" setup>
const whoAmI = ref('dont know');

const runtimeConfig = useRuntimeConfig();

const getWhoAmI = async () => {
  // console.log('Getting whoami');
  // return;
  try {
    const response = await $fetch(`${runtimeConfig.public.apiBaseUrl}/auth/whoami`, {
      method: 'GET',
      credentials: 'include',
    });
    whoAmI.value = JSON.stringify(response);
  } catch (error) {
    console.error('Error fetching whoami:', error);
    whoAmI.value = 'Error fetching whoami';
  }
};
</script>

<template>
  <div class="flex flex-col gap-8">
    <NuxtLink to="/login">Login</NuxtLink>
    <NuxtLink to="/signup">Signup</NuxtLink>
    <div>Who Am I? => {{ whoAmI }}</div>
    <UButton @click="getWhoAmI">
      Test Auth
    </UButton>
  </div>
</template>
