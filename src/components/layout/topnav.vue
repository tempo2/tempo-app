<template lang="html">
  <div class="top-nav">
    <div class="item">
      <h2>Tempo</h2>
    </div>
    <div class="item">
      <kendo-menu  @select="onSelect">
        <kendo-menu-item text="Knowledge"></kendo-menu-item>
        <kendo-menu-item text="Support"></kendo-menu-item>
        <kendo-menu-item text="User Guide"></kendo-menu-item>
        <kendo-menu-item text="John Smith">
          <kendo-menu-item text="Settings"></kendo-menu-item>
          <kendo-menu-item text="Log Out"></kendo-menu-item>
        </kendo-menu-item>
      </kendo-menu>
    </div>
 </div>
</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style lang="css" >

.top-nav {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background:#F8F8F8;
  padding:0 20px 0 20px;
  height: 60px;
}

.k-menu .k-item>.k-link {
  font-size: 12px;
}



</style>
