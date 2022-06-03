<template>
  <PostForm />
  <h1>{{postsCount}}</h1>
  <div class="post" v-for="post in allPosts" :key="post.id">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <Notes />
  </div>
</template>

<script>
import Notes from "./components/Notes";
import {mapGetters, mapActions} from 'vuex'
import PostForm from './components/PostForm'

export default {
  name: 'App',
  components: {
    Notes,
    PostForm,
  },
  // data () {
  //   return {
  //     posts: []
  //   }
  // },
  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts;
  //   }
  // },
  computed: mapGetters(['allPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    // const posts = await res.json();
    // this.posts = posts;

    // this.$store.dispatch("fetchPosts")

    this.fetchPosts()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/ 
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
