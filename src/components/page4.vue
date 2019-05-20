<template>
    <div>
        <div class="content">
          page4
          <button @click="goNext">next page5</button>
        </div>
    </div>
</template>
<script>
export default {
  props:['start'],
  methods:{
    goNext(){//跳转方法
      let start = Number(this.start)+1;
      this.$router.push({
        path:"page5?s="+start
      })
    },
    backLast(){//返回之前
        this.$router.go(-1);
    }
  }
}
</script>