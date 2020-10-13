<script>
	export default {
		onLaunch: function() {
			// #ifndef H5
      // 小程序检测版本升级
      const updateManager = uni.getUpdateManager();
      updateManager.onCheckForUpdate(function(res) {
        // 请求完新版本信息的回调
        console.log("版本检查", res.hasUpdate);
      });
      updateManager.onUpdateReady(function() {
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
        });
      });
      // #endif
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
    
	};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "uview-ui/index.scss";
/*每个页面公共css */
page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
image {
  display: block;
}
view {
  box-sizing: border-box;
}
button::after {
  border: none;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
 /* 公用样式 */
.flex-row-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.flex-row-start {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flex-col-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/*单行溢出*/
.one-txt-cut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*多行溢出*/
.txt-cut {
  overflow : hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
