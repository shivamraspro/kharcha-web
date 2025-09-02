<script lang="ts" setup>
const submitForm = () => {
  console.log('form submitted');
};
</script>

<template>
  <div>
    <div class="text-blue-200 text-4xl">
      Hello World
    </div>
    <form
      action=""
      class="flex gap-2"
    >
      <input
        type="text"
        class="border px-4 py-2 rounded-md"
      >
      <button @click.prevent="submitForm">
        Submit
      </button>
    </form>
  </div>
</template>
