<template>
<div>
<p>{{todo.order}}. {{todo.task}}</p>
<span @click="$emit('del-todo', todo.id)">x</span>
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
