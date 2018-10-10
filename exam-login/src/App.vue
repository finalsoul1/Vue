<template>
<div id="app">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- <a class="navbar-brand" href="#">WebSiteName</a> -->
        <router-link to="/home" class="navbar-brand">HOME</router-link>
      </div>
      <ul class="nav navbar-nav">
        <!-- <li class="active"><a href="#">Home</a></li> -->
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li>
          <button type="button" name="button" @click="dbAdd">db</button>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</router-link>
        </li>
        <li>
          <router-link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view @addId="addId"></router-view>
</div>
</template>

<script>
class idSet {
  constructor(id, pw, gender) {
    this.id = id,
    this.pw = pw,
    this.gender = gender
  }
}

export default {
  name: 'app',
  data() {
    return {
      idset: null
    }
  },
  methods: {
    addId(set) {
      console.log(set);
      this.idset = set;
    },
    dbAdd() {
      axios.post('http://localhost:3000/users', this.idset).then()
    }
  },
}
</script>

<style>
</style>
