<template>
<div>
我是文档
<hr>
<ul class='nav'>
<router-link :to="{path:'/document1'}" tag='li'>study</router-link>
<router-link :to="{name:'work'}" tag='li'>work</router-link>
<router-link :to="{name:'hobby'}" tag='li'>hobby</router-link>
</ul>

 <hr>
 测试数据：{{test}}
 <router-view></router-view>

</div>
</template>
<script>
  export default{
  data(){
  return{
  test:'改变前'
  }
  },

  beforeCreate(){
  console.log('beforeCreate')
  },
  beforeRouteEnter(to,from,next){
  console.log("beforeRouteEnter")
  next(
  (vm)=>{ vm.test = '改变了'

  });
  },
  beforeRouteUpdate(to,from,next){
  console.log("beforeRouteUpdate")
  next();
  },
  beforeRouterLeave(to,from,next){
  next();

  }
  }
</script>
<style>
</style>
