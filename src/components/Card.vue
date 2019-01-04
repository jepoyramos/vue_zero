<template>
  <div class="c-card article-block">
    <a href="" class="gridContainer">
      <div class="o-date" v-for='date in cardDate'>
        <span class="month">{{date.month}}</span>
        <span class="day">{{date.day}}</span>
      </div>
      <div class="article">
        <h3>{{cardHeader}}</h3>
        <p>{{cardContent}}</p>
      </div>
      <button>
        + Details
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardDate: Array,
    cardHeader: String,
    cardContent: Array,
    styleClass: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .article-block{
    display: inline-block;
    border: 1px solid #ededed;
    margin: 20px 0;
    text-align: left;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
      border:  1px solid #212121;
      button{
        border-top: 1px solid #212121;
        color: #212121;
      }
    }
    .o-date{
      display: inline-block;
      padding: 15px 5px;
      background: #e7c049;
      text-transform: uppercase;
      text-align: center;
      line-height: 35px;
      color: #303030;
      vertical-align: top;
    }
    .month{
      display: block;
      letter-spacing: 4px;
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      font-weight: 600;
      margin-left: 13%;
    }
    .day{
      display: block;
      font-size: 50px;
      font-weight: 600;
      font-family: 'Bebas Neue', Helvetica, Arial, sans-serif;
      transition: all 0.5s ease;
    }
    .article{
      display: inline-block;
      padding: 10px 0;
      height: 133px;
      color: #303030;
      h3{
        text-transform: none;
        font-size: 25px;
      }
    }

    button{
      width: 100%;
      padding: 20px;
      border: none;
      border-top: 1px solid #ededed;
      color: #c2c2c2;
      transition: all 0.5s ease;
      cursor: pointer;
    }
    .article{
      overflow: hidden;
      h3{
        -webkit-line-clamp: 1;
      }
      p{
      }
    }
    .gridContainer{
      display: grid;
      grid-template-columns: 30% auto;
    }
  }
</style>
