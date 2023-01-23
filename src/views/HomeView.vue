<template>
  <MainHeaderView />
  <div class='video-card-panel'>
    <div class='card-group'>
      <VideoCard v-for='product in products' :product='product' :key='product' />
    </div>
  </div>
  <MainFooterView />
</template>
<style>
h1 {
  color: #f65261;
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
<script lang='ts'>
import MainHeaderView from '@/components/MainHeaderView.vue' // @ is an alias to /src
import VideoCard from '@/components/VideoCard.vue'
import MainFooterView from '@/components/MainFooterView.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'HomeView',
  components: {
    MainHeaderView,
    VideoCard,
    MainFooterView
  },
  setup () {
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
    return {
      products
    }
  }
}
</script>
