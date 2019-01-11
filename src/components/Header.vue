<template>
  <header class="header gridContainer">
    <div class="gridColumn">
      <div class="logo">
        <img alt="Vue logo" src="../assets/images/logo.png">
      </div>
    </div>
    <div class="gridColumn">
      <Menu styleClass= ""
        :menuItems= "[
          {link:'link1', linkName: 'Our Community'},
          {link:'link2', linkName: 'Services'},
          {link:'link3', linkName: 'Documents'},
        ]" 
      />
    </div>
    <div class="gridColumn">
      <Button StyleClass="o-button o-button--border" ButtonName="Sign In" />
    </div>
    
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
    background: url("../assets/images/header-bg.jpg") no-repeat;
  }
  .logo{
    display: inline-block;
    vertical-align: middle;
  }
  .gridContainer{
    display: grid;
    grid-template-columns: 10% auto 10%;
  }
  .gridColumn{
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: space-around;
  }
</style>
