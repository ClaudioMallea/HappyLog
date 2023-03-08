<template>
    <nav>
        <section class="leftSection">
            <p>HappyLog</p>
            <p>Listado</p>
        </section>
        <section class ="rightSection">
            <p>claudiomallea.a@gmail.com</p>
        </section>
        
    </nav>
</template>

<script>
    export default {
        name:"NavbarItem",
    }
</script>

<style scoped>
  nav{
    display:flex;
    justify-content: space-between;
    background-color:#7BD09F;
    width:100%;
    height:60px;
    border-bottom: 1px solid black;
    
    } 
 .leftSection{
    display:flex;
    justify-content: space-around;
    width:400px;
 }
 .rightSection{
    display:flex;
    justify-content: center;
    width:300px;
 }
</style>