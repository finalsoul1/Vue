<template lang="html">


    <div class="container">
      <section class="register">
        <h1>register Component</h1>
      <form>
        <div class="form-group">
          <label for="usr">ID:</label>
          <input type="text" class="form-control" v-model="id">
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" v-model="pw">
        </div>

        <form>
          <label class="radio-inline">
            <input type="radio" name="optradio" v-model="gender" value="man">남
          </label>
          <label class="radio-inline">
            <input type="radio" name="optradio" v-model="gender" value="woman">여
          </label>
        </form>
        <button type="button" name="button" @click="addId">가입</button>
      </form>
      {{this.id}} {{this.pw}} {{this.gender}}
      </section>
    </div>


</template>

<script lang="js">
class idSet {
  constructor(id, pw, gender) {
    this.id = id,
    this.pw = pw,
    this.gender = gender
  }
}

export default {
  name: 'register',
  props: [],
  mounted() {

  },
  data() {
    return {
      id: '',
      pw: '',
      gender: 'man',
    }
  },
  methods: {
    addId() {
      var set = new idSet(this.id, this.pw, this.gender)
      this.$emit('addId', set);
    },
    refrash() {

    }
  },
  computed: {

  }
}
</script>

<style scoped>
.register {}
</style>
