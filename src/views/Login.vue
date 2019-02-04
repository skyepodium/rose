<template>
  <div>
    <div class="wrapper">
      <common-input
        v-model="user.id"
        placeholder="아이디"
      />
      <common-input 
        v-model="user.password"
        placeholder="비밀번호"
        type="password"
      />
      <button
        class="login"
        @click="postData"
      >
        로그인
      </button>
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
                id: null,
                password: null,
            }
        }
    },
    created () {
        this.getData()
    },
    methods: {
        getData() {
            axios.get('https://api.hnpwa.com/v0/news/1.json')
            .then(({data}) => {
                console.log(data)
            })
            .catch(({message}) => {
                console.log(message)
            })
        },
        postData() {
            let body = {
                id: this.user.id,
                password: this.user.password
            }
            axios.post('/api/login', body)
            .then(({data}) => {
                console.log(data)
            })
            .catch(({message}) => {
                console.log(message)
            })
        }
    }
}
</script>

<style>
.wrapper {
    padding:1rem;
}
.login{
    width:100%;
    height:50px;
    background-color: #41b883;
    color:white;
    font-size: 20px;
    margin-top:30px;
}
</style>
