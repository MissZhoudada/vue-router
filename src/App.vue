<template>
  <div id="app">
    <router-view/>
    <div class="roule">
      <span>页面点击效果如上，存在以下问题：</span>
      <ul>
        <li>如：点击page5页面的  go page3 按钮，跳转到指定的page3页面后
        </li>
        <li>点击page3页面的 back last按钮，理想是跳到他的上一级，page2页面，然后逐级返回到home主页</li>
        <li>但是，页面返回的却是page5页面 </li>
        <li style="color:green">注意：指定的跳转页面不是写死的，是可以人为设置灵活变动的，数量大于等于1</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app p{
  height: 430px;
  width: 300px;
  line-height: 430px;
  font-size: 3em;
  background-color:orange;
  margin: 10px auto;
  color: #ffffff
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
