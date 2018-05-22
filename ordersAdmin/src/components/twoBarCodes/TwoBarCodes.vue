<template>
  <div class="con">
    <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
  </div>
</template>

<script>
	import './qrcode.js'
  	export default {
  		data () {
  	    	return {
  	        	msg: '123456',
  	        	config: {
  	            	value: 'https://www.baidu.com',
  	            	imagePath: './222.png',
  	            	filter: 'color',
  	        	},
  	        	downloadButton: false
  	    	}
  		},
  		methods: {
  			makeTbc(){
  				var qrcode = new QRCode(document.getElementById("qrcode"), {
  					text: "www.baidu.com",
  					width: 200,
  					height: 200,
  					colorDark : "#000000",
  					colorLight : "#ffffff",
  					correctLevel : QRCode.CorrectLevel.H
  				});
  			}
  		}
  	}
</script>

<style lang='less'>
.con{
	width:200px;
	height:200px;
	border:1px red solid;
}
</style>

