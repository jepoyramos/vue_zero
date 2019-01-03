<template>
  <li>
    <a :href="Link">{{LinkName}}</a>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    LinkName: String,
    Link: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	li{
		display: inline-block;
		listStyleType: none;
		padding: 5px 10px;
	}
	a{
		text-decoration: none;
		color: #ffffff;
		font-weight: 600;
	}
</style>
