<template>
    <div >
        <NavbarItem/>
        <div class="MassiveContainer">
            <header>
                <h1>Listado de mensajes:</h1>
                <div class="orderButtons" > 
                    <SelectButton :typeOfSorts="typeOfSorts"></SelectButton>
                    

                </div>
            </header>
            <div class="container">
                
                <div class="card" v-for=" (post,index) in happy_levels_face" :key="index">
                    <div class="containerContent">
                        <p class="level">
                            {{post.face}} 
                        </p>
                        
                        <p class="PostMessage">
                            
                            {{post.msg}}
                        </p>
                        
                        
                        <footer>
                            <div>
                                <p>Level: {{post.level}}</p>
                            </div>
                            <div>
                                <p>1/1/2022 </p>
                            </div>
                            
                        </footer> 
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue';
import SelectButton from './SelectButton.vue';
    export default {
        name:"ListadoMessages",
        components:{
            NavbarItem,
            SelectButton,
        },
        data(){
                return{
                    posts: [{id:0,msg:"Horticipé en la ferparticipé en la ferparticipé en la fer en la feria de la Coloma, fui al cine y comi cabritas, bla bla blaablaa bla bla", level:2},{id:10,msg:"Hoy fuí al cine", level:3},{id:9,msg:"Hoy fuí al cine", level:3},{id:8,msg:"Hoy fuí al cine", level:3},{id:7,msg:"Hoy fuí al cine", level:3},{id:6,msg:"Hoy fuí al cine", level:3},{id:5,msg:"Hoy fuí al cine", level:3},{id:1,msg:"Hoy fuí al cine", level:3},{id:2,msg:"Hoy fuí al cine", level:3},{id:4,msg:"Hoy fuí al cine", level:3}],
                    typeOfSorts: {1:{name:"Más reciente"},2:{name:"Más antiguo"},3:{name:"Mayor nivel"},4:{name:"Menor nivel"}},

                }
            },
        computed:{
            happy_levels_face(){
                return this.posts.map(p=>{

                    switch(p.level){
                    case 0:
                        return {...p, face:"😐"};
                        
                    case 1:
                        return {...p, face:"🙂"};
                    case 2:
                        return {...p, face:"😊"};
                    case 3:
                        return {...p, face:"😃"};
                    case 4:
                        return {...p, face:"😁"};
                    
                }


                })

            }},

    }
</script>

<style scoped>
body{
    background-color: red;
}
.MassiveContainer{
    width:100%;

}
header{
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:60%;
    height:150px;
}
header h1{
    margin-left:8%;
}
.container{
    display:grid;
    grid-template-columns: repeat(6,200px);
    grid-auto-rows: 200px;
    justify-content: center;
    column-gap: 10px;
    row-gap:10px;   
    height:900px;
    max-width:1400px;
}



/* .orderButtons div span{
    align-self:flex-end;
} */
.card{
    overflow:hidden;
    background-color:white;
    width:100%;
    right:100%;
    border-radius:15px;
    border:1px solid #00B388;
}
.card:hover{
    opacity:0.8;
    cursor:pointer;
    z-index:0;
}

.card .containerContent{
    overflow:hidden;
    height:100%;
    display:flex;
    flex-direction: column;
}
.containerContent  .level{
    display:flex;
    justify-content: center;
    align-items:center;
    background-color:#00B388;
    height:120px;
    margin: auto 0;
    font-size:60px;
    text-align:center;
}

.containerContent .PostMessage{
    
    max-height:80px;
    height:80px;
    overflow:hidden;
    padding:0 5px;
}
.containerContent footer{
    display:flex;
    border-top:1px solid #00B388;
    overflow:hidden;
    align-self:flex-end;
    width:100%;
    height:30px;
}

footer div{
    width:50%;
    

}
footer div:nth-child(1){
    border-right:1px solid #00B388;
}
footer div:nth-child(2){
    
}
footer p{
    margin: 0 0;
    color:gray;
    text-align:center;
}


</style>