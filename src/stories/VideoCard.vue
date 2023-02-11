<template>
  <router-link :to="'/detail/'+imdbid" @click="onClick">
    <div className="card">
      <img :src="imageurl" style="width:100%" />
      <div className="relative-div">
        <label className="text-white video-title">{{title}}</label>
        <span className="year-mark">{{year}}</span>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import './videocard.css';
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';


export default {
  name: 'video-card',

  props: {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      default: 1920,
    },
    imageurl: {
      type: String,
    },
    imdbid: {
      type: String
    }
  },

  setup(props: any) {
    const store = useStore();
    props = reactive(props);
    return {
      onClick() {
        store.commit('setImdbid', props.imdbid)
        store.dispatch('setMovie')
      }
    }
  },
};
</script>
