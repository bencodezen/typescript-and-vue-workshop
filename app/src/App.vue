<script>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>

<template>
  <TheNavbar tagline="Track whatever you want to eat!" />
  <RouterView />
  <TheFooter />
</template>

<style></style>
