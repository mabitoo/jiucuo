<template>
  <div id="app">
    <div class='nav-box'>
     <ul class='nav'>
     <router-link to="/"  exact  tag="li">
     <i></i>
     <span>home</span>
     </router-link>
     <li>
     <router-link :to="{path:'/about#abc'}" event='mouseover'>about</router-link>
     </li>
     <li>
  <router-link to="/document1"event='mouseover' active-class='activeClass'>document</router-link> 
     </li>
     <li>
     <router-link to="/user" active-class='activeClass'>user</router-link> 
     </li>
     
     </ul>
    </div>
    <input type='button' value="后退" @click='backHandle'>
    <input type='button' value="前进" @click='forwordHandle'>
    <input type='button' value="控制前进后退的步数" @click='goHandle'>
    <input type='button' value="控制指定的导航push" @click='pushHandle'>
    <input type='button' value="控制指定的导航replace" @click='replaceHandle'>
    {{$route.meta.index}}
  <transition :name="names"  mode="out-in">  <router-view class="center"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
     $route(to,from){
    // console.log(to.meta.index) //目标导航下标
     //console.log(from.meta.index)//离开导航下标
     if(to.meta.index>from.meta.index){
     this.names='right'
     }else{
     this.names='left'
     }
     //console.log(this.names)
     }
  },
  data(){
  return{
  index:'/home',
  names:'left'

  }
  

  },
  methods:{
  backHandle(){
  this.$router.back()
  },
  forwordHandle(){
  this.$router.forward()
  },
  goHandle(){
   this.$router.go(-2)
  },
  pushHandle(){
  //this.$router.push('/document')
  this.$router.push({path:'/document'})
  },
   replaceHandle(){
  //this.$router.replace('/document')
  this.$router.replace({path:'/document'})
  }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}


.nav-box{
padding-top:20px;
width:500px;
height:50px;
  position:absolute;

  left:50%;
  top:0;
  margin-left:-250px;
}
.nav-box li{
  height:10px;
  width:50px;
  list-style:none;
  float:left;
  margin-left:50px;
}
.is-active{
  background:yellow;
}

.activeClass{
  background:pink;
}
.center{
 margin:50px 0;
 text-align:center;
 font-size:20px;
}
a{
  text-decoration:none;
}

.v-enter{
  opacity:0;
}
.v-enter-to{
  opacity:1;
}
.v-enter-active{
  transition:1s;
}
.v-leave{
  opacity:0;
}
.v-leave-to{
  opacity:1;
}
.v-leave-active{
  transition:2s;
}

.left-enter{
  transform:translateX(100%);
}
.left-enter-to{
  transform:translateX(0);
}
.left-enter-active , .left-leave-active{
  transition:2s;
}
.left-leave{
  transform:translateX(0);
}
.left-leave-to{
  transform:translateX(-100%);}

  .right-enter{
  transform:translateX(-100%);
}
.right-enter-to{
  transform:translateX(0);
}
.right-enter-active , .right-leave-active{
  transition:2s;
}
.right-leave{
  transform:translateX(0);
}
.right-leave-to{
  transform:translateX(100%);}





</style>
