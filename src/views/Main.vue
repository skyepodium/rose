<template>
  <div>
    <common-bar
      title="방명록"
      sub
    />
    <div class="list_wrapper">
      <textarea
        id="textarea"
        v-model="contents"
      />
      <common-error
        :message="error.message"
        :flag="error.flag"
      />
      <common-button
        :title="btnMessage"
        @click="btnClick"
      />
      <div class="post_word_all">
        <div class="post_word">
          포스트
        </div>
      </div>
      <ul>
        <li
          v-for="(item, key) in list"
          :key="key"
        >
          <div class="contents">
            {{ item.contents }}
          </div>

          <div class="sub">
            {{ item.username }} | 2019년 2월
          </div>
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
        error: {
          flag: false,
          message: null
        },
        contents: null,
        btnMessage: '로그인하고 작성하기',
        list: []
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
        axios.get('/api/postGet')
        .then(({data}) => {
            console.log(data)
            this.list = data.list
          })
        .catch(({message}) => {
            console.log(message)
          })
      },
      btnClick () {
        let user = window.sessionStorage.getItem('user')
        if(this.emptyCheck(user)){
          if(this.emptyCheck(this.contents)){
            this.postData()
          }else{
            this.error.flag = true
            this.error.message = '내용을 입력해주세요'
          }
        }else{
          this.$router.push('Login')
        }
      },
      postData () {
        let body = {
          id: window.sessionStorage.getItem('user'),
          contents: this.contents
        }
        axios.post('/api/postSave', body)
        .then(({data}) => {
          console.log(data)
          if(data.result) {
            this.contents = null
            this.getData()
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
