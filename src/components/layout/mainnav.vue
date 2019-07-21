<template lang="html">
  <div>
   <nav class="menu-nav">
     <router-link to="/"> <li>DASBHOARD </li></router-link>
     <router-link to="/daybook"><li>TIMEBOOK</li></router-link>
     <router-link to="/contacts" ><li>CONTACTS</li></router-link>
     <router-link to="/projects"><li>PROJECTS</li></router-link>
     <router-link to="/wip"><li>WIP</li></router-link>
      <router-link to="/invoice"> <li>INVOICE</li></router-link>
      <router-link to="/reports"> <li> REPORTS</li></router-link>
      <router-link to="/accounting" > <li> ACCOUNTING</li>
      </router-link><router-link to="/finplan" ><li>FINPLAN</li></router-link>
      <router-link to="/traders" ><li>TRADER'S EDGE</li></router-link>
      <router-link to="/setup" ><li>SETUP</li></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  props: ["mainNav"],
  data() {
    return { activeItem: 'dashboard' }
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style lang="css" >

</style>
