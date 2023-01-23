<template>
  <h1 class="not-found">404 Page Not Found</h1>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class NotFoundView extends Vue {}
</script>
<style lang="scss">
  h1.not-found {
    font-size: 6rem;
    color: white;
    line-height: calc(100vh - 20px);
    margin: 0;
    padding: 0;
  }
</style>
