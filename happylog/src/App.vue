<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style >

@font-face {
  font-family: "Lato";
  src: local("Lato"), url(./assets/fonts/Lato-Regular.ttf) format("truetype");
}

body {
    overflow-y:auto;
    width:100%;
    height:100%;
    margin: 0;
    background: #F0F0F3 ;
    font-family: "Lato";
}
</style>
