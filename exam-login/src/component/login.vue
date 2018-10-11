<template lang="html">
  <div class="container">
  <section class="login">
    <h1>login Component</h1>
    <form>
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input type="text" class="form-control" name="email" placeholder="Email"
          v-model="id">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
        <input type="password" class="form-control" name="password" placeholder="Password"
          v-model="pw">
      </div>
      <button type="button" name="button" @click="loginId">ok</button>
    </form>
    {{this.id}} {{this.pw}}
  </section>
  </div>

</template>

<script lang="js">
export default {
  name: 'login',
  props: [],
  mounted() {

  },
  data() {
    return {
      id: '',
      pw: ''
    }
  },
  methods: {
    loginId(){
      this.$emit('loginId', this.id, this.pw);
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
