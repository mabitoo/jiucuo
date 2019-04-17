<template>
<div >
 user
 <div class='user-list'>
 <router-link :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}" v-for="(item,index) in userList" :key="index">{{item.userName}}</router-link>
 </div>
 <div class="user-info" v-if="userInfo.userName">
 <p>姓名:{{userInfo.userName}}</p>
 <p>性别:{{userInfo.sex}}</p>
 <p>爱好:{{userInfo.hobby}}</p>
 </div>
 <hr>
 <div   v-if="userInfo.userName"> 
 <router-link exact :to="{path:'',query:{info:'follow'}}">我的关注</router-link>
 
 
 <router-link exact  to="?info=share">我的分享</router-link>
 <div>
 {{$route.query}}
 <router-view></router-view>
 </div>
 </div>
 </div>
 
</template>
<script>
let data=[
{
	id:1,
	tip:'vip',
	userName:'leo1',
	sex:'男',
	hobby:'写代码'
},
{
	id:2,
	tip:'commen',
	userName:'leo2',
	sex:'男',
	hobby:'唱歌'
},
{
	id:3,
	tip:'sorry',
	userName:'leo3',
	sex:'男',
	hobby:'读书'
}


]
  export default{
  data(){
  return{
  userList: data,
  userInfo:{}
  }
  },
  watch:{

  //路径发生变化 。$route 会从新赋值  ，监控了这个属性  ，会执行这个函数
  $route(){
  console.log(this.$route.params.userId)
   var id =  this.$route.params.userId;

   if(id){
   this.userInfo = this.userList.filter((item)=>{
    return item.id==id
 })[0]
 }else{
 this.userInfo={}
 }
  }
  },
  created(){

  //渲染这个组件会调用一次这个生命周期
  //复用这个组件，这个函数都不会再次被调用
  //地址一旦发生编发，$route会重新生成一个路由信息对象
  
 var id =  this.$route.params.userId;

   if(id){
   this.userInfo = this.userList.filter((item)=>{
    return item.id==id
 })[0]
 }else{
 this.userInfo={}
 }
 console.log(this.userInfo.userName)
  
  }}
</script>
<style>
</style>
