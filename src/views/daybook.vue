<template>
  <div class="daybook">
    <div class="grid-container">
      <div class="calendar"><calendar /></div>
      <div class="projecttodo"><projectstodo/> </div>
      <div class="timebook"></div>
      <div class="daybook"></div>
    </div>
  </div>tt
</template>

<script>
import calendar from "../components/calendar";
import projectstodo from "../components/projectstodo"

export default {

  name: "daybook",
  components: {
    calendar,
    projectstodo
  }
}
</script>

<style>

.daybook {
  padding: 25px;
}

.grid-container {
  max-height: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "calendar timebook timebook timebook" "calendar timebook timebook timebook" "projecttodo timebook timebook timebook" "projecttodo daybook daybook daybook" "projecttodo daybook daybook daybook" "projecttodo daybook daybook daybook";
}

.calendar { grid-area: calendar; overflow:hidden;}

.projecttodo { grid-area: projecttodo; }

.timebook { grid-area: timebook; }

.daybook { grid-area: daybook; }



</style>
