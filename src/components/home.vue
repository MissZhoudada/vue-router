<template>
  <div>
    <div class="content">
      home
      <button @click="goNext">next page1</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    goNext(){//跳转方法
      this.$router.push({
        path:"page1?s="+1
      })
    }
  }
}
</script>


