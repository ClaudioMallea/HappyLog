<template>
   <div class="container">
       <div class="card">
           <h2>HappyLog</h2>
           <MessageInput/> 
           <HappySelector v-bind:happy_levels ="happy_levels"/> 
           <div class="buttonContainer">
                   <button class="button">Enviar</button>
           </div>        
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


</style>
