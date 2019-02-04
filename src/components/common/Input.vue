<template>
  <div class="input">
    <div
      v-if="label"
      class="label"
    >
      {{ label }}
    </div>
    <input
      :type="type"
      class="CommonInput"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'ComInput',
  props: {
    placeholder: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  methods: {
    updateSelf (val) {
      this.$emit('input', 'a')
    }
  }  
}
</script>

<style>
  .input+.input{
    margin-top: 1rem;
  }
  .CommonInput{
    width: 100%;
    line-height: 18px;
    border: 1px solid #efefef;
    display:block;
    padding: .875rem .5rem;
    box-sizing: border-box;
    font-size: 16px;
  }
  .CommonInput::placeholder{
    color: #999;
  }
</style>
