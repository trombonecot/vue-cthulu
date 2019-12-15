<template>
  <div class="hello">
    <ul id="example-1">
      <li v-for="item in game.investigators" v-bind:key="item.id">
        {{ item.name }}
        <router-link to="/edit">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('investigators');
import Datastore from 'nedb-promises';

const investigadoresStore = createNamespacedHelpers('investigators');

export default {
    name: 'List',
   computed: {
    ...mapState({
      game: state => state
    })
   }
}
</script>