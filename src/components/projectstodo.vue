<template >
<div>
  <div class="projecttodo-list">
    <ul>
      <li class="project-todo-list_title">
        <p>Projects</p><router-link to="/projects">ALL</router-link>
      </li>
      <li><p>Project 1</p></li>
      <li><p>Project 2</p></li>
      <li><p>Project 3</p></li>
      <li><p>Project 4</p></li>
    </ul>
    <ul class="todo-list">
      <li class="project-todo-list_title">
        <p>To Do</p><span @click="showModal" class="new-btn_sm">+</span>
      </li>
      <li v-bind:key="todo.id" v-for="todo in todos" >
          <TodoItem v-bind:todo="todo" v-on:del-todo="deleteTodo"/>
      </li>
      <li v-for="lenghts in length" ><p></p></li>


    </ul>
  </div>


  <b-modal ref="myModalRef" hide-footer title="New Task">
  <div class="modalfooter">

    <form  v-on:submit.prevent="newTodo" >
      <input type="text" v-model="task" name="task" placeholder="Task Details">
      <button type="submit" value="submit" class="btn-save" block >Save</button>
      <button class="btn-cancel" block @click="hideModal">Cancel</button>
    </form>
   </div>

 </b-modal>

</div>



</template>

<script>
import TodoItem from './todoitems.vue'
import NewTodo from './newtodo.vue'

export default {
  name: "projectstodo",
  components: {
    TodoItem,
    NewTodo
  },
  methods: {
        showModal() {
          this.$refs.myModalRef.show()
        },
        hideModal() {
          this.$refs.myModalRef.hide()
        },
        deleteTodo(id) {
          this.todos = this.todos.filter(todo => todo.id !== id);
        },
        newTodo(e) {
          if (this.todos.length == 5){
            console.log("max reached");
            return;
          } else {
          e.preventDefault();
          const anotherTodo = {
            id: this.todos.length + 1,
            task: this.task,
            order: this.todos.length + 1,
            urgency: 1,
            importance: 1
          }

          this.todos.push(anotherTodo)
          this.$emit('test1', this.todos)

          this.$refs.myModalRef.hide()
        }
        }
      },
  data () {
    return {
      todos: [
        {
          id: 1,
          task: "Email Fred",
          order: 1,
          urgency: 1,
          importance: 1
        },
        {
          id: 2,
          task: "Call Jane",
          order: 2,
          urgency: 1,
          importance: 3
        },
        {
          id: 3,
          task: "Do Repot",
          order: 3,
          urgency: 1,
          importance: 2
        },
      ],
      task: ''
    }
  },
  computed: {
    length: function () {
      return 5 - this.todos.length
    }
  }

}
</script>

<style >

</style>
