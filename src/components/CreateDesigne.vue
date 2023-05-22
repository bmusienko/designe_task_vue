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
          <button v-on:click="addNewDesigne" class="btn btn-primary">Зберегти і вийти</button>
        </div>
      </header>
      <div class="edit-designs">
        <div class="choose-design">
          <img src="@/assets/choose-design.png" alt="icon-choose-design">
        </div>
        <input type="file" @change="changeImgFile" />
        <button @click="onUpload">Upload</button>
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
  name: "CreateDesigne",
  data() {
      return {
        designeCode: '',
        designeName: '',
        designeUrl: '',
        designeImg: null
      }
  },
  methods: {
    changeImgFile(event) {
      this.designeImg = event.target.files[0]
      console.log(this.designeImg)
    },
    async onUpload() {
      const formData = new FormData()
      formData.append('designeImg', this.designeImg)
      console.log(formData.append('designeImg', this.designeImg))
    },
    addNewDesigne() {
      let designeList = this.$store.state.designeList
      if(this.designeCode && this.designeName && this.designeUrl ) {
        designeList.push({title: this.designeName, code: this.designeCode, img: "@/assets/Design_Preview_1.png", url: this.designeUrl })
        this.$store.state.designeList = designeList
        console.log(designeImg)
        this.$router.push('/')
      }
      else {
        console.log('this fields are requared')
      }
    }
  }
}
</script>

<style>
    .edit-designs {
    max-width: 600px;
    margin-left: 120px;
    }
    .edit-designs .choose-design {
        widows: 100%;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-bottom: 40px;
        cursor: pointer;
    }
    .edit-designs .list-designs {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }
    .edit-designs .list-designs .list-designs-item {
        margin-right: 8px;
        max-width: 120px;
    }
    .edit-designs .list-designs .list-designs-item img {
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        height: max-content;
    }
    .edit-designs .list-designs .add-design {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    .edit-designs .form-group {
        margin-bottom: 24px;
    }
    .edit-designs .form-group input {
        width: 100%;
    }
    .edit-designs .form-group .code {
        width: 80px;
        margin-right: 8px;
    }
    .edit-designs .form-group .name {
        width: calc(100% - 88px);
    }
</style>