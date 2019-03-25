<template >
<kendo-calendar :value="new Date()" selection></kendo-calendar>
</template>

<script>
export default {
  name: "calendar"
}
</script>

<style >

 /*Calendar */

.k-calendar {
  width: 100%;
  padding: 0;
  border-radius: 15px;
  height:100%;
}
.k-header {
  background: #EDECEC;
  padding: 0 !important;
}
.k-header .k-link {
  width:65% !important;
}
 .k-header .k-nav-prev {
  justify-content: flex-end !important;
}
.k-header .k-nav-next {
  justify-content: flex-start !important;
}
.k-calendar-view {
  width:100% !important;
  height:100% !important;
}
.k-calendar table.k-content {
  width:100% !important;
  padding:5%;
  background: #FCFCFC;
}
.k-calendar table.k-content thead{
  display:none;
}
.k-other-month, .k-other-month .k-weekend {
  opacity:0.5 !important;
}
.k-footer{
  background:#FCFCFC;
  display: none;
}
</style>
