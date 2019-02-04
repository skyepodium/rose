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
    </div>      
  </div>
</template>

<script>
import axios from 'axios'
// import mixin from '../mixin/mixin.js'
export default {
    name: 'Register',
    // mixins: [mixin],
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
        btnClick() {
            let flag = true
            if(!this.vali(this.user.email, 'email')) flag = false
            if(!this.vali(this.user.password, 'password')) flag = false
            if(!this.vali(this.user.password2, 'password')) flag = false
            if(this.user.password !== this.user.password2) flag = false

            if(flag){
                let body = {
                    email: this.user.email,
                    password: this.user.password,
                    password2: this.user.password2
                }
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
            }else{
                console.log('잘못 입력하셨습니다.')
            }
        },
        check () {
            let body = {
                email: this.user.email,
                password: this.user.password,
                password2: this.user.password2
            }
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
