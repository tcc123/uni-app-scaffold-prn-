<template>
	<view class="content">
		<image class="logo" src="/static/images/logo.png"></image>
		<view>
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			};
		},
		onLoad() {
			// 请求示例
			let url = '/demo/hello';
			this.$http.request({url, method: 'get', data: {}}).then(res => {
				this.title = res.msg;
				uni.setStorageSync('token', res.data.token);
				uni.showToast({
					title: res.msg,
					icon: 'none',
					duration: 2000
				});
			});
		},
		methods: {}
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
