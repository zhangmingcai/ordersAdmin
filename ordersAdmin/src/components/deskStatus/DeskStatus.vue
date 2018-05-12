<template>
	<div class="content-wrap">
	    <div class="content1 clearfix">
	    	<div class="desk busy details left">
	    		<div class="name">1 号桌</div>
    			<p class="createTime">下单时间：12:02</p>
    			<p class="duration">就餐时长：12 分钟</p>
    			<p class="price">应收 88 元</p>
    			<div class="overBtn">结 束</div>
	    		<div class="details_con">
	    			234
	    		</div>
	    		
	    		
	    	</div>
	    	<div class="desk free left">
	    		<div class="name">2 号桌</div>
	    		<p class="status">空 闲</p>
	    	</div>
	    	<div class="desk busy left">
	    		<div class="name">3 号桌</div>
    			<div class="orderNum">
	    			订单数：2 笔
	    		</div>
    			<p class="duration">就餐时长：12 分钟</p>
    			<p class="duration">就餐时长：12 分钟</p>
	    		<div class="details_con">
	    			234
	    		</div>
	    		
	    		
	    	</div>

	    </div>
	</div>
</template>

<script type="text/ecmascript-6">
  	export default {};
</script>

<style rel="stylesheet/less" lang="less">
@import url("../../less/main.less");
.content-wrap{
	padding:20px 30px;
	border:1px red solid;
	//不能拼桌
	.content1{
		.desk{
			width:150px;
			height:150px;
			.transition;
			
			margin-right:30px;
			&:last-child{
				margin-right:0;
			}
		}
		.free{
			border-radius:50%;
			border:2px rgba(0,180,60,.5) solid;
			.name{
				font-size:16px;
				font-weight:bold;
				color:#999;
				margin:6px 0;
				text-align:center;
			}
			.status{
				font-size:18px;
				font-weight:bold;
				color:#989393;
				margin-top:26px;
				text-align:center;
			}
		}
		.busy{
			color:#fff;
			background:rgba(0,180,60,.5);
			box-sizing:border-box;
			padding:5px 8px;
			border-radius:5px;
			.name{
				font-size:16px;
				font-weight:bold;
				margin:6px 0;
				text-align:center;
			}
				
			.createTime{
				font-size:12px;
				margin-bottom:6px;
			}
			
			.duration{
				font-size:14px;
				font-weight:bold;
				margin-bottom:6px;
			}
			.price{
				font-size:16px;
				font-weight:bold;
				text-align:right;
				margin-bottom:6px;

			}
			.overBtn{
				width:50px;
				color:rgba(0,140,200,.6);
				background:#fff;
				border-radius:5px;
				padding:4px 0;
				text-align:center;
				margin:0 auto;
				.transition;
				cursor:pointer;
				&:hover{
					color:#008CC8;
				}
			}
			
		}
		.details{
			position: relative;
			border-top-left-radius:20px;
			border-bottom-left-radius:20px;
			border-bottom-right-radius:0px;
			border-top-right-radius:0px;
			.details_con{
				position: absolute;
				left:150px;
				top:0;
				min-height:150px;
				background:rgba(0,180,60,.5);
				box-sizing:border-box;
				padding:5px 8px;
				border-bottom-right-radius:20px;
				border-top-right-radius:20px;
			}
		}
	}
	//可以拼桌
	.content2{
		.desk{
			width:150px;
			height:150px;
			.transition;
			
			margin-right:30px;
			&:last-child{
				margin-right:0;
			}
		}
		.free{
			border-radius:50%;
			border:2px rgba(0,180,60,.5) solid;
			.name{
				font-size:16px;
				font-weight:bold;
				color:#999;
				margin:6px 0;
				text-align:center;
			}
			.status{
				font-size:18px;
				font-weight:bold;
				color:#989393;
				margin-top:26px;
				text-align:center;
			}
		}
		.busy{
			color:#fff;
			background:rgba(0,180,60,.5);
			box-sizing:border-box;
			padding:5px 8px;
			border-radius:5px;
			.name{
				font-size:16px;
				font-weight:bold;
				margin:6px 0;
				text-align:center;
			}
				
			.orderNum{
				font-size:14px;
				margin-bottom:6px;
			}
			.duration{
				font-size:14px;
				font-weight:bold;
				margin-bottom:6px;
			}
			
		}
		.details{
			position: relative;
			border-top-left-radius:20px;
			border-bottom-left-radius:20px;
			border-bottom-right-radius:0px;
			border-top-right-radius:0px;
			.details_con{
				position: absolute;
				left:150px;
				top:0;
				min-height:150px;
				background:rgba(0,180,60,.5);
				box-sizing:border-box;
				padding:5px 8px;
				border-bottom-right-radius:20px;
				border-top-right-radius:20px;
			}
		}
	}
}
</style>
