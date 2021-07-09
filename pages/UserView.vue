<template>
  <div>
    <VUserSearchForm @submitted="searchUser" />
    <VUserProfile :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapState } from 'vuex'
import VUserSearchForm from '@/components/VUserSearchForm.vue'
import VUserProfile from '@/components/VUserProfile.vue'
export default defineComponent({
  components: { VUserSearchForm, VUserProfile },
  computed: {
    ...mapState({
      user: 'user',
    }),
  },
  methods: {
    searchUser(username: string) {
      this.$store.dispatch('SEARCH_USER', { username })
    },
  },
})
</script>

<style></style>
