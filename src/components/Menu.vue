<template>
	<ul class="c-menu" :class="styleClass">
		<li v-for='menu in menuItems'>
			<a :href="menu.link">{{menu.linkName}}</a>
		</li>
	</ul>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuItems: Array,
    styleClass: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .c-menu{
    display: inline-block;
  }
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
  .c-menu--vertical{
    li{
      display: block;
    }
  }
</style>
