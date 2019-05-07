<template>
    <div>
        <button @click="backLast">back last</button>
        <button @click="goNext">next page5</button>
        <p>page4</p>
    </div>
</template>
<script>
export default {
  methods:{
    goNext(){//跳转方法
      this.$router.push({
        name:"page5"
      })
    },
    backLast(){//返回之前
        this.$router.go(-1);
    }
  }
}
</script>