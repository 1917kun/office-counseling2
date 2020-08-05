<template lang="pug">
  #cases
    b-container.mt-5(fluid).overflow-auto
      p.mt-3 目前頁面: {{ currentPage }}
      b-table#my-table(:items='items' :per-page='perPage' :current-page='currentPage' small :fields="fields")
        template(v-slot:row-details="row")
          | {{ row.item.worry }}
        template(v-slot:cell(worry)="row")
          b-button(@click="row.toggleDetails") 詳細資料
      b-pagination(v-model='currentPage' :total-rows='rows' :per-page='perPage' aria-controls='my-table' pills align="center")
</template>

<script>
export default {
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      items: [],
      fields: [
        { key: 'name', label: '姓名' },
        { key: 'age', label: '年齡' },
        { key: 'number', label: '電話' },
        { key: 'email', label: 'E-mail' },
        { key: 'worry', label: '煩惱' },
        { key: 'selected', label: '類型' },
        { key: 'date', label: '日期' },
        { key: 'time', label: '時間' }
      ]
    }
  },
  computed: {
    rows () {
      return this.items.length
    }
  },
  methods: {
    getData () {
      this.axios.get('http://localhost:3000/order')
        .then(res => {
          this.items = res.data.result
        })
    }
  },
  mounted () {
    this.getData()
    setInterval(this.getData, 1000 * 60)
  }
}
</script>
