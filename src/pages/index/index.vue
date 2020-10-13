<template>
	<view class="content">
		<image class="logo" src="/static/images/logo.png"></image>
		<view>
			<button class="title" @click="to">点击</button>
		</view>
		<u-button type="primary">主要按钮</u-button>
	</view>
</template>

<script>
	import uButton from "uview-ui/components/u-button/u-button.vue";
	export default {
		components: {
			uButton
		},
		data() {
			return {
				title: 'Hello'
			};
		},
		onLoad() {
			// 请求示例
			// let url = '/demo/hello';
			// this.$http.request({url, method: 'get', data: {}}).then(res => {
			// 	this.title = res.msg;
			// 	uni.setStorageSync('token', res.data.token);
			// 	uni.showToast({
			// 		title: res.msg,
			// 		icon: 'none',
			// 		duration: 2000
			// 	});
			// });
		},
		methods: {
			to(){
				let url='/pages/two/two';
				uni.navigateTo({
					url: url
				});
			}
		}
	};
</script>

<style lang="scss">
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.logo {
			height: 200rpx;
			width: 200rpx;
			margin-bottom: 30rpx;
		}
		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}
	}
</style>
