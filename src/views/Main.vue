<template>
  <div>
    <div id="bar">
      <router-link
        id="logo"
        to="Main"
        class="link"
      >
        방명록
      </router-link>
    </div>
    <div class="list_wrapper">
      <textarea
        id="textarea"
        rows="10"
        cols="50"
      />
      <button class="btn">
        작성
      </button>
      <ul>
        <li
          v-for="(item, key) in list"
          :key="key"
        >
          {{ item.title }}
        </li>
      </ul>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Main',
    data() {
      return {
        list: [

        ]
      }
    },
    created() {
      this.getData()
    },
    methods: {
        getData() {
            axios.get('https://api.hnpwa.com/v0/news/1.json')
            .then(({data}) => {
              this.list = data
            })
            .catch(({message}) => {
                console.log(message)
            })
        },
    }
}
</script>

<style>
#bar {
  width:100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #41b883;
}
#bar .link{
  color:white;
  font-size: 20px;
  text-decoration: none;
  display:block;
  margin: auto;
}

.list_wrapper{
  width: calc(100% - 60px);
  margin: auto;
}
.list_wrapper ul {
  margin-top: 30px;
}
.list_wrapper ul li{
  list-style: none;
  line-height: 50px;
  font-size: 20px;
}

#textarea {
  display:block;
  margin: auto;
  resize: none;
  margin-top: 30px;
  width: 100%;
  height: 150px;
  border: 1px solid #ececec;
  box-sizing: border-box;
  font-size: 20px;
}

.btn{
    width:100%;
    height:50px;
    background-color: #41b883;
    color:white;
    font-size: 20px;
    margin-top:30px;  
}
</style>
