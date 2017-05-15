<template>
  <div class="list-container">
    <list-item v-for="item in items" v-bind:item="item" v-bind:key="item.img">
    </list-item>
  </div>
</template>

<script>
const ListItem = httpVueLoader('components/list/ListItem.vue');

module.exports = {
  components: {
    'list-item': ListItem
  },
  data: function() {
    return {
      items: [{
        title: 'Hello Vue.js!',
        img: 'https://media1.giphy.com/media/W8krmZSDxPIfm/giphy.gif'
      }, {
        title: 'Vue.js is Fun',
        img: 'https://media4.giphy.com/media/qiMbLh4WHEZyw/giphy.gif'
      }, {
        title: 'Vue.js all day.',
        img: 'https://media0.giphy.com/media/4IAzyrhy9rkis/giphy.gif'
      }]
    }
  }
}
</script>

<style>
.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
