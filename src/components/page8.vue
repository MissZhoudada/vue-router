<template>
    <div>
        <div class="content">
          page8
          <button @click="goNext">next page9</button>
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
        path:"page9?s="+start
      })
    },
    backLast(){//返回之前
        this.$router.go(-1);
    },
    goTargetPage(){//去目标页面  这个项目里面是动态的，这里我先写死了给你看效果
        this.$router.push({
            name:"page1"
        })
    }
  }
}
</script>