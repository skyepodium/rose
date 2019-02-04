<template>
  <button
    class="btn"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
    name: 'CommonButton',
    props: {
        title: {
            type: String,
            default: null
        }
    },
}
</script>
