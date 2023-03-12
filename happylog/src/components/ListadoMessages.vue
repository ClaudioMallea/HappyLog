<template>
    <div >
        <NavbarItem/>
        <div class="MassiveContainer">
            <header>
                <h1>Listado de mensajes:</h1>
                <div class="orderButtons" > 
                    <div>
                        <p>Ordenar por:</p>
                        <SelectButton   :options="typeOfSorts" @clickOption="clickOption" :firstValue="typeOfSorts.sorts[selected_sort].name"></SelectButton>
                    </div>
                    <div>
                        <p>Periodo:</p>
                        <SelectButton :options="periodsWithDataNamed" @clickOption="clickOption" :firstValue="periodsWithDataNamed.months[0].name"></SelectButton>
                    </div>

                </div>
            </header>
            <div class="container" v-if="happy_levels.length !==0">
                
                <div class="card" v-for=" (post,index) in happy_levels" :key="index">
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
                                <p>{{post.date}}</p>
                            </div>
                            
                        </footer> 
                    </div>
                </div> 
            </div>
            <div class ="containerElse" v-else>
                <p v-if = "posts.length==0">No haz hecho ningún registro todavía 👁️👄👁️ </p>
                <p v-else >No existen registros en este periodo ¯\_(ツ)_/¯</p>
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
                    posts: [{id:1,msg:"Horticipé en la y comi cabritas", level:2, date:new Date(2022,1,1)},
                            {id:11,msg:"blablabla", level:3, date:new Date(2022,1,1)},
                            {id:10,msg:"Hoy fuí al cine", level:3, date:new Date(2022,1,1)},
                            {id:9,msg:"Testing testing", level:3, date:new Date(2022,1,1)},
                            {id:8,msg:"Hoy fuí al cine", level:2, date:new Date(2022,1,1)},
                            {id:7,msg:"Hoy comí pizza", level:4, date:new Date(2022,0,1)},
                            {id:6,msg:"Hoy fuí al cine", level:3, date:new Date(2022,2,1)},
                            {id:2,msg:"Hoy fuí al cine", level:3, date:new Date(2022,1,1)},
                            {id:3,msg:"Hoy fuí al cine", level:3, date:new Date(2022,1,1)},
                            {id:5,msg:"Hoy fuí al cine", level:3, date:new Date(2022,1,1)}],
                    typeOfSorts: {sorts:{1:{name:"Más reciente"},2:{name:"Más antiguo"},3:{name:"Mayor nivel"},4:{name:"Menor nivel"}}},
                    months:{months:{1:{name:"Enero"},2:{name:"Febrero"},3:{name:"Marzo"},4:{name:"Abril"},5:{name:"Mayo"},6:{name:"Junio"},7:{name:"Julio"},8:{name:"Agosto"},9:{name:"Septiembre"},10:{name:"Octubre"},11:{name:"Noviembre"},12:{name:"Diciembre"}}},
                    selected_sort:1,
                    selected_period:0,
                    firstValue:["Ordenar por:","Filtrar por:"],
                }
            },
        computed:{
            happy_levels(){
                let with_faces = this.posts.map(p=>{

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
                
               

                //Filters
                with_faces = with_faces.filter(p=>{
                    if(this.selected_period == 0){
                        return true;
                    }

                    let fecha = p.date;
                    let periodo_elegido = this.periodsWithData.months[this.selected_period]
                    return fecha.getMonth() == periodo_elegido.getMonth() && fecha.getYear() == periodo_elegido.getYear()

                })
                
                //Sorts
                with_faces.sort(this.sortList(this.selected_sort));
                return with_faces.map((p)=>{
                                    return{...p, date: p.date.toLocaleDateString() }})
                        

            },
            periodsWithData(){
                let firstPeriod = this.firstPeriod()
                firstPeriod.setDate(1);
                let currentDate = new Date();
                let periods = [new Date(firstPeriod)]
                
                while(firstPeriod.setMonth(firstPeriod.getMonth()+1) < currentDate ){
                    periods.unshift(new Date(firstPeriod));
                }
                periods = periods.reduce((acc,value, index)=>{
                    let copy_acc = {...acc};
                    copy_acc[index+1] = value;
                    return copy_acc
                },{})
                return {months:periods}
            },
            periodsWithDataNamed(){
                let periods= Object.values(this.periodsWithData.months).reduce((acc,value,index)=>{

                    let copy_acc ={...acc};
                    let value_string = value.toLocaleString('es-ES', { month: 'short', year: 'numeric' });
                    const capitalized = value_string.charAt(0).toUpperCase() + value_string.slice(1)
                    copy_acc[index+1] = {name:capitalized};
                    return copy_acc
                },{})
                periods[0]={name:"Todos"}
                return {"months":periods}
                
            },

        },

        methods:{
            sortList(id){
                // eslint-disable-next-line no-unused-vars
                if(id==0){
                    // eslint-disable-next-line no-unused-vars
                    return function(a,b){
                        return 0;
                    }
                }
                else if(id==1){
                    // eslint-disable-next-line no-unused-vars
                    return function(a,b){
                        return b.date - a.date;
                    }
                }
                else if(id==2){
                    // eslint-disable-next-line no-unused-vars
                    return function(a,b){
                        return a.date - b.date;
                    }
                }
                else if(id==3){
                    // eslint-disable-next-line no-unused-vars
                    return function(a,b){
                        return b.level - a.level
                    }
                }
                else if(id==4){
                    // eslint-disable-next-line no-unused-vars
                    return function(a,b){
                        return a.level - b.level
                    }
                }

            },
            firstPeriod(){
                let copy_posts = structuredClone(this.posts);
                return copy_posts.reduce((acc,value)=> value.date < acc? value.date : acc, new Date());   
            },
            clickOption(id,clickOption){

                if(clickOption==='sorts'){
                    this.selected_sort = id;
                }
                else if(clickOption==='months'){
                    this.selected_period = id;
                }
                
                
            },
            hide(){
                console.log("ajajajajAADWAWD")
                return true
            },  

        }

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
    width:76%;
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
.containerElse{
    margin-left:100px;
    color:gray;
    font-size:large;
}


.orderButtons{
    display:flex;
    justify-content: space-around;
    width:650px;
} 
.orderButtons div{
    display:flex;
    align-items:center;
    
}
.orderButtons div > p{
    margin-right:10px;
    
}
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