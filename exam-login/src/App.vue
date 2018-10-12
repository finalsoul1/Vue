<template>
<div id="app">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/home" class="navbar-brand">HOME</router-link>
      </div>
      <ul class="nav navbar-nav">
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li>
          <button type="button" name="button" @click="loginId">db</button>
        </li>
        <li id="test">
          {{this.islogin}}
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link to="/register"><span class="glyphicon glyphicon-user"></span> 회원가입</router-link>
        </li>
        <li v-if="islogin">
          <a href="#" @click="logout"><span class="glyphicon glyphicon-log-in"></span> 로그아웃</a>
        </li>
        <li v-else>
          <router-link to="/login"><span class="glyphicon glyphicon-log-in"></span> 로그인</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view :prop="logerror" @addId="addId" @loginId="loginId"></router-view>
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
      idset: null,
      islogin: false,
      logerror: false
    }
  },
  methods: {
    addId(set) {
      console.log(set);
      axios.get('http://localhost:3000/users').then(res => {
        var info = res.data.find(a => a.id === set.id);
        if (info) {
          alert("ID가 중복되었습니다. 다시 입력해주시기 바랍니다.");
          this.logerror = true;
        } else {
          alert(set.id + "님 가입축하드립니다");
          axios.post('http://localhost:3000/users', set);
          this.logerror = false;
        }
      });
    },
    loginId(id, pw) {
      console.log(id, pw);
      axios.get('http://localhost:3000/users').then(res => {
        var info = res.data.find(a => a.id === id && a.pw === pw);
        if (info) {
          // console.log("됨");
          this.islogin = true;
          localStorage.setItem(id, id);
          alert("로그인에 성공하셨습니다");
        }
      });
    },
    logout() {
      this.islogin = false;
      alert("로그아웃 하셨습니다")
    },
    loginError() {
      this.logerror = !this.logerror;
    },
  },
}
</script>

<style>
#test {
  color: white;
}
</style>
