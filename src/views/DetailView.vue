<template>
  <DetailHeaderView />
  <div class="video-card-panel">
    <div class="card-group">
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
    text-align: center;
  }
</style>
<script lang="ts">
import DetailHeaderView from '@/components/DetailHeaderView.vue'
import VideoCard from '@/components/VideoCard.vue'
import MainFooterView from '@/components/MainFooterView.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'DetailView',
  components: {
    DetailHeaderView,
    VideoCard,
    MainFooterView
  },
  setup () {
    const store = useStore()
    const products = computed(function () {
      return store.state.products
    })
    return {
      products
    }
  }
}
</script>
