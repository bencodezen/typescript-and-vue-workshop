<script>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
  setup: () => ({
    tagline: 'Track everything you want to DEVOUR',
  }),
}
</script>

<template>
  <!-- Can bring in props from components this way too, though not recommended -->
  <!-- <TheNavbar tagline="Track Everything you Want to Eat!" /> -->
  <TheNavbar :tagline="tagline" />
  <RouterView />
  <TheFooter />
</template>

<style></style>
