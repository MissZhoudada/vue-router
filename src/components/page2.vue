<template>
    <div>
        <div class="content">
          page2
          <button @click="goNext">next page3</button>
          <button @click="goNextFive">next page5</button>
        </div>
    </div>
</template>
<script>
export default {
  props:['start'],
  methods:{
    goNext(){//跳转方法
      this.$router.push({
        path:"page3?s="+1
      })
    },
    goNextFive(){//跳转方法
      this.$router.push({
        path:"page5?s="+1
      })
    },
    backLast(){//返回之前
        this.$router.go(-1);
    }
  },
  
}
</script>