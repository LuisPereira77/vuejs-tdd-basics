<template>
  <form @submit.prevent="$emit('submitted', username)">
    <input v-model="username" type="text" />
    <button type="submit">Enviar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const username = ref('')

    return { username }
  },
})
</script>

<style></style>
