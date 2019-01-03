<template>
  <button :class="StyleClass">{{ButtonName}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    ButtonName: String,
    StyleClass: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.o-button{
		display: inline-block;
		padding: 5px 10px;
		color: #e6c24a;
		background: transparent;
		border: 0;
		&:hover{
			cursor: pointer;
		}
	}
	.o-button--border{
		border: solid 2px #e8c14a;
	}
</style>
