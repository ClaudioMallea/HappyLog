<template>
    <nav>
        <section class="leftSection">
            <img @click = "goToMessageSection" src="../assets/LogoBigCorrect.png"/>
            
        </section>
        <section class ="rightSection">
            <p>claudiomallea.a@gmail.com</p>
            <font-awesome-icon class="fa-xl" icon="fa-solid fa-circle-user" />
        </section>
        
    </nav>
</template>

<script>
    export default {
        name:"NavbarItem",
        methods:{
            goToMessageSection(){
                console.log("asdasdasd")
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
  nav{
    display:flex;
    justify-content: space-between;
    background-color:#00B388;
    width:100%;
    height:60px;
    border-bottom: 1px solid black;
    
    } 
 .leftSection{
    display:flex;
    justify-content: space-around;
    width:300px;
 }
 .leftSection img{
    cursor:pointer;
 }
 .rightSection{
    display:flex;
    justify-content: space-around;
    align-items:center;
    width:300px;
    margin-right:20px;
 }
</style>