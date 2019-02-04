<template>
  <div>
    <common-bar title="이메일로 회원가입" />      
    <div class="wrapper">
      <common-input
        v-model="user.email"
        placeholder="이메일"
      />
      <common-input 
        v-model="user.password"
        placeholder="비밀번호"
        type="password"
      />
      <common-input 
        v-model="user.password2"
        placeholder="비밀번호 확인"
        type="password"
      />      
      <common-button
        title="회원가입"
        @click="btnClick"
      />
      <router-link to="Register" />
    </div>      
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Register',
    data() {
        return {
            user: {
                email: null,
                password: null,
                password2: null
            }
        }
    },
    methods: {
        btnClick () {
            let body = {
                email: this.user.email,
                password: this.user.password,
                password2: this.user.password2
            }
            console.log(this.user.email)
            axios.post('/api/register', body)
            .then(({data}) => {
                console.log(data)
                if(data.result) {
                    this.$router.push('/')
                }
            })
            .catch(({message}) => {
                console.log(message)
            })
        }
    } 
}
</script>
