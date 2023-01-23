<template>
  <div>
    <div class="top">
      <a href="/"><span class="logo"><b>netflix</b>roulette</span></a>
      <font-awesome-icon icon="search" />
      <div class="detail">
        <div class="inlineblock left-div">
          <img :src="video.Poster" />
        </div>
        <div class="inlineblock right-div">
          <h1>{{video.Title}}<span class="rate-rounded-mark">{{video.imdbRating}}</span></h1>
          <p id="category">{{video.Genre}}</p>
          <p class="numbers"><span class="pub-year">{{video.Year}}</span> year &nbsp; <span class="duration-time">{{video.Runtime.split(' ')[0]}}</span> min</p>
          <div class="contents">
            <p>{{video.Plot}}</p>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div>
      <div class="left-switch-group">
        <span>Films by Drama Genre</span>
      </div>
    </div>
</div>
</template>
<style lang="scss">
.top {
    text-align: left;
    padding: 20px 80px;
    background-image: url('../assets/abstract-background.jpg');
}
svg {
  color: #f65261 !important;
  float: right;
  cursor: pointer;
  margin: 7px;
}
.detail {
  margin-top: 50px;
  margin-bottom: 20px;
  img {
    width: 100%;
    vertical-align: top;
  }
  .inlineblock {
    box-sizing: border-box;
    padding-top: 0;
    color: white;
    display: inline-block;
    h1 {
      color: white;
      font-size: 4rem;
      margin-top: 30px;
      span {
        font-size: 2.4rem;
        vertical-align: middle;
      }
    }
  }
  .rate-rounded-mark {
    border-radius: 100%;
    border: 1px solid white;
    padding: 16px;
    margin-left: 20px;
    color: #A1E66F;
  }
  p.numbers {
    font-size: 1.2rem;
    .pub-year {
      color: #f65261;
      font-size: 2rem;
      display: inline-block;
      margin-right: 10px;
    }
    .duration-time {
      color: #f65261;
      font-size: 2rem;
      display: inline-block;
      margin-left: 20px;
      margin-right: 10px;
    }
  }
  .contents {
    p {
      font-size: 1.3rem;
    }
  }
  #category {
    font-size: 1.4rem;
  }
}
.left-div {
  float: left;
  width: 30%;
}
.right-div {
  float: right;
  width: 60%;
}
.clearfix {
  clear: both;
}
.left-switch-group {
    padding: 0 180px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
    span {
      color: white;
      margin-right: 30px;
    }
    button {
      padding: 10px 20px;
      background-color: #42424255;
      &:first-child {
        background-color: red;
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
      }
      &.active {
        background-color: #f65261;
      }
    }
}
</style>
<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    const video = ref({ Runtime: '', Poster: '', Year: '', Released: '', Title: '', Genre: '', imdbRating: '', Plot: '' })
    onMounted(async () => {
      const url = 'https://www.omdbapi.com/?apikey=97f54ad&i=' + route.params.imdbid
      const response = await fetch(url)
      video.value = await response.json()
    })
    return {
      video
    }
  }
}
</script>
