<template>
	<div class="content-wrap">
	    <div class="deskcontent clearfix">
	    	<div v-for="(item,index) in list" :class="{'busy':item.orderNum > 0,'free':item.orderNum == 0}"  class="desk left">
	    		<div class="name"><span>{{item.deskId}} </span>号桌</div>
	    		<template v-if="item.orderNum == 0">
	    			<p class="status">空 闲</p>
	    		</template>
	    		<template v-else-if="item.orderNum == 1">
	    			<div class="orderNum">
		    			订单数：{{item.orderNum}} 笔
		    		</div>
	    			<p class="createTime">下单时间：{{item.orderList[0].startTime}}</p>
	    			<p class="duration">就餐时长：12 分钟</p>
	    			<p class="price">应收 {{item.orderList[0].currentPrice}} 元</p>
	    			<Button class="overBtn">结 束</Button>
	    		</template>
	    		<template v-else>
	    			<div class="orderNum">
		    			订单数：{{item.orderNum}} 笔
		    		</div>
		    		<template v-for="(i,index) in item.orderList">
		    			<p class="duration">就餐时长：{{i.startTime}} 分钟</p>
		    			<p class="price">应收 {{i.currentPrice}} 元</p>
		    		</template>
	    			
	    		</template>
	    		
	    		<div class="detail">
		    		<div v-if="item.orderNum > 0" class="details_con">
			    		<div v-for="foods in item.orderList" class="item">
			    			<div class="orderid">
			    				订单编号{{foods.orderId}}
			    			</div>
			    			<ul class="foodsList">
			    				<li v-for="food in foods.foods" class="clearfix">
			    					<div class="left name">{{food.foodTitle}}</div>
			    					<div class="right number">x {{food.number}}</div>
			    				</li>
			    			</ul>
			    			
				    		<template v-if="foods.reduce > 0">
				    			<div class="price_con clearfix">
				    				<div class="originalPrice left">原价 {{foods.originalPrice}}元</div>
				    				<div class="reduce right">满减 -{{foods.reduce}}元</div>
				    			</div>
				    			<div class="currentPrice">应收 <span>{{foods.currentPrice}}</span> 元</div>
					    			
				    		
				    		</template>
				    		<template v-else>
				    			<div class="currentPrice">应收 <span>{{foods.currentPrice}}</span> 元</div>
				    		</template>
			    			<Button v-if="item.orderNum > 1" class="overBtn" size="small">结 束</Button>
			    		</div>
		    			
		    		</div>
		    	</div>
	    	</div>
	    </div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Data from "../../data/a.json"
  	export default {
        data () {
            return {
                list: []
            }
        },
        created() {
            this.getData();
            this.watchHover()
            
        },
        methods: {
        	getData(){
        	    this.list = Data.deskStatusList;
        	},
        	watchHover(){
        		this.$nextTick(()=>{
	        		var busy = document.getElementsByClassName("busy"); 
	    			for (var i = 0; i < busy.length; i++) {
	    				busy[i].addEventListener("mouseenter",function(){  
	    					this.classList.add("details")
		    		        var details_con = this.getElementsByClassName("details_con")[0];  
		    		        details_con.style.display="block"
		    		    },false);
		    		    busy[i].addEventListener("mouseleave",function(){  
		    		        var details_con = this.getElementsByClassName("details_con")[0];  
		    		        this.classList.remove("details");  
		    		        details_con.style.display="none"
		    		    },false);
	        		}
        		})
        		
        	}
        },
  	 
  	}
</script>

<style rel="stylesheet/less" lang="less">
@import url("../../less/main.less");
.content-wrap{
	padding:40px 80px 0px 60px;
	.deskcontent{
		.desk{
			width:180px;
			height:180px;
			.transition;
			margin-bottom:40px;
			
			margin-right:45px;
			.name{
				font-size:16px;
				font-weight:bold;
				margin:6px 0;
				text-align:center;
				span{
					font-size:20px;
					color:red;
				}
			}
		}
		.free{
			border-radius:50%;
			background:rgba(252, 80, 13, 0.5);
			.name{
				color:#fff;
				span{
					color:green;
				}
			}
			.status{
				font-size:18px;
				font-weight:bold;
				color:#989393;
				margin-top:40px;
				text-align:center;
			}
		}
		.busy{
			color:#fff;
			background:rgba(0,180,60,.5);
			box-sizing:border-box;
			padding:5px 8px;
			border-radius:5px;
				
			.orderNum{
				font-size:12px;
				margin-bottom:6px;
			}
			.createTime{
				font-size:12px;
				margin-bottom:6px;
			}
			
			.duration{
				font-size:14px;
				font-weight:bold;
				margin-bottom:3px;
			}
			.price{
				font-size:16px;
				font-weight:bold;
				text-align:right;
				margin-bottom:2px;

			}
			.overBtn{
				display:block;
				margin:0 auto;
				
			}
			.details_con{
				display:none;
				width:180px;
				.transition;
				position: absolute;
				left:180px;
				top:0;
				min-height:180px;
				background:#2a896e;
				box-sizing:border-box;
				padding:15px 12px;
				border-bottom-right-radius:20px;
				border-top-right-radius:20px;
				.item{
					padding:5px 0;
					border-bottom:1px #b1abab solid;
					&:last-child{
						border-bottom:none;
					}
					.orderid{
						font-size:16px;
						font-weight:bold;
						text-align:center;
						margin-bottom:2px;
					}
					.foodsList{
						list-style-type:none;
						.name{
							font-size:14px;
							text-align:left;
							margin-bottom:2px;
						}
						.number{
							font-size:14px;
							text-align:right;
							margin-top:5px;
						}
					}
					.price_con{
						font-size:12px;
						.originalPrice{
							max-width:120px;
							overflow:hidden;
						}
						.reduce{
							color:red;
							margin-left:15px;
						}

					}
					.currentPrice{
						text-align:center;
						font-size:14px;
						margin-bottom:6px;
						span{
							font-weight:bold;
						}
					}
				}
			}
			
		}
		.details{
			position: relative;
			border-top-left-radius:20px;
			border-bottom-left-radius:20px;
			border-bottom-right-radius:0px;
			border-top-right-radius:0px;
		}
	}
}
</style>
