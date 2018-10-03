<template>
  <section>
    <!-- name= 변수: css에서 사용할 변수이름 -->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="index" class="shadow">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        <input v-if="todoItem.editOx" id="inp" >
        <span v-else>{{ todoItem.value }}</span>

        <div class="Btn1" v-if="edit">
          <span class="ok" type="button" @click="correct(todoItem,index)">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
          <span class="cancel removeBtn" type="button" @click="editTodo(todoItem, index)">
            <i class="fas fa-minus-circle" aria-hidden="true"></i>
          </span>
        </div>

        <div class="Btn1" v-else>
          <span class="editBtn" type="button" @click="editTodo(todoItem, index)">
            <i class="fas fa-edit" aria-hidden="true"></i>
          </span>
          <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
            <i class="far fa-trash-alt" aria-hidden="true"></i>
          </span>
        </div>

      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  props: ['propsdata'],
  // 자신이 직접 필요한 데이터를 갖고 있지 않고 부모 컴포넌트로부터 받아서
  // 사용하는 방식으로 변경.
  data() {
    return {
      edit : false
    }
  },
  methods: {
    // 자식이 부모에게 이벤트를 보내는 방법
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
    },
    editTodo(todoItem, index) {
      this.$emit('editTodo', todoItem, index);
      this.edit = !(this.edit);
    },
    correct(todoItem, index) {
      let a = document.querySelector('#inp').value;
      console.log(a);
      this.$emit('correct', todoItem, index, a);
      this.editTodo(todoItem, index);
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .Btn1 {
    margin-left: auto;
    color: #de4343;
  }
  .removeBtn {
    margin-left: 10px;
    color: #de4343;
  }
  .editBtn {
    color: black;
  }
  .ok {
    color: blue;
  }


  .list-enter-active, .list-leave-active {
    transition: all 1.5s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
