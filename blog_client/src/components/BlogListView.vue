<template>
  <div class="list-view">
    <article class="list-view-cell" v-for="item in items">
      <header><a @click="toPage(item.id)">{{item.title}}</a></header>
      <section>{{item.context}}</section>
      <footer></footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'list-view',
  props: ['items'],
  methods: {
    toPage (id) {
      router.push({path: '/detail/' + id})
    }
  }
}

</script>

<style scoped>

.list-view-cell {
  padding: 40px 20px;
  background-color: red;
}
.list-view-cell header {
  font-size: 2.6em;
  font-weight: bold;
  color: #222;
}

.list-view-cell section {
  font-size: 1.2em;
  color: #222;
  padding: 10px 0;
}

/*#c8c7cc*/
.list-view-cell:after {
  position: absolute;
  right: 20px;
  left: 20px;
  height: 1px;
  content: '';
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
  background-color: #000; 
  bottom: 8px;
}

</style>