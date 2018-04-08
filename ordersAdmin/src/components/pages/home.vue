<template>
<div>
    <top-menu></top-menu>
    <div class="container">
        <side-bar @sidebar-say="listenSidebar">
            
        </side-bar>
        <content :if-change-msg="appSayWidth">
        </content>     
    </div>
</div>
</template>

<script>
    import TopMenu from '@/components/TopMenu.vue'
    import SideBar from '@/components/SideBar.vue'
    import Content from '@/components/Content.vue'

export default {
    data () {
        return {
            appSayWidth: false
        }
    },
    methods: {
        listenSidebar: function (msg) {
            this.appSayWidth = msg;
        }
    },
    components: {
        TopMenu,
        SideBar,
        Content
    }
}
</script>

<style lang="less">
    @import url("../../less/main.less");
    .container{
        margin-top: @topmenu-marginbottom;
    }
</style>
