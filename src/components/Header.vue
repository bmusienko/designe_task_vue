<script setup>

</script>

<template>
  <header class="header">
    <h3 class="title-page">Всі дизайни</h3>
    <router-link to="/create-designe" class="btn btn-primary">Додати дизайн</router-link>
  </header>
</template>

<style>

a {
  text-decoration: none;
}

h3 {
  font-size: 24px;
  color: var(--white);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.header .block-buttons {
  display: flex;
  align-items: center;
  margin-left: 35px;
}
.button-publication {
  width: 64px;
  height: 24px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  position: relative;
  padding: 2px;
  cursor: pointer;
  margin-right: 10px;
}
.wrapper-button-publication.active .button-publication {
  background: var(--green);
}
.wrapper-button-publication .button-publication::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  transition: all 0.5s ease-in-out;
  transform: translate(0,0);
}
.wrapper-button-publication.active .button-publication::after {
   transform: translate(40px,0);
}
.wrapper-button-publication.active .text-publication {
  color: var(--green);
}
.wrapper-button-publication {
  display: flex;
  align-items: center;
  margin-left: 68px;
}
.button-edit .btn {
  margin-left: 8px;
}
</style>
