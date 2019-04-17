import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import home from '@/components/home'
import document1 from '@/components/document1'
import user from '@/components/user'
import nofound from '@/components/404'
import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import slider from '@/views/slider'

Vue.use(Router)


const router= new Router({
  
	mode:'history',  //取消#
	linkActiveClass:'is-active',//active 状态设置
	scrollBehavior(to,from,savePosition){//点击浏览器的前几后退或切换导航触发
		//console.log(to) ;//要进去的目标路由对象  要去想哪里
		//console.log(from);//离开的路由对象
		//console.log(savePosition)//记录滚动条的目标 点击前进后退的时候记录值
		// if(savePosition){
		// 	return savePosition;
		// }else{
		// 	return{x:0,y:0}
		// }
		if(to.hash){
			return{
				selector:to.hash
			}
		}
		
	},
  routes: [
  {
  	path:'/user/:tip?/:userId?',// /user/tip/1     /user/commen/1 动态路径
  	component:user,
    meta:{
      index:3,
      title:'user'
    }
  },
  
   
  {
  	path:'/',
  	component:home,
    meta:{
      index:0,
      title:'home'
    }
  },
    {
      path:'/document1',
      component:document1,
     
      children:[{
      	path:'/', //默认的子路由 激活状态 直接点开document  这个就会展现出来
      	component:study,
         meta:{
      index:4,
      login:true,
      title:'document'
    }

      },
      {
      	path:'/work', //   加上 /  从 /decument/work  变成 /work
      	name:'work',
      	component:work

      },
      {
      	path:'/hobby',
      	name:'hobby',
      	component:hobby

      }

      ]
    },
    {
    	path:'/about',
    	//alias:'/index', //index 目录指向about
     /*beforeEnter(to,form,next){
        console.log("beforeEnter")
        next()
      },*/
      meta:{
      index:2,
      title:'about'
    },
    	name:'about',
    	components:{
    		default:about,//多种视图 通过 rotur-view name=slider
    		slider:slider


    	}
    },
    
    {
    	path:'*',
    	//component:nofound
    	//redirect:'/home'
    	//redirect:{path:'/home'}
    	//redirect:{name:'home'}
    	redirect:(to)=>{//动态设置重定向的目标
    		//目标路由对象 就是访问路径的路由信息
    		if(to.path==='/123'){
    			return '/home'
    		}else if(to.path==='/456'){
    			return {path:'/document'}
    		}else{
    			return{name:'about'}

    		}
    		
    		//console.log(to)
    		//return'/home'
    	}
    }

  ]
});
/*router.beforeEach((to,from,next)=>{
  //console.log("beforeEach")
  //next();
  //next(false)
  if(to.meta.login){
    next('/login')   //如果是true 进去/login 页面
  }else{
    next()
  }
});

  router.afterEach((to,form)=>{
   // console.log(to.meta.title)
    if(to.meta.title){
      window.document.title = to.meta.title 
    }else{
      window.document.title = 'miaov'
    }


  })*/

export default  router;


