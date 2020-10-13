<template>
	<view class="content">
		<view>
			<text class="title">{{ 'hhhhhhh' }}</text>
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
