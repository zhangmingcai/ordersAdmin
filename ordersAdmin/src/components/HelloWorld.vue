<template>
  <div class="hello">
        <Input size="large" placeholder="large size"></Input>
        <br>
        <Input placeholder="default size" size="small"></Input>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
    width: 100%;
    height:200px;
    background: red;
}
</style>
