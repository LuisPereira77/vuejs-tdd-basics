<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
})
</script>

<style></style>
