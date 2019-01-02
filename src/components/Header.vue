<template>
  <header class="header">
    <div class="logo">
      <h1>Header Logo</h1>
      <NavLink Link="ourcommunity" LinkName="Our Community"/>
      <NavLink Link="services" LinkName="Services"/>
      <NavLink Link="documents" LinkName="Documents"/>
      <NavLink Link="accounthistory" LinkName="Account History"/>
      <NavLink Link="about" LinkName="About"/>
      <Button ButtonName="Sign In" />
    </div>

  </header>
</template>

<script>
import NavLink from './NavLink.vue'
import Button from './Button.vue'

export default {
  name: 'Header',
  components: {
    NavLink,
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
