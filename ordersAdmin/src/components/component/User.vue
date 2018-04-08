<template>
  <i-table :columns="th" :data="devData"></i-table>
</template>
<script>
var deviceData = [
  {
    devName: '设备1号',
    devId: '001',
    devStatus: 0,
    devRegTime: '2017年8月1日'
  },
  {
    devName: '设备2号',
    devId: '002',
    devStatus: 1,
    devRegTime: '2017年8月1日'
  },
  {
    devName: '设备3号',
    devId: '003',
    devStatus: 1,
    devRegTime: '2017年8月1日'
  },
  {
    devName: '设备4号',
    devId: '004',
    devStatus: 0,
    devRegTime: '2017年8月1日'
  },
  {
    devName: '设备5号',
    devId: '005',
    devStatus: 1,
    devRegTime: '2017年8月1日'
  },
  {
    devName: '设备6号',
    devId: '006',
    devStatus: 1,
    devRegTime: '2017年8月1日'
  },
  {
    devName: '设备7号',
    devId: '007',
    devStatus: 1,
    devRegTime: '2017年8月1日'
  },
  {
    devName: '设备8号',
    devId: '008',
    devStatus: 0,
    devRegTime: '2017年8月1日'
  },
  {
    devName: '设备9号',
    devId: '009',
    devStatus: 1,
    devRegTime: '2017年8月1日'
  }
];
export default {
  data () {
    return {
      th: [
        {
          title: '设备名称',
          key: 'devName'
        },
        {
          title: '设备状态',
          key: 'devStatus',
          render (row) {
            const color = row.status === 0 ? 'red' : 'green';
            const text = row.status === 0 ? '冻结' : '激活';
            return `<tag type="dot" color="${color}">${text}</tag>`;
          }
        },
        {
          title: '设备编号',
          key: 'devId'
        },
        {
          title: '注册时间',
          key: 'devRegTime'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render (row, column, index) {
            return `<i-button type="primary" size="small" @click="showData(${index})">查看</i-button> <i-button type="error" size="small" @click="removeData(${index})">删除</i-button>`;
          }
        }
      ],
      devData: []
    }
  },
  ready: function () {
    this.devData = deviceData;
  },
  methods: {
    toggleSidebar: function () {
      // 传递sidebar变化的消息给父组件，由父组件告诉content组件
      this.sidebarShow = !this.sidebarShow;
      this.$emit('sidebar-say', this.sidebarShow);
    },
    removeData: function (index) {
      this.$Modal.info({
        title: '删除设备',
        content: `确认删除${this.devData[index].devName}?`
      })
    },
    showData: function (index) {
      this.$Modal.info({
        title: '设备详情',
        content: `设备名称：${this.devData[index].devName}<br>设备状态${this.devData[index].devStatus}<br>设备编号：${this.devData[index].devId}`
      })
    }
  }
}
</script>












<style lang="less">

//手机或平板适配
@media (max-width: 768px){
  
}
</style>