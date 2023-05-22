<template>
  
    <div class="container homepage">
      <main>
        <Header />
        <div class="designs-list">
          <Design 
          v-for="(design, index) in designs" 
          v-bind:key="index"
          v-bind:id="index"
          v-bind:title="design.title"
          v-bind:img="design.img"
          v-bind:code="design.code" />
        </div>
      </main>
    </div>
  
</template>

<script>
import Header from '../components/Header.vue'
import Design from '../components/Designs.vue'

    export default {
        name: "Homepage",
        data() {
            return {
                designs: []
            }
        },
        async beforeMount() {
          this.designs = this.$store.state.designeList
        },
        components: {
            Header,
            Design
        }
    }
</script>

<style>

</style>