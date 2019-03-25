<template >
<div>
  <div class="projecttodo-list">
    <ul>
      <li class="project-todo-list_title">
        <p>Projects</p><router-link to="/projects">ALL></router-link>
      </li>
      <li><p>Project 1</p></li>
      <li><p>Project 2</p></li>
      <li><p>Project 3</p></li>
      <li><p>Project 4</p></li>
    </ul>
    <ul>
      <li class="project-todo-list_title">
        <p>To Do</p>
      </li>
      <li><p>Email Fred</p></li>
      <li><p>Project 2</p></li>
      <li><p>Project 3</p></li>
      <li><p>Project 4</p></li>
    </ul>
  </div>
</div>woohooo
</template>

<script>
export default {
  name: "projectstodo"
}
</script>

<style >
/* project */
.projecttodo-list{
  background: #FCFCFC;
  border: 1px solid #D8D8D8;
  border-radius: 15px;
  margin-top:15px;
}
.projecttodo-list ul {
  list-style-type:none;
  padding: 0;
  margin:0;
}
.projecttodo-list ul li {
  padding: 10px;
  border-bottom: 1px solid #D8D8D8;
}
.projecttodo-list ul li:first-child{
  border-radius: 15px 15px 0 0;
}
.projecttodo-list ul:last-child li:last-child{
  border:none;
}
.projecttodo-list ul li p {
  padding: 0;
  margin:0;
}
.projecttodo-list ul .project-todo-list_title p
 {
  display: inline-block;
}
.projecttodo-list ul .project-todo-list_title a {
  display: inline-block;
  float: right;
}
.project-todo-list_title {
  background:#F8F8F8;
}

/*To do*/
</style>
