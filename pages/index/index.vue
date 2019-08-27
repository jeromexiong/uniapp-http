<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png"></image>
		<view>
			<text class="title">{{ title }}</text>
		</view>

		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text">请点击按钮向服务器发起请求</view>
			<view class="uni-textarea uni-common-mt"><textarea :value="res"></textarea></view>
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" @click="sendRequest" :loading="loading">发起请求</button>
				<button type="default" @click="sendRequest1" :loading="loading">发起请求(async/await)</button>
			</view>
		</view>
	</view>
</template>

<script>
import { test } from '../../common/service/api.js';
export default {
	data() {
		return {
			title: '网络请求',
			loading: false,
			res: ''
		};
	},
	onLoad() {},
	methods: {
		// 方式一
		sendRequest: function() {
			this.loading = true;
			this.$api
				.test({ noncestr: Date.now() })
				.then(res => {
					this.loading = false;
					console.log('request success', res);
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true
					});
					this.res = '请求结果 : ' + JSON.stringify(res);
				})
				.catch(err => {
					this.loading = false;
					console.log('request fail', err);
				});
		},

		//方式二
		async sendRequest1() {
			this.loading = true;
			// let res = await this.$api.test({noncestr: Date.now()});
			let res = await test({ noncestr: Date.now() });
			this.loading = false;
			this.res = '请求结果 : ' + JSON.stringify(res);
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}
.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}
.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
