<template>
  <div class="top-menu">
    <Menu mode="horizontal" theme="dark" active-key="1">
      <Menu-item name="0" style="font-size:26px">
          优  点
      </Menu-item>
      <Menu-item name="1">
          <Icon type="ios-paper"></Icon>
          内容管理
      </Menu-item>
      <Menu-item name="2">
          <Icon type="ios-people"></Icon>
          用户管理
      </Menu-item>
      <Submenu name="3">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
          </template>
          <Menu-group title="使用">
              <Menu-item name="3-1">新增和启动</Menu-item>
              <Menu-item name="3-2">活跃分析</Menu-item>
              <Menu-item name="3-3">时段分析</Menu-item>
          </Menu-group>
          <Menu-group title="留存">
              <Menu-item name="3-4">用户留存</Menu-item>
              <Menu-item name="3-5">流失用户</Menu-item>
          </Menu-group>
      </Submenu>
      <Menu-item name="4">
          <Icon type="settings"></Icon>
          综合设置
      </Menu-item>
    </Menu>

  </div>
</template>
<style lang="less">
  .top-menu{
    z-index: 1;
  }
</style>
  















<style lang="less">
@import url("../less/main.less");
.top-menu{
  height: @topmenu-marginbottom;
  width: @topmenu-width;
  position: fixed;
  top: 0;
  left:0;
}
</style>
