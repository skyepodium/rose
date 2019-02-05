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
        @click="btnClick"
      />
      <common-error
        :flag="error.flag"
        :message="error.message"
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
            error: {
                flag: false,
                message: '',
            },
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
                    window.sessionStorage.setItem('user', data.id)
                    this.$router.push('/')
                }
            })
            .catch(({message}) => {
                this.error.flag = true;
                this.error.message = message
                console.log(message)
            })
        },
        btnClick() {
            if(!this.vali(this.user.email, 'email')) {
                this.error.flag = true;
                this.error.message = '이메일을 형식에 맞게 입력해주세요'
                return false
            }

            if(!this.vali(this.user.password, 'password')) {
                this.error.flag = true;
                this.error.message = '비밀번호를 확인해주세요'
                return false
            }

            this.postData()
        },
    }
}
</script>
