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

</style>
