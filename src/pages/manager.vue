<template>
	<div class="manager">
		<m-head></m-head>
		<div class="index-content-row">
			<div class="content-warp">
				<div class="index-content">
					<f-content></f-content>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
		import MHead from './common/m-head.vue'
		import FContent from './common/f-content.vue'
		export default {
		name: 'manager',
		data () {
			return {
				msg: 'Welcome to Your INDEX'
			}
		},
		components: {MHead,FContent}

	}
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">

	.manager{
		position: relative;
		height: 100%;
		overflow:hidden;
		z-index:0;
	

		.index-content-row {
			position: absolute;
			height: 100%;
			width: 100%;
			top: 60px;
			bottom: 0;

			.content-warp {
				position: relative;
				width: 100%;
				height: 100%;
			}
		}

		.index-content{
			position: absolute;
			height: 100%;
			width:100%;
		}

	}
</style>