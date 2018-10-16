<template lang="html">

  <section class="counter">
    <div>
      <hr>
      Child counter : {{ getCounter }} <br>
      <button>+</button>
      <button>-</button>
    </div>
  </section>

</template>

<script lang="js">
import {
  mapGetters
} from 'vuex'

export default {
  // Parent 에서 넘겨준 counter 속성을 passedCounter 로 받음
  // props: ['passedCounter']
  computed: {
    ...mapGetters([
      'getCounter'
    ]),
  }
}
</script>

<style scoped>

</style>
