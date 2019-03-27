<template>
<div class="timebook-grid">
<kendo-grid :data-source="timeDataSource">
  <div class="grid-header"><p>Timebook</p></div>
  <kendo-grid-column :field="'client'"
                     :title="'CLIENT'">
  </kendo-grid-column>
  <kendo-grid-column :field="'project'"
                     :title="'PROJECT'">
  </kendo-grid-column>
  <kendo-grid-column :field="'workcode'"
                     :title="'WORK CODE'">
  </kendo-grid-column>
  <kendo-grid-column :field="'hours'"
                     :title="'HOURS'">
  </kendo-grid-column>
  <kendo-grid-column :field="'particulars'"
                     :title="'PARTICULARS'">
  </kendo-grid-column>
</kendo-grid>

</div>
</template>

<script>
export default {
  name: "TimeBook",
  data () {
    return {
      timeDataSource: [
        {
          clientid: 1,
          "client": "Jacob Barnes",
          "project": "project1",
          "workcode": "Aud1",
          "hours": '3',
          "particulars": "hello"
        },
        {
          clientid: 2,
          "client": "Roman Gomez",
          "project": "project2",
          "workcode": "Aud2",
          "hours": '2',
          "particulars": "hello"
        },
        {
          clientid: 2,
          "client": "Roman Gomez",
          "project": "project2",
          "workcode": "Aud2",
          "hours": '2',
          "particulars": "hello"
        },
        {
          clientid: 2,
          "client": "Roman Gomez",
          "project": "project2",
          "workcode": "Aud2",
          "hours": '2',
          "particulars": "hello"
        },
        {
          clientid: 2,
          "client": "Roman Gomez",
          "project": "project2",
          "workcode": "Aud2",
          "hours": '2',
          "particulars": "hello"
        },
        {
          clientid: 2,
          "client": "Roman Gomez",
          "project": "project2",
          "workcode": "Aud2",
          "hours": '2',
          "particulars": "hello"
        },
      ]
    }
  }
}
</script>



<style lang="css" >
/** Timebook Grid **/
.timebook-grid .k-grid thead,
.timebook-grid  .k-grid tbody,
.timebook-grid .k-grid tfoot {

}
/** Grid Style **/
.grid-header {
  background: #EDECEC;
  border-radius:15px 15px 0 0 ;
}
.grid-header p{
  margin:0;
  padding: 2px 24px;
  font-size: 16px;
}
.k-header {
  background: #f8f8f8;
}
.k-grid-header th {
  padding: 3px 24px !important;
}

.k-grid.k-display-block,
.k-grid-content  {
  border-radius: 15px;
}

.k-grid table tr:hover, .k-grid table tr.k-state-hover, .k-grid table td.k-state-focused, .k-grid table th.k-state-focused {
  background: white;
}
</style>
