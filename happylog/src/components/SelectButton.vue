<template>
    <div class="containerSelect" v-click-outside-element="closeList">
        <div class="orderBy" v-on:click="toggleShow">
            <div>
                <p v-if="selected_value">{{selected_value}}</p>
                <p v-else>{{firstValue}}</p>
            </div>
            <div>
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </div>

        </div>
        <section  :class="visible" >
                <label v-for="(sort,index) in some_options" :key="index" @click = "clickOption(index,typeOfOption)" >
                    <p >{{ sort.name }} </p>
                </label>
        </section>
    </div>
</template>

<script>
    export default {
        name:"SelectButton",
        props:["options","firstValue"],
        emits: ['clickOption'],
        data(){
            
            return{
                visible:"",
                selected_value:"",
                
            }
        },
        computed:{
            some_options(){
                return Object.values(this.options)[0];
            },
            typeOfOption(){
                return Object.keys(this.options)[0];
            }
        },
        methods:{
            toggleShow(){
                if(this.visible==="visibilityOn"){
                    this.visible = "visibilityOff"
                }
                else{
                    this.visible = "visibilityOn"
                }
                
            },
            clickOption(index,typeOfOption){
                this.$emit("clickOption", index,typeOfOption )
                this.selected_value = this.some_options[index].name;
                this.visible="visibilityOff"
            },
            closeList(){
                this.visible = "visibilityOff"
            }
        }
    }
</script>

<style  scoped>
    *{
    margin:0 0;
    }
    .containerSelect{
        position:relative;
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
        top:42px;
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