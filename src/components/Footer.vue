<template>
  <footer>
    <div class="copyright">
      
      {{copyright}}
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  props:{
    copyright: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer{
  background: #303030;
  color: lighten(#303030, 10);
  padding: 15px 5%;
  text-align: center;
  width: 100%;
  .copyright{
    text-align: center;
    font-family: 'playfair_displayregular';
    font-size: 15px;
    display: inline-block;
  }
}
</style>
