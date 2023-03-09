<template>
    <div class="orderBy" v-on:click="toggleShow">
        <div>
            <p>Último Registro</p>
        </div>
        <div>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </div>

    </div>
    <section  :class="visible">
            <label v-for="(sort,index) in typeOfSorts" :key="index">
                <p >{{ sort }} </p>
            </label>
    </section>
</template>

<script>
    export default {
        name:"SelectButton",
        data(){
            return{
                typeOfSorts: ["Más reciente","Más antiguo", "Mayor nivel", "Menor nivel", ],
                visible:[],
            }
        },
        methods:{
            toggleShow(){
                if(this.visible.includes("visibilityOn")){
                    this.visible = ["visibilityOff"]
                }
                else{
                    this.visible = ["visibilityOn"]
                }
                
            },
            

        }
    }
</script>

<style  scoped>
    *{
    margin:0 0;
    }
    .orderBy{
        width:200px;
        height:40px;
        border-radius:5px;
        display:flex;
        flex-direction:row;
        align-items: center;
        border:1px solid #CCCBD6;
    }
    .orderBy:hover{
        border:1px solid black;
        cursor:pointer;
    }
    .orderBy div:nth-child(1){
        width:calc(100% - 20px);
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .orderBy div:nth-child(1) p{
        margin:0 0;
    }
    .orderBy div:nth-child(2){
        
        width:50px;
        display:flex;
        justify-content: center;
    }
    section{
        z-index:1000;
        width:200px;
        background-color:white;
        position:absolute;
        border-radius:5px;
        visibility: hidden;
    }
    section label{
        cursor:pointer;
    }
    section label p{
        margin:10px auto;
        text-align:left;
        padding-left:20px;
    }
    section label p:hover{
        color:blue;
    }
    .visibilityOn{
        visibility:visible;
    }
    .visibilityOff{
        visibility:hidden;
    }
</style>