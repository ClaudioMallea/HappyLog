<template>
    <div >
        <NavbarItem/>
        <div class="container">
            
            <div class="card" v-for=" (post,index) in happy_levels_face" :key="index">
                
                <p>{{post.level}}</p>
                <p>{{post.msg}}</p>
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
                    posts: [{id:0,msg:"Hoy comí helado", level:2},{id:1,msg:"Hoy fuí al cine", level:3},{id:2,msg:"Hoy fuí al cine", level:3},{id:4,msg:"Hoy fuí al cine", level:3}]

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
.container{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 10px;
    width:100%;
    height:900px;
}
.card{
    background-color:papayawhip;
    width:400px;
    height:400px;
    border-radius:20px;
}
</style>