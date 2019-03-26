<template lang="html">
  <div>
   <nav class="menu-nav">
     <router-link to="/"> <li>Dashboard </li></router-link>
     <router-link to="/daybook"><li>Daybook</li></router-link>
     <router-link to="/contacts" ><li>Contacts</li></router-link>
     <router-link to="/projects"><li>Projects</li></router-link>
     <router-link to="/wip"><li>WIP</li></router-link>
      <router-link to="/invoice"> <li>Invoice</li></router-link>
      <router-link to="/reports"> <li> Reports</li></router-link>
      <router-link to="/accounting" > <li> Accounting</li>
      </router-link><router-link to="/finplan" ><li>Finplan</li></router-link>
      <router-link to="/traders" ><li>Trader's Edge</li></router-link>
      <router-link to="/setup" ><li>Setup</li></router-link>
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
