<template>
  <header class="header">
    <div class="logo">
      <img alt="Vue logo" src="../assets/images/logo.png">
    </div>
    <Menu styleClass= ""
      :menuItems= "[
        {link:'link1', linkName: 'Link 1'},
        {link:'link2', linkName: 'Link 2'},
        {link:'link3', linkName: 'Link 3'},
      ]"
    />
    <Button StyleClass="o-button o-button--border" ButtonName="Sign In" />

  </header>
</template>

<script>
import Menu from './Menu.vue'
import Button from './Button.vue'

export default {
  name: 'Header',
  components: {
    Menu,
    Button
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    background: url("../assets/images/header-bg.jpg") no-repeat
  }
  .logo{
    display: inline-block;
    vertical-align: middle;
  }
</style>
