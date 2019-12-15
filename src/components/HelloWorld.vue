<template>
  <div class="hello">
    HOLA: {{game}}
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('investigators');
import Datastore from 'nedb-promises';

const investigadoresStore = createNamespacedHelpers('investigators');


export default {
    name: 'HelloWorld',
   computed: {
    ...mapState({
      game: state => state
    })
   },
   async beforeRouteEnter(to, from, next) {
     
      let db = Datastore.create({filename: 'database', inMemoryOnly: false})

      console.log(db);

      const investigators  = await db.find();

      console.log(investigators);
          
      next(vm => {
        vm.set(investigators);
      });
   },
   methods: {
      set: investigadoresStore.mapMutations(['set']).set,
   }
}
</script>