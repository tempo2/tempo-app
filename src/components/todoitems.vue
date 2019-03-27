<template>
<div>
<p>{{todo.order}}. {{todo.task}}</p>
<span class="close-x" @click="$emit('del-todo', todo.id)"><i class="fas fa-times"></i></span>
</div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"]
}
</script>

<style scoped>
</style>
