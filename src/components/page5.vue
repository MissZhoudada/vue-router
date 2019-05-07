<template>
    <div>
        <button @click="backLast">back last</button>
        <button @click="goNext">next page6</button>
        <div>
            <button @click="goTargetPage">go page3（指定）</button>
        </div>
        <p>page5</p>
    </div>
</template>
<script>
export default {
  methods:{
    goNext(){//跳转方法
      this.$router.push({
        name:"page6"
      })
    },
    backLast(){//返回之前
        this.$router.go(-1);
    },
    goTargetPage(){//去目标页面  这个项目里面是动态的，这里我先写死了给你看效果
        this.$router.push({
            name:"page3"
        })
    }
  }
}
</script>