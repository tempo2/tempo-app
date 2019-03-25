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

.menu-nav .router-link-exact-active li,
.menu-nav .router-link-exact-active li:hover {
 font-weight: 500;
 border-bottom:none;
 background:white;
 box-shadow: inset 0px 6px 0px 0px #8C8C8C;
}

.menu-nav {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  background:#F8F8F8;
}
.menu-nav a{
  width:calc(100%/11);
  text-decoration: none;
}

.menu-nav li {
  text-align:center;
  font-size: 14px;
  background:#EDECEC;
  border-right:1px solid #e4e1e1;
  color: #4A4A4A;
  padding:20px;
}

.menu-nav a:first-child li{
  border-radius: 20px 0px 0px 0px;
}
.menu-nav a:last-child li{
  border-radius: 0px 20px 0px 0px;
}

.menu-nav a:hover li{
  background: #F8F8F8;
}

.menu-nav a:hover{
  text-decoration: none;
  font-color:black;
}
</style>
