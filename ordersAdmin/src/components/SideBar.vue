<template>
  <div class="sidebar" :class="{'sidebar-mini': sidebarShow}">
    <div class="toggle-btn">
        <Icon type="navicon" @click="toggleSidebar"></Icon>
    </div>
    <div class="menu">
        <router-link to="/home/deskStatus">
            <Icon type="flag"></Icon>
            <span>餐桌实况</span>
        </router-link>
        <router-link to="/home/orders">
            <Icon type="clipboard"></Icon>
            <span>订单管理</span>  
        </router-link> 
        <router-link to="/home/assortment">
            <Icon type="map"></Icon>
            <span>菜单分类</span>   
        </router-link>
        <router-link to="/home/foods">
            <Icon type="pizza"></Icon>
            <span>菜品管理</span>  
        </router-link>  
        <router-link to="/home/twoBarCodes">
            <Icon type="qr-scanner"></Icon>
            <span>桌码管理</span>  
        </router-link> 
        <router-link to="/home/shopsRun">
            <Icon type="home"></Icon>
            <span>商铺运营</span> 
        </router-link>  
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sidebarShow: false
    }
  },
  methods: {
    toggleSidebar: function () {
      // 传递sidebar变化的消息给父组件，由父组件告诉content组件
      this.sidebarShow = !this.sidebarShow;
      this.$emit('sidebar-say', this.sidebarShow);
    }
  }
}
</script>
<style lang="less">

// 整体布局公用样式
@import url("../less/main.less");
// sidebar基础样式
.sidebar{
    transition: all .5s ease;
    position: fixed;
    top:@topmenu-marginbottom;
    left: 0;
    width: @sidebar-width;
    height: 1000px;
    background-color: #171D21;
  

    .toggle-btn{ 
        padding-left: 120px;
        margin-bottom: 10px;
        height:40px;
        font-size:34px;
        &:hover{
            color:#fff;
        }
    }
    .menu{
        background-color: #171D21;  
        height: 1000px;
        a{
            color:#9ea7b4;
            height:50px;
            line-height: 50px;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
            display:block;
            
            &.router-link-active{
                color: #39f;
                border-right: 2px solid #39f;
                background-color: #313540;
                
                &:hover{
                    color:#39f;
                    background-color: #313540;
                }
            }
            &:hover{
                color:#fff;
                background-color: #3c3d40;
            }
            i{
                font-size: 18px;
            }
            span{
                display: inline-block;
                margin-left: 8px;
            }
        }
    }
}
// 切换sidebar 动画
.sidebar-mini {
    width:60px;
    .toggle-btn{
        text-align: center;
        padding:0;
    }
    ul{
        li{
            i{        
                font-size: 26px;
            }
            span{
                display:none;
            }
        }
    }
}








//手机或平板适配
@media (max-width: 768px){
  .sidebar{
    width:@sidebar-phone-width !important;
    min-width:60px;
    .toggle-btn{
      
    }
    ul{
      li{
        i{
          
        }
        span{
          
        }
      }
    }
  }
}
</style>