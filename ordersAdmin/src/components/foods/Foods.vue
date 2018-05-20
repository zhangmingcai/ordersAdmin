<template>
<div>
	<div class="button_wrap">
		<Button type="success" shape="circle" icon="plus" @click="showAddModal">新增</Button>
	</div>

    <div class="select_wrap">
        <Select v-model="searchId" style="margin-bottom:15px;" placeholder="分类查询菜品">
        <Option value="0">全部</Option>
            <Option v-for="item in classifyList" :value="item.menuId">{{ item.classify }}</Option>
        </Select>
    </div>

    <div class="search_wrap">
        <Button type="primary" icon="ios-search" @click="search">查询</Button>
    </div>


    <Table border :columns="columns" :data="list"></Table>


    <Modal
        v-model="ifShowModal"
        title="新增菜品"
        :loading="loading"
        @on-ok="addFood"
        @on-cancel="cancel">
        <Input v-model="addFoodInfo.foodTitle" placeholder="菜品名称" style="margin-bottom:15px; width:200px;"></Input>
        <Input v-model="addFoodInfo.foodPrice" placeholder="菜品价格" style="margin-bottom:15px; width:200px;"></Input>
        <Input v-model="addFoodInfo.foodDesc" placeholder="菜品描述" style="margin-bottom:15px;"></Input>

        <Select v-model="addFoodInfo.menuId" style="margin-bottom:15px;" placeholder="请为这道菜选择一个分类">
            <Option v-for="item in classifyList" :value="item.menuId">{{ item.classify }}</Option>
        </Select>

        <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击这里或者将图片拖到这里上传图片</p>
            </div>
        </Upload>
    </Modal>

    <Modal
        v-model="ifShowImgModal"
        title="预览"
        cancel-text="关闭"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="preview_wrap">
            <img :src="previewSrc">
        </div>
    </Modal>

    <Modal
        v-model="ifShowChangeModal"
        title="菜品修改"
        :loading="changeloading"
        @on-ok="changeFood"
        @on-cancel="cancel">
        <Input v-model="changeFoodInfo.foodTitle" placeholder="菜品名称" style="margin-bottom:15px; width:200px;"></Input>
        <Input v-model="changeFoodInfo.foodPrice" placeholder="菜品价格" style="margin-bottom:15px; width:200px;"></Input>
        <Input v-model="changeFoodInfo.foodDesc" placeholder="菜品描述" style="margin-bottom:15px;"></Input>

        <Select v-model="changeFoodInfo.menuId" style="margin-bottom:15px;" placeholder="请为这道菜选择一个分类">
            <Option v-for="item in classifyList" :value="item.menuId">{{ item.classify }}</Option>
        </Select>

        <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击这里或者将图片拖到这里上传图片</p>
            </div>
        </Upload>
    </Modal>
</div>
	
</template>
<script>
	import Data from "../../data/a.json"
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '名称',
                        key: 'foodTitle',
                        align: 'center',
                        width:'150px',
                        render: (h, params) => {
                            return h('div', [
                                
                                h('strong', params.row.foodTitle)
                            ]);
                        }
                    },
                    {
                        title: '价格',
                        key: 'foodPrice',
                        align: 'center',
                        width:'100px',
                        render: (h, params) => {
                            return h('div', [
                                
                                h('strong', params.row.foodPrice)
                            ]);
                        }
                    },
                    {
                        title: '描述',
                        key: 'foodDesc',
                        align: 'center',
                        width:'200px',
                        render: (h, params) => {
                            return h('div', [
                                
                                h('strong', params.row.foodDesc)
                            ]);
                        }
                    },
                    {
                        title: '所属分类',
                        key: 'classify',
                        width:'100px',
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
                                            this.previewSrc = this.list[params.index].foodSrc
                                            this.ifShowImgModal = true;
                                        }
                                    }
                                }, '预览图片'),
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
                                        	this.showconfirm(params.index)
                                            
                                        }
                                    }
                                }, '删除菜品'),
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                 	
                                    on: {
                                        click: () => {
                                            this.changeFoodInfo = this.list[params.index]
                                            this.ifShowChangeModal = true;
                                        }
                                    }
                                }, '修改菜品'),
                            ]);
                        }
                    }
                ],
                list: [],
                classifyList:[],
                addFoodInfo:{
                    foodTitle: "",
                    foodPrice: "",
                    foodDesc: "",
                    classify:"",
                    foodSrc: ""
                },
                ifShowModal:false,/*新增弹窗*/
                loading: true,
                ifShowImgModal:false,/*预览弹窗*/
                previewSrc:'',
                ifShowChangeModal:false,/*修改弹窗*/
                changeFoodInfo:{
                    foodTitle: "",
                    foodPrice: "",
                    foodDesc: "",
                    classify:"",
                    foodSrc: ""
                },
                changeLoading:true,
                searchId:'0'/*搜索分类id*/
            }
        },
        created() {
            this.analysisUrl();
            this.getClassifyList()
        },
        methods: {
            analysisUrl(){
                /*分析地址确定请求全部还是某个分类*/
                console.log(this.$route.params,"这是请求进入的路径");
                if (this.$route.params.searchId*1 > 0) {
                    /*通过分类页进入的此页，需要去查searchid 对应的数据并展示*/
                    this.searchId = this.$route.params.searchId*1;
                }else{
                    this.getData();
                    this.searchId = '0';
                }
                
            },
        	getData(){
                /*请求全部菜品数据*/
        	    this.list = Data.list2;
        	},
            getClassifyList(){
                /*请求全部分类数据*/
                this.classifyList = Data.list;
            },

            showconfirm (index) {
                this.$Modal.confirm({
                    title: '删除菜品',
                    content: `确定删除菜品 ${this.list[index].foodTitle} 吗？`,
                    onOk: () => {
                    	this.remove(this.list[index].foodId)
                    }
                })
            },
            remove (foodId) {
            	console.log(foodId)
            },
            
            showAddModal(){
                this.ifShowModal = true;
            },
            /*这里需要明确menuid,和价格是字符串还是数字*/
            addFood(){
                if (!this.addFoodInfo.foodTitle) {
                    this.$Message.warning('菜品名称不能为空！');
                    this.keepModal();
                    return false;
                }
                if (this.addFoodInfo.foodPrice == '' || this.addFoodInfo.foodPrice < 0) {
                    this.$Message.warning('菜品价格输入不合法！');
                    this.keepModal()
                    return false;
                }
                if (!this.addFoodInfo.classify) {
                    this.$Message.warning('必须为菜品选择一个分类！');
                    this.keepModal()
                    return false;
                }
                
                this.doAddAjax();
            },
            // modal有bug点击确定就会自己消失，此法解决此bug
            keepModal(){
                this.loading = false;
                setTimeout(()=>{
                    this.loading = true;
                }, "1000");
            },
            doAddAjax(){
                console.log(this.addFoodInfo)
                // this.ifShowModal = false;
            },
            changeFood(){
                if (!this.changeFoodInfo.foodTitle) {
                    this.$Message.warning('菜品名称不能为空！');
                    this.keepChangeModal();
                    return false;
                }
                if (this.changeFoodInfo.foodPrice == '' || this.changeFoodInfo.foodPrice < 0) {
                    this.$Message.warning('菜品价格输入不合法！');
                    this.keepChangeModal()
                    return false;
                }
                if (!this.changeFoodInfo.classify) {
                    this.$Message.warning('必须为菜品选择一个分类！');
                    this.keepChangeModal()
                    return false;
                }
                
                this.doChangeAjax();
            },
            keepChangeModal(){
                this.changeLoading = false;
                setTimeout(()=>{
                    this.changeLoading = true;
                }, "1000");
            },
            doChangeAjax(){
                console.log(this.changeFoodInfo)
                // this.ifShowChangeModal = false;
            },
            search(){
                console.log(this.searchId)
            }
            
        },
 
    }
</script>
<style>
	.button_wrap{
        vertical-align: middle;
		width: 200px;
		display: inline-block;
		padding:20px 20px 10px 20px; 
	}
    .select_wrap{
        vertical-align: middle;
        width: 200px;
        display: inline-block;
        padding-top: 20px;
    }
    .search_wrap{
        vertical-align: middle;
        width: 200px;
        margin-left: 10px;
        display: inline-block;
        padding-top: 4px;
    }
    .preview_wrap{
        margin:0 auto;
        width: 300px;
        /*height:auto;*/
        height:200px;
        img{
            width: 100%;
            height:auto;
        }
    }
</style>