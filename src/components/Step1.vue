<template>
  <div class="hello">
    <ul id="example-1">
      <form>
          <div>
          Name: <input type="text" v-model="investigador.name"/>
          </div>
           <div>
           Edad: <input type="number" v-model="investigador.edad"/>
           </div>
            <div>
           FUE: <select v-model="investigador.caracteristicas.fue">
               <option disabled value="">Please select one</option>
              <option v-for="item in caracteristicas" v-bind:key="item">
                    {{ item }}
                </option>
           </select>
           </div>
            <div>
           CON: <select v-model="investigador.caracteristicas.con">
               <option disabled value="">Please select one</option>
              <option v-for="item in caracteristicas" v-bind:key="item">
                    {{ item }}
                </option>
           </select>
           </div>
      </form>
    </ul>
  </div>
</template>

<script>

//'fue', 'con', 'des', 'apa', 'pod', 'tam', 'int', 'edu'
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('investigators');
import Datastore from 'nedb-promises';

const investigadoresStore = createNamespacedHelpers('investigators');

export default {
    name: 'Step1',
    data: () => {
        return {
            caracteristicas: [40, 50, 60, 70, 80]
        }
    },
   computed: {
    ...mapState({
      game: state => state,
      investigador: (state) => {
          console.log(state);
        return state.investigators[0]
      }
    })
   }
}
</script>