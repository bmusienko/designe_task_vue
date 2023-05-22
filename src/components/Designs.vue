<script>
  export default {
    props: {
      title: String,
      id: Number,
      code: Number,
      img: String
    },
    data() {
      return {}
    }
  }
</script>

<template>
  
  <router-link :to="{params: {id: id}, name: 'EditDesigne' }" class="design-card">
    <div class="design-card-img">
      <img :src="`${img}`">
    </div>
    <div class="design-card-info">
      <span class="design-card-code">{{code}}</span>
      <h4 class="design-card-title">{{title}}</h4> 
    </div>
  </router-link>
 
</template>

<style scoped>
  .design-card-info {
    color: var(--white);
  }
  .design-card {
    margin: 0 10px 40px 10px;
    width: calc(25% - 20px);
    display: block;
    text-decoration: none;
  }
  .design-card-info {
    display: flex;
  }
  .design-card .design-card-img {
    margin-bottom: 16px;
    position: relative;
  }
  .design-card .design-card-img:before {
    content: "";
    display: block;
    padding-top: 133%;
  }
  .design-card .design-card-img img {
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
    object-fit: cover;
  }
  .design-card-info .design-card-code {
    padding: 0 8px;
    font-size: 11px;
    color: var(--black);
    background: var(--white);
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-weight: 500;
  }
  .design-card-info .design-card-title {
    margin-left: 8px;
  }
</style>