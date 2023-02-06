<template>
  <div>
    <div class="top">
      <router-link to="/"><span class="logo"><b>netflix</b>roulette</span></router-link>
      <div class="search-form">
        <h1>FIND YOUR MOVIE</h1>
        <input type="text" v-model="title" placeholder="Search" id="searchStr" autocomplete="true" v-on:keyup="getData" />
        <button id="submitButton" @click="getData">Search</button>
        <div class="switch-group">
          <span>SEARCH BY </span>
          <button :class="byTitle?'active':''" class="left" @click="viewByTitle">TITLE</button>
          <button :class="byGengre?'active':''" @click="viewByGengre">GENGRE</button>
        </div>
      </div>
    </div>
    <div>
      <div class="right-switch-group">
        <span>SORT BY </span>
        <button :class="byRelease?'active':''" class="left" @click="viewByRelease">RELEASE DATE</button>
        <button :class="byRating?'active':''" @click="viewByRating">RATING</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .top {
    text-align: left;
    padding: 20px 80px;
    background-image: url('../assets/abstract-background.jpg');
    a {
      text-decoration: none;
    }
  }
  .top .search-form {
    padding: 50px 100px;
    h1 {
      color: white;
      font-size: 3rem;
    }
  }
  .logo {
    color: #f65261;
    b {
      font-size: 1.4rem;
    }
  }
  #searchStr {
    width: calc(79% - 10px);
    line-height: 46px;
    text-indent: 15px;
    background-color: #424242;
    border: none;
    color: white;
    font-size: 22px;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
    &:focus-visible {
      outline: none;
    }
  }
  #submitButton {
    width: 20%;
    line-height: 46px;
    vertical-align: middle;
    background-color: #f65261;
    color: white;
    border: none;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
  }
  button {
    cursor: pointer;
    border-radius: 4px;
    border: none;
    color: white;
    &.active {
      background-color: #f65261;
    }
  }
  button.left {
    border-radius: 4px 0 0 4px;
  }
  .switch-group {
    margin-top: 20px;
    margin-bottom: 20px;
    span {
      color: white;
      margin-right: 30px;
    }
    button {
      padding: 10px 20px;
      background-color: #42424255;
      &:last-child {
        border-radius: 0 4px 4px 0;
      }
      &.active {
        background-color: #f65261;
      }
    }
  }
  .right-switch-group {
    padding: 0 180px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: right;
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
  @media screen and (max-width: 1279px) {
    body {
      margin: 0;
    }
    #app {
      padding: 0;
      .top .search-form {
        padding: 0;
      }
      .right-switch-group {
        padding: 0 80px;
      }
      .card-group {
        padding: 0;
      }
      .card {
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    #app {
      padding: 0;
      .card {
        width: 50%;
      }
    }
  }
  @media screen and (max-width: 650px) {
    body {
      margin: 0;
    }
    #app {
      padding: 0;
      .top {
        padding: 20px;
      }
      .right-switch-group {
        padding: 0 20px;
      }
      .video-card-panel {
        padding-left: 15px;
        padding-right: 15px;
      }
      .left-div {
        clear: both;
        width: 100%;
      }
      .right-div {
        clear: both;
        width: 100%;
      }
      .left-switch-group {
        padding: 0 20px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    body {
      margin: 0;
    }
    #app {
      padding: 0;
      .top {
        padding: 15px;
        input {
          width: 100%;
        }
        #submitButton {
          width: 100%;
          margin-top: 4px;
        }
        .switch-group {
          text-align: center;
        }
      }
      .right-switch-group {
        padding: 0 15px;
        text-align: center;
      }
      .card {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 380px) {
    .right-switch-group button {
      padding: 10px !important;
    }
  }
</style>
<script lang='ts' setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
const store = useStore()
const byGengre = ref(1)
const byTitle = ref(0)
const title = ref('')
const byRating = ref(1)
const byRelease = ref(0)

function viewByTitle () {
  byGengre.value = 0
  byTitle.value = 1
}

function viewByGengre () {
  byGengre.value = 1
  byTitle.value = 0
}

function viewByRating () {
  byRating.value = 1
  byRelease.value = 0
  store.commit('setSortType', 0)
}

function viewByRelease () {
  byRating.value = 0
  byRelease.value = 1
  store.commit('setSortType', 1)
}

function getData () {
  store.commit('setKeyword', title.value.trim())
  store.dispatch('getVideosByTitle')
}
</script>
