<template>
  <MainHeaderView />
  <div class='video-card-panel'>
    <h2 v-if='!totalResult'>{{message}}</h2>
    <div v-else class='card-group'>
      <VideoCard v-for='product in products' :product='product' :key='product.Title' />
    </div>
  </div>
  <MainFooterView />
</template>
<style>
h2 {
  color: #fff !important;
}

.logo {
  font-weight: bold;
  color: #f65261;
}

body {
  background-color: #555555;
}

.video-card-panel {
  background-color: #232323;
  padding: 20px 80px;
}

.card-group {
  padding: 10px;
  text-align: left !important;
}
</style>
<script lang='ts' setup>
import MainHeaderView from '@/components/MainHeaderView.vue' // @ is an alias to /src
import VideoCard from '@/components/VideoCard.vue'
import MainFooterView from '@/components/MainFooterView.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const products = computed(function () {
  if (store.state.byRelease === 1) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    return store.state.products.sort((a: { Year: string }, b: { Year: string }) => (a.Year > b.Year) ? -1 : 1)
  } else if (store.state.byRating === 1) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    return store.state.products.sort((a: { imdbRating: string }, b: { imdbRating: string }) => (a.imdbRating > b.imdbRating) ? -1 : 1)
  } else {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    return store.state.products
  }
})
const totalResult = computed(function () {
  return store.state.totalResult
})
const message = computed(function () {
  return store.state.message
})
</script>
