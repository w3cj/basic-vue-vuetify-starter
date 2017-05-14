<template lang="html">
  <div>
    <h3>{{title}}</h3>
    <list></list>
  </div>
</template>

<script>
const List = httpVueLoader('components/list/List.vue');

module.exports = {
  components: {
    'list': List
  },
  data: function() {
    return {
      title: 'Basic Vue.js Starter'
    }
  }
}
</script>
