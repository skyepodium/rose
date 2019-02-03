<template>
  <div>
    <div>
      방명록
    </div>
    <textarea />
    sfsdf
    <div>
      여기에 글이 보일것이다!!!
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

</style>
