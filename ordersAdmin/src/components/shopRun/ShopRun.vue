<template>
    <div class="con clearfix">
        <div class="basic left">
            <h1>基础信息</h1>
            <p class="name">
                <span>
                    商铺名称：
                </span>
                <span>
                    的方法法法师法撒旦
                </span>
            </p>
            <p class="runtime">
                <span>
                    运营时间：
                </span>
                <span>
                    09:00-10:00
                </span>
                
            </p>
            <p class="said">
                <span>
                    老板说：
                </span>
                <span>
                    还吃不贵
                </span>
            </p>
            <p class="phone">
                <span>
                    联系方式：
                </span>
                <span>
                    12345678911
                </span>
            </p>
            <p class="adress">
                <span>
                    商铺地址：
                </span>
                <span>
                    北京市华电去牛鼻村贼牛逼
                </span>
            </p>
            <div class="edit_btn">
                <Button type="primary" long>修 改</Button>
            </div>
            <div class="true_img">
                <div class="head_con clearfix">
                    <h2 class="title left">商家实景</h2>
                    <div class="add_con right">
                        <Button type="success" shape="circle" icon="plus" @click="">新增图片</Button>
                    </div>
                </div>
                <div class="img_con clearfix">
                    <div class="item left">
                        <img src="./timg.jpg" alt="">
                    </div>
                    <div class="item left">
                        <img src="./timg.jpg" alt="">
                    </div>
                    <div class="item left">
                        <img src="./timg.jpg" alt="">
                    </div>
                    <div class="item left">
                        <img src="./timg.jpg" alt="">
                    </div>
                    <div class="item left">
                        <img src="./timg.jpg" alt="">
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div class="operate right">
            <h1>运营信息</h1>
            <div class="notice_con">
                <span class="title">公告与通知：</span>
                <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="有什么想对顾客说的吗"></Input>
                <div class="save_btn clearfix">
                    <Button type="info right">保存</Button>
                </div> 
            </div>
            <div class="switch_con">
                <span class="ifOpen">是否打烊：</span>
                <i-switch size="large">
                    <span slot="open">营业</span>
                    <span slot="close">打烊</span>
                </i-switch>
            </div>
            <div class="reduce_con clearfix">
                <span class="reduce left">满减活动：</span>
                <div class="add_reduce_con right">
                    <Button type="success" shape="circle" icon="plus" @click="">新增满减</Button>
                </div>
                
            </div>
            <Table border :columns="columns" :data="data6"></Table>
        </div>
    </div>
</template>

<script>
  	export default {
        data () {
            return {
                columns: [
                    {
                        title: '满多少',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '减多少',
                        key: 'age'
                    },
                    
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '开启'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '关闭'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
  	}
</script>

<style lang='less'>
@import url("../../less/main.less");
.con{
    padding:20px 30px;
    .basic,.operate{
        width:50%;
        box-sizing:border-box;
        border:1px solid #e9eaec; 
        .transition;
        height:700px;
        &:hover{
            box-shadow: 0 1px 6px rgba(0,0,0,.2);
            border-color: #eee;
            h1{
                color:#1c2438;
            }
        }
        h1{
            text-align: center;
            font-size: 16px;
            padding:10px 0;
            color:#999;
            .transition;
            border-bottom: 1px solid #e9eaec;
        }
        
    }
    .basic{
        padding:20px 30px; 
        &:hover{
            p{
                span{
                    color:#1c2438;
                    &:last-child{
                        color:#666;
                    };
                }
            }
            .title{
                color:#1c2438 !important;
            }
        }
        p{
            
            padding:6px 0;
            span{
                .transition;
                color:#999;
                font-size: 14px;
                &:last-child{
                    padding-left:10px;
                    color:#999;
                };
            }

        }
        p.name{
            padding-top:20px;
        }
        .edit_btn{
            width:80%;
            margin:20px auto;
        }
        .true_img{
            padding:6px 0;
            .head_con{
                padding:6px 0;
                .title{
                    .transition;
                    color:#999;
                    font-size: 16px;
                }
            }
            .img_con{
                padding:20px 10px;
                border: 1px solid #e9eaec;
                .item{
                    width:150px;
                    margin-right:20px;
                    margin-bottom:20px;
                    img{
                        width:100%;
                        height:auto;
                    }
                }
            }
        } 
    }
    .operate{
        padding:20px 30px; 
        &:hover{
            .notice_con{
                .title{
                    color:#1c2438;
                }
            }
            .switch_con{
                .ifOpen{
                    color:#1c2438;
                }
            }
            .reduce_con{
                .reduce{
                    color:#1c2438;
                }
            }
        }
        .notice_con{
            padding-top:20px;
            .title{
                .transition;
                color:#999;
                font-size: 14px;
            }
            div{
                margin-top:10px;
            }
            .save_btn{
                margin:10px auto;
            }
        }
        .switch_con{
            margin:10px 0;
            .ifOpen{
                .transition;
                color:#999;
                font-size: 14px;
            }
        }
        .reduce_con{
            margin:10px 0;
            .reduce{
                .transition;
                color:#999;
                font-size: 14px;
            }
        }
    }
}
</style>

