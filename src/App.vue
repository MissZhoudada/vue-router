<template>
  <div id="app">
    <nav-menu :title="$route.meta.title" :start="$route.query.s"/>
    <router-view/>
  </div>
</template>

<script>
import navMenu from './components/NavMenu'
export default {
  name: 'App',
  components:{
    navMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 24%;
}
#app .content{
    height: 430px;
    width: 100%;
    font-size: 3em;
    background-color: #cccccc;
    color: #ffffff;
    border-top: 1px solid #ffffff;
}
.roule{
  position:absolute;
  bottom:0;
  text-align: left;
  line-height: 30px;
  color:red
  }
  button{
    width: 200px;
    height:50px;
    background-color: darkcyan;
    color: #ffffff;
    font-size: 20px;
  }
    button:last-child{   
    background-color: rgb(238, 38, 55);
  }
</style>
