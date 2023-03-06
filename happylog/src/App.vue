<template>
  <MessageSection msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MessageSection from './components/MessageSection.vue'

export default {
  name: 'App',
  components: {
    MessageSection
  }
}
</script>

<style>
.container{
    width: 100%;
    height: 98.3vh;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: "Arial";
    
}
body {
    background: linear-gradient(to top right,#E4E784, #00B5BF);
    
}
.card{
    width:400px;
    box-shadow: 2px 4px 5px black;
    background-color: white;
    border-radius:20px;
    padding:20px;
}
.card .msg{
    width: 100%;
    max-width: 100%;
}

.card .happySelector{
    display:flex;
    justify-content: space-around;
}
.card .buttonContainer{
    display:flex;
    justify-content: flex-end;
    margin-top:30px;
}
.card .checkBoxSection{
    margin-top:15px;
    font-size:35px;
    width:30px;
    display:flex;
    flex-direction: column;
    
    align-items: center;


}
.card .checkBoxSection p{
    margin:0px;
}
.card .checkBoxSection input{
    margin:0px;
}
.card .button{
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor:pointer;
    border-radius:8px;
    opacity: 0.8;
    transition: 0.3s;
}
.card .button:hover{
    opacity: 1;

}


.container .homeButton{
    

    width: 100px;
    height: 40px;
    position:absolute;
    bottom:40px;
    right:40px;
    border:2px solid black;
    border-radius:10px;
}
</style>
