<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Daily Startup Battles</h3>
    <hr/>
  
    <div class="col-sm-4" v-for="post in blogPosts">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ post.title }} </h3>
        </div>
        <div class="panel-body">
          <p>
            <span class="badge alert-info"> Sponsor: </span> {{ post.content }} </p>
          <p>
            <span class="badge alert-danger"> SeedFund: </span>
            <strong> ${{ post.user }} </strong>
          </p>
        </div>
      </div>
    </div>
  
    <div class="col-sm-12">
      <div class="jumbotron text-center" v-if="isLoggedIn()">
        <h2>View Private Startup Battles</h2>
        <router-link class="btn btn-lg btn-success" to="/private-battles">Private Startup Battles</router-link>
      </div>
      <div class="jumbotron text-center" v-else>
        <h2>Get Access to Private Startup Battles by Logging In</h2>
      </div>
    </div>
  </div>
</template>

<script>

import AppNav from './AppNav';
import { isLoggedIn } from '../../utils/auth'
import { getBlogPosts } from '../../utils/blog-api'

export default {
  name: 'blogPosts',
  components: {
    AppNav,
  },
  data() {
    return {
      blogPosts: '',
    }
  },
  methods: {
    isLoggedIn() {
      return isLoggedIn()
    },
    getBlogPosts() {
      getBlogPosts().then((posts) => {
        this.blogPosts = posts
      })
    },
  },
  mounted() {
    this.getBlogPosts()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
