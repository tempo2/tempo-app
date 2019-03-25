import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-material/dist/all.css'


import { Menu, LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { Calendar,
        DateInput,
        DatePicker,
        DateRangePicker,
        DateTimePicker,
        MultiViewCalendar,
        TimePicker,
        DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper'

Vue.use(DateinputsInstaller)
Vue.use(LayoutInstaller)
Vue.use(GridInstaller)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
