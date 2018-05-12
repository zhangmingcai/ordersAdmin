<template>
  <div>
    <div class="tool-bar">
      <div class="search">
        <Select v-model="userTypeForSearch" style="width:100px">
          <Option v-for="userType in userTypeList" :value="userType.userType" :key="userType.userType">
            {{ userType.userTypeName }}
          </Option>
        </Select>
        <Input v-model="userNameForSearch" style="width: 180px" placeholder="请输入用户名"></Input>
        <Button type="primary" shape="circle" icon="ios-search"></Button>
      </div>
      <div class="buttons">
        <Button type="success" @click="addUserModal.show = true">添加</Button>
      </div>
    </div>
    <Table :columns="columns" :data="userList"></Table>
    <Page :total="100" show-elevator></Page>
    <Modal
      v-model="addUserModal.show"
      title="添加用户"
      :loading="true"
      @on-ok="addUser">
      <Form :model="addUserForm" label-position="right" :label-width="100">
        <Form-item label="姓名">
          <Input v-model="addUserForm.userName"></Input>
        </Form-item>
        <Form-item label="年龄">
          <Input v-model="addUserForm.userAge" number></Input>
        </Form-item>
        <Form-item label="地址">
          <Input v-model="addUserForm.userAddress"></Input>
        </Form-item>
      </Form>
    </Modal>
  </div>
</template>

<script>
  let addUserModal = {
    data: {
      show: false,
      loading: true
    },
    addUser () {
      let me = this;
      setTimeout(() => {
        me.addUserModal.show = false;
      }, 2000);
    }
  };

  let addUserForm = {
    userName: '',
    userAge: '',
    userAddress: ''
  };

  export default {
    data () {
      return {
        userTypeList: [
          {userTypeName: '全部', userType: 0},
          {userTypeName: '超级管理员', userType: 1},
          {userTypeName: '普通管理员', userType: 3},
          {userTypeName: '普通用户', userType: 5}
        ],
        userTypeForSearch: '',
        userNameForSearch: '',
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            key: 'action',
            width: 120,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                }, '删除')
              ]);
            }
          }
        ],
        userList: [],
        addUserModal: addUserModal.data,
        addUserForm
      };
    },
    methods: {
      addUser: addUserModal.addUser
    },
    created() {
      let userList = [];
      for (let i = 0; i < 5; i++) {
        userList = userList.concat([
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]);
      }
      this.userList = userList;
    }
  }
  ;
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tool-bar {
    padding: 4px;

    > div {
      display: inline-block;
    }

    .buttons {
      float: right;
    }
  }
</style>
