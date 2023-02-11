<template>
  <article>
    <my-header />
    <video-panel :videos="videos" :count="count" style="padding-left: 9%;padding-right: 9%;background-color: #424242;" />
    <my-footer />
  </article>
</template>

<script>
import './page.css';
import MyHeader from './MainHeader.vue';
import VideoPanel from './VideoPanel.vue';
import MyFooter from './Footer.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'my-page',

  components: { MyHeader, VideoPanel, MyFooter },

  methods: {
  },

  setup() {
    const store = useStore();
    const videos = computed(() => {
      if(!store.state.byRelease)
        return store.state.products?store.state.products.sort((a, b) => a.Year - b.Year):[]
      else
        return store.state.products?store.state.products.sort((a, b) => b.Year - a.Year):[]
    });
    const count = computed(() => store.state.totalResult);
    return {
      videos,
      count
    }
  }

};
</script>
