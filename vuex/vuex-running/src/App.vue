<template>
<div id="app">
  Parent counter : {{ getCounter }} <br>
  <button @click="addCounter">+</button>
  <button @click="subCounter">-</button>

  <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props 로 전달한다. -->
  <!-- <counter v-bind:passedCounter="counter"></counter> -->
  <counter></counter>
</div>
</template>

<script>
import Counter from './counter.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  // data () {
  //   return {
  //     // data 속성 등록
  //     counter: 0
  //   }
  // },
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    }
  },
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    'counter': Counter
  },
  computed:
    ...mapGetters([
    'getCounter'
  ]),
}
</script>

<style>
</style>
