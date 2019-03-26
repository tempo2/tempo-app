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
    <ul class="todo-list">
      <li class="project-todo-list_title">
        <p>To Do</p><span @click="showModal" class="new-btn_sm">+</span>
      </li>
      <li><p>1. Email Fred</p></li>
      <li><p></p></li>
      <li><p></p></li>
      <li><p></p></li>
    </ul>
  </div>


  <b-modal ref="myModalRef" hide-footer title="New Task">
  <div class="modalfooter">
     <button class="btn-save" block @click="">Save</button>
     <button class="btn-cancel" block @click="hideModal">Cancel</button>
   </div>

 </b-modal>

</div>



</template>

<script>
export default {
  name: "projectstodo",
  methods: {
        showModal() {
          this.$refs.myModalRef.show()
        },
        hideModal() {
          this.$refs.myModalRef.hide()
        }
      }
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
.projecttodo-list ul .project-todo-list_title a,
.projecttodo-list ul .project-todo-list_title span
 {
  display: inline-block;
  float: right;
}
.project-todo-list_title {
  background:#F8F8F8;
}
/*To do list*/
.todo-list li {
  min-height:3.5vh;
}
/*To do Modal*/
.modal-header {
  border:none;
}
.modal-dialog {
  margin: 40vh auto;
}
.modal-content {
  border-radius: 15px;
}
.modalfooter {
  width:100%;
}
.btn-save {
  background: #4A4A4A;
    color: white;
    border-radius: 15px;
    padding: 10px 15px 10px 15px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    float:right;
    margin-left: 1%;
}
.btn-cancel {
    background: white;
    border: 1px solid #CFCDCD !important;
    border-radius: 15px;
    padding: 10px 15px 10px 15px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    float: right;
}
/* Button Small Style */

.new-btn_sm {
    background: #979494;
    width: 30px;
    color: white;
    border-radius: 50px;
    text-align: center;
    font-size: 22px;
    float: right;
    bottom: 5px;
    position: relative;
    cursor:pointer;
}
.new-btn_sm:hover {
  background:##777474;
}

</style>
