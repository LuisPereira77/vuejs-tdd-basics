<template>
  <div class="user-profile">
    <img
      id="user-profile__avatar"
      class="rounded-full w-4"
      :src="user.avatar_url"
    />
    <div id="user-profile__name" class="font-bold">
      {{ user.name }}
    </div>
    <div id="user-profile__bio" class="">
      {{ user.bio }}
    </div>
  </div>
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
