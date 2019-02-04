<template>
  <div id="bar">
    <router-link
      id="logo"
      to="Main"
      class="link"
    >
      {{ title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CommonBar',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>
