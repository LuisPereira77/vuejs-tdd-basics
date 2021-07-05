<template>
  <div>
    <VUserSearchForm />
    <VUserProfile :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import VUserSearchForm from '@/components/VUserSearchForm.vue'
import VUserProfile from '@/components/VUserProfile.vue'
export default defineComponent({
  components: { VUserSearchForm, VUserProfile },
  data: () => ({
    user: {
      name: '',
    },
  }),
})
</script>

<style></style>
