<template>
  <div class="card">
    <img :src="product.Poster" />
    <div class="detail">
      <span class="title">{{ product.Title }}</span>
      <span class="year">{{ product.Year }}</span>
    </div>
    <div class="clearfix"></div>
    <a :href="'/detail/'+product.imdbID">{{ product.Genre }}</a>
  </div>
</template>
<style lang="scss">
  .card {
    vertical-align: top;
    display: inline-block;
    margin-bottom: 40px;
    padding: 0 30px;
    width: 33%;
    img {
      width: 100%;
    }
    .detail {
      margin-top: 10px;
      text-align: left;
    }
    a {
        display: block;
        text-align: left;
        color: #aaa;
        font-size: 0.8rem;
        text-decoration: none;
        &:hover {
            color: white;
        }
    }
  }
  .title {
    color: #aaa;
    float: left;
    max-width: 80%;
    word-wrap: break-word;
    line-height: 28px;
    &:hover {
        color: white;
        cursor: pointer;
    }
  }
  .year {
    color: #aaa;
    float: right;
    padding: 4px 8px;
    border: 1px solid #aaa;
    border-radius: 4px;
  }
  .clearfix {
    clear: both;
  }
</style>
<script lang="ts">
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
