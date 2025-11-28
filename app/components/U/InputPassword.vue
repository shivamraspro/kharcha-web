<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const showPassword = ref(false)
const slots = useSlots()
</script>

<template>
  <UInput v-bind="$attrs" :type="showPassword ? 'text' : 'password'">
    <template v-if="slots.leading" #leading>
      <slot name="leading" />
    </template>

    <template v-if="slots.default" #default>
      <slot />
    </template>

    <template #trailing>
      <slot name="trailing">
        <UButton
          color="neutral"
          variant="link"
          size="sm"
          :icon="showPassword ? 'i-lucide-eye' : 'i-lucide-eye-off'"
          :aria-label="showPassword ? 'Show password' : 'Hide password'"
          :aria-pressed="showPassword"
          aria-controls="password"
          @click="showPassword = !showPassword"
        />
      </slot>
    </template>
  </UInput>
</template>
