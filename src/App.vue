<template>
  <div id="app">
    <Header/>
    <div class="o-banner">
      <div class="o-contentWrap">
        <h1>{{greetingHeader}}</h1>
        <p>{{greetingMessage}}</p>
      </div>
      <img src="./assets/images/colorfill.jpg" alt="">
    </div>
    <div class="o-articles">
      <card :cardDate= "[ {month: 'Jun', day: '30'} ]"
        cardHeader= "Hello World"
        cardContent= "Lorem ipsum"
      />
      <card :cardDate= "[ {month: 'Jun', day: '31'} ]"
        cardHeader= "Hello Universe"
        cardContent= "Lorem ipsum Dolor isset"
      />
      <card :cardDate= "[ {month: 'Jun', day: '31'} ]"
        cardHeader= "Hello Universe"
        cardContent= "Lorem ipsum Dolor isset"
      />
      <card :cardDate= "[ {month: 'Jun', day: '31'} ]"
        cardHeader= "Hello Universe"
        cardContent= "Lorem ipsum Dolor isset"
      />
    </div>
    <Footer copyright="Anvaya Cove - Copyright © 2016 - Ayala Land Premier" />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Card,
    Footer
  },
  data () {
    return {
      greetingHeader: 'Welcome to Anvaya Cove',
      greetingMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto minus voluptates saepe laudantium sint libero eum illum provident, vero omnis et atque laboriosam! Adipisci doloribus temporibus culpa nostrum atque sint!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  body{
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  @mixin breakpoint($point){
    @media (min-width:$point){ @content; }
  }
  .o-banner{
    position: relative;
    background: url('./assets/images/mainbanner.png') no-repeat;
    background-position-y: -350px;
    height: 250px;
    color: #ffffff;
    .o-contentWrap{
      position: absolute;
      left: 0;
      right: 0;
      top: 80px;
      margin: auto;
      width: 60%;
      z-index: 1;
    }
    img{
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.6;
      height: 100%;
      width: 100%;
    }
    h1{
      margin: 0 auto;
    }
  }
</style>
