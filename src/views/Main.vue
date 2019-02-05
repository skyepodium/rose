<template>
  <div>
    <common-bar title="방명록" />
    <div class="list_wrapper">
      <textarea
        id="textarea"
        rows="10"
        cols="50"
      />
      <common-button
        :title="btnMessage"
        @click="btnClick"
      />
      <ul>
        <li
          v-for="(item, key) in list"
          :key="key"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Main',
    data() {
      return {
        btnMessage: '로그인하고 작성하기',
        list: [

        ]
      }
    },
    created() {
      this.checkAuth()
      this.getData()
    },
    methods: {
      checkAuth () {
        let user = window.sessionStorage.getItem('user')
        console.log(user)
        if(this.emptyCheck(user)){
          this.btnMessage = '작성하기'
        }
        else{
          this.btnMessage = '로그인하고 작성하기'
        }
      },
      getData() {
        axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(({data}) => {
          this.list = data
          })
        .catch(({message}) => {
            console.log(message)
          })
      },
      btnClick () {
        let user = window.sessionStorage.getItem('user')
        if(this.emptyCheck(user)){
          this.postData()
        }else{
          this.$router.push('Login')
        }
      },
      postdata () {
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
          this.error.flag = true;
          this.error.message = message
          console.log(message)
        })      
      }
    }
}
</script>
