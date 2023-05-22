<template>
<div class="container">
    <main>
        <header class="header">
            <div class="block-buttons">
                <router-link to="/" class="button-back">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.36358 6.36358C0.0121076 6.71505 0.0121076 7.2849 0.363579 7.63637L6.36357 13.6364L7.63636 12.3636L3.27277 7.99997L16 7.99998L16 5.99998L3.27277 5.99997L7.63636 1.63638L6.36357 0.363586L0.36358 6.36358Z" fill="#222222"/>
                    </svg>
                </router-link>
                <div class="wrapper-button-publication">
                    <div class="button-publication"></div>
                    <span class="text-publication">Не опублікований</span>
                </div>
            </div>
        
            <div class="button-edit">
                <button v-on:click="deleteDesigne" class="btn btn-danger">Видалити</button>
                <button v-on:click="editDesigne" class="btn btn-primary">Зберегти і вийти</button>
            </div>
        </header>
        <div class="edit-designs">
            <div class="list-designs">
                <div class="list-designs-item">
                <img src="@/assets/design-edit_1.png" alt="design-1">
                </div>
                <div class="list-designs-item">
                <img src="@/assets/design-edit_2.png" alt="design-1">
                </div>
                <div class="list-designs-item">
                <img src="@/assets/design-edit_2.png" alt="design-1">
                </div>
                <div class="add-design">
                <img src="@/assets/add-design.svg" alt="design-1">
                </div>
            </div>

            <form>
                <div class="form-group">
                    <input class="code" name="designeCode" type="text" placeholder="###" v-model="designeCode">
                    <input class="name" name="designeName" type="text" placeholder="Назва дизайну" v-model="designeName">
                </div>
                <div class="form-group">
                    <input class="email" name="designeUrl" type="text" placeholder="https://design###.horoshop.ua/" v-model="designeUrl">
                </div>
            </form>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name: "EditDesigne",
    data() {
        return {
            designeCode: '',
            designeName: '',
            designeUrl: '',
            currentDesigne: {},
            designeImg: null,
            id: null
        }
    },
    async beforeMount() {
        let designeList = this.$store.state.designeList
        this.id = this.$route.params.id
        this.designeCode = designeList[this.id].code
        this.designeName = designeList[this.id].title
        this.designeUrl = designeList[this.id].url
        console.log(this.currentDesigne)
    },
    methods: {
    editDesigne() {
      let designeList = this.$store.state.designeList
      if(this.designeCode && this.designeName && this.designeUrl ) {
        designeList[this.id] = {title: this.designeName, code: this.designeCode, img: "@/assets/Design_Preview_1.png", url: this.designeUrl }
        this.$store.state.designeList = designeList
        console.log(designeImg)
        this.$router.push('/')
      }
      else {
        console.log('this fields are requared')
      }
    },
    deleteDesigne() {
        let designeList = this.$store.state.designeList
        this.$store.state.designeList.splice(this.id, 1)
        // console.log(designeList[this.id])
        this.$router.push('/')
    }
  }
}
</script>

<style>

</style>