<template>
<div>
	<div class="button_wrap">
		<Button type="success" shape="circle" icon="plus" @click="showAddModal">新增</Button>
	</div>
    <Table border :columns="columns" :data="list"></Table>
</div>
	
</template>
<script>
	import Data from "../../data/a.json"
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '菜品分类名称',
                        key: 'classify',
                        width: 250,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                
                                h('strong', params.row.classify)
                            ]);
                        }
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
                                        marginRight: '10px'
                                    },
                                    on: {
                                        click: () => {
                                        	this.$router.push('/home/foods/' + this.list[params.index].menuId)
                                        }
                                    }
                                }, '查看菜品'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '10px'
                                    },
                                    on: {
                                        click: () => {
                                        	this.showconfirm(this.list[params.index].menuId)
                                            
                                        }
                                    }
                                }, '删除分类'),
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                 	
                                    on: {
                                        click: () => {
                                            this.showModifyModal(params.index)
                                        }
                                    }
                                }, '修改分类'),
                            ]);
                        }
                    }
                ],
                list: [],
                changedName:'',
                addClassify:''
            }
        },
        created() {
            this.getData();
        },
        methods: {
        	getData(){
        	    this.list = Data.list;
        	},
            showconfirm (menuId) {
                this.$Modal.confirm({
                    title: '删除分类',
                    content: `确定删除菜品分类 ${this.list[menuId].classify} 吗？`,
                    onOk: () => {
                    	this.remove(menuId)
                    }
                })
            },
            remove (menuId) {
            	console.log(menuId)
            },
            showModifyModal(index){
            	this.$Modal.confirm({
            	    title: '修改分类',
            	    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.list[index].classify,
                                autofocus: true
                            },
                            style: {
                                marginTop: '20px'
                            },
                            on: {
                                input: (val) => {
                                    this.changedName = val;
                                }
                            }
                        })
                    },
            	    onOk: () => {
            	    	if (this.changedName.length < 1) {
            	    		this.$Message.warning('分类名称不能为空！');
            	    		return;
            	    	}
            	    	console.log(this.changedName)
            	    }
            	})
            },
            showAddModal(){
            	this.$Modal.confirm({
            	    title: '添加分类',
            	    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.addClassify,
                                autofocus: true
                            },
                            style: {
                                marginTop: '20px'
                            },
                            on: {
                                input: (val) => {
                                    this.addClassify = val;
                                }
                            }
                        })
                    },
            	    onOk: () => {
            	    	if (this.addClassify.length < 1) {
            	    		this.$Message.warning('分类名称不能为空！');
            	    		return;
            	    	}
            	    	console.log(this.addClassify)
            	    }
            	})
            }
        },
 
    }
</script>
<style>
	.button_wrap{
		width: 200px;
		display: inline-block;
		padding:20px 20px 10px 20px; 
	}
</style>