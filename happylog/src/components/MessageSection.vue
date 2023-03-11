<template>
   <div class="container">
       <div class="card">
           <header>
                <img src="../assets/LogoBigCorrect.png"/>
           </header>
           <section>
                <MessageInput/> 
                <HappySelector v-bind:happy_levels ="happy_levels"/> 
                <div class="buttonContainer">
                        <button class="button" @click="goToHome">Enviar</button>
                </div>  
           </section>      
       </div>
       <div class="homeButton">Ir al Home</div>
   </div>
</template>

<script>
import MessageInput from './MessageInput.vue';
import HappySelector from './HappySelector.vue';
export default {
  
  name: 'MessageSection',
  components:{
    MessageInput,
    HappySelector,
  },
  data(){
      return {
          text: "HappyLog",
          sun_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSt7tGRmiehClAlMpzzi1_jbitO5rpackUQ&usqp=CAU",
          counter:0,
          msg: "Hoy comí helado",
          firstName:"Claudio",
          lastName:"Mallea",
          open:false,
          puerta_status:"puerta cerrada",
          happy_levels: [{id:1, face:"😐"}, {id:2, face:"🙂"}, {id:3, face:"😊"}, {id:3, face:"😃"}, {id:3, face:"😁"}],
          
      };
  },
  computed:{
      fullName(){
          return this.firstName+" "+this.lastName
      }
  }
  ,
  methods:{
      increment(){
          this.counter++;
      },
      input(e){
          this.msg = e.target.value;
          console.log(e)
      },
      happy_level_selected(e){
          this.happy_level_select=e.target.value;
      },
      goToHome(){
        this.$router.push('/listado')
      }
  },
  watch:{
      text(){
          console.log()
      },
      open(value){
          if(value){
              this.puerta_status = "puerta abierta";
          }
          else{
              this.puerta_status = "puerta cerrada";
          }
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
    width: 100%;
    height:100vh;
    background: linear-gradient(to top right,#E4E784, #00B5BF);
    display:flex;
    justify-content: center;
    align-items: center;
    
    
}

.card{
    display:flex;
    flex-direction:column;
    overflow:hidden;
    width:400px;
    box-shadow: 2px 4px 5px black;
    background-color: white;
    border-radius:20px;
   
}
.card header{
    width:100%;
    background-color:#00B388;
    height:84px;
    
}
.card header img{
    margin-left:10px;
    width:200px;
    height:auto;
}
.card section{
    padding:20px;
}
/* .card .msg{
    width: 100%;
    max-width: 100%;
} */

/* .card HappySelector{
    display:flex;
    justify-content: space-around;
    background-color:red;
} */
.card .buttonContainer{
    display:flex;
    justify-content: flex-end;
    margin-top:30px;
}
/* .card .checkBoxSection{
    margin-top:15px;
    font-size:35px;
    width:30px;
    display:flex;
    flex-direction: column;
    
    align-items: center;


} */

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
