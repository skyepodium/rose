<template>
  <p
    v-if="flag"
    class="error"
  >
    {{ message }}
  </p>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: null
        },
        flag : {
            type: Boolean,
            default: null
        }
    }
}
</script>
