<template>
  <div class="list-view">
    <article class="list-view-cell" v-for="item in items">
      <header><router-link :to="{ name: 'detail', params: { id: item._id }}">{{item.title}}</router-link></header>
      <section>{{item.content}}</section>
      <footer></footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'list-view',
  props: ['items']
}

</script>

<style scoped>

.list-view-cell {
  padding: 40px 20px;
  /*background-color: red;*/
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
  background-color: #c8c7cc;
  bottom: 8px;
}

</style>
