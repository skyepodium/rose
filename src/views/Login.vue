<template>
  <div>
    <common-bar title="이메일로 로그인하기" />      
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
      <common-button
        title="로그인"
        @click="postData"
      />
      <router-link to="Register">
        회원가입
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            user: {
                email: null,
                password: null,
            }
        }
    },
    created () {
    },
    methods: {
        postData() {
            let body = {
                email: this.user.email,
                password: this.user.password
            }
            axios.post('/api/login', body)
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
