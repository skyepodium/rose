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

<style>
.btn{
    width:100%;
    height:50px;
    background-color: #41b883;
    color:white;
    font-size: 20px;
    margin-top:30px;  
}
</style>
