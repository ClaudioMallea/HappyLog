<template>
    <div >
        <NavbarItem/>
        <div>
            <header>
                <h2>Listado de mensajes:</h2>
                <div > asd</div>
            </header>
            <div class="container">
                
                <div class="card" v-for=" (post,index) in happy_levels_face" :key="index">
                    <div class="containerContent">
                        <p class="level">{{post.level}}</p>
                        
                        <p class="PostMessage">{{post.msg}}</p>
                        
                        
                        <footer>
                            1/1/2022
                        </footer> 
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue';
    export default {
        name:"ListadoMessages",
        components:{
            NavbarItem,
        
        },
        data(){
                return{
                    posts: [{id:0,msg:"Horticipé en la ferparticipé en la ferparticipé en la fer en la feria de la Coloma, fui al cine y comi cabritas, bla bla blaablaa bla bla", level:2},{id:10,msg:"Hoy fuí al cine", level:3},{id:9,msg:"Hoy fuí al cine", level:3},{id:8,msg:"Hoy fuí al cine", level:3},{id:7,msg:"Hoy fuí al cine", level:3},{id:6,msg:"Hoy fuí al cine", level:3},{id:5,msg:"Hoy fuí al cine", level:3},{id:1,msg:"Hoy fuí al cine", level:3},{id:2,msg:"Hoy fuí al cine", level:3},{id:4,msg:"Hoy fuí al cine", level:3}]

                }
            },
        computed:{
            happy_levels_face(){
                return this.posts.map(p=>{

                    switch(p.level){
                    case 0:
                        return {...p, level:"😐"};
                        
                    case 1:
                        return {...p, level:"🙂"};
                    case 2:
                        return {...p, level:"😊"};
                    case 3:
                        return {...p, level:"😃"};
                    case 4:
                        return {...p, level:"😁"};
                    
                }


                })

            }},

    }
</script>

<style scoped>
body{
    background-color: red;
}
header{
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:60%;

}
.container{
    display:grid;
    margin-left:100px;
    grid-template-columns: repeat(5,200px);
    grid-auto-rows: 200px;
    justify-content: flex-start;
    column-gap: 10px;
    row-gap:10px;
    width:100%;
    height:900px;
}
.card{
    
    background-color:white;
    width:100%;
    right:100%;
    border-radius:15px;
    border:1px solid #7BD09F;
}


.card  .level{
    margin: auto 0;
    margin-top:20px;
    font-size:50px;
    text-align:center;
}
.card footer{
border-top:1px solid #7BD09F;
}
.card .containerContent{
    height:100%;
    display:flex;
    flex-direction: column;
}
.containerContent .PostMessage{
    max-height:20px;
    height:20px;
    overflow:hidden;
}
.card footer{
    overflow:hidden;
    align-self:flex-end;
    width:100%;
    height:30px;
}
</style>