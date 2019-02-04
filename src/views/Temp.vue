<template>
  <div id="wrapper">
    <input
      :value="value"
      type="text"
      @input="update($event.target.value)"
    >
    <div class="sub">
      {{ value }}
    </div>
    <br>
    <input
      v-model="value2"
      type="text"
    >
    <div class="sub">
      {{ value2 }}
    </div> 
  </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            value2: '' 
        }
    },
    methods: {
        update (val) {
            this.value = val
            console.log(val)
        }
    }
}
</script>

<style scoped>
#wrapper {
    width: calc(100% - 80px);
    margin:auto;
}
input {
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-bottom: 30px;
    margin-top:30px;
    font-size: 20px;
}
.sub{
    font-size: 20px;
}
</style>
