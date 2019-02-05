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
      <common-error
        :flag="error.flag"
        :message="error.message"
      />
      <common-button
        title="회원가입"
        @click="btnClick"
      />
    </div>      
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Register',
    data() {
        return {
            error: {
                flag: false,
                message: false,
            },
            user: {
                email: null,
                password: null,
                password2: null
            },
        }
    },
    methods: {
        postData() {
            let body = {
                email: this.user.email,
                password: this.user.password,
                password2: this.user.password2
            }
            axios.post('/api/register', body)
            .then(({data}) => {
                console.log(data)
                if(data.result) {
                    window.sessionStorage.setItem('user', data.id)
                    this.$router.push('/')
                }
            })
            .catch(({message}) => {
                this.error.flag = true
                this.error.message = message
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

            if(!this.vali(this.user.password2, 'password')) {
                this.error.flag = true;
                this.error.message = '비밀번호를 확인해주세요'
                return false
            }

            if(this.user.password !== this.user.password2) {
                this.error.flag = true;
                this.error.message = '비밀번호가 일치하지 않습니다.'
                return false
            }
            this.postData()
        },
    } 
}
</script>
