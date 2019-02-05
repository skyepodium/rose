<template>
  <div class="bar_wrapper">
    <div class="bar">
      <router-link
        to="/"
        class="logo"
      >
        {{ title }}
      </router-link>
      <a
        v-if="sub"
        class="sub"
        @click="subClick"
      >
        {{ subMessage }}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonBar',
    props: {
      title: {
        type: String,
        default: null
      },
      sub: {
        type: Boolean,
        defaul: false
      }
    },
    data () {
      return {
        subMessage: '로그인'
      }
    },
    created () {
      this.checkAuth()
    },
    methods: {
      checkAuth () {
        let user = window.sessionStorage.getItem('user')
        if(this.emptyCheck(user)){
          this.subMessage = '로그아웃'
        }
        else{
          this.subMessage = '로그인'
        }
      },    
      subClick() {
        let user = window.sessionStorage.getItem('user')
        if(this.emptyCheck(user)){
          window.sessionStorage.removeItem('user')
          this.checkAuth()
          this.$router.push('/')
        }
        else{
          this.$router.push('Login')
        }
      }  
    }
  }
</script>
