<template>
<div class="happySelector">
    <label v-for="(item, index) in happy_levels" v-bind:key="index" class="checkBoxSection">
        <p>{{item.face}}</p>
        <input v-on:click="happy_level_selected"  name="happy_level" type="radio"/>
    </label>
</div>
</template>

<script>
export default {
  name: 'HappySelector',
  props:["happy_levels"],
}
</script>

<style scoped>
.happySelector{
display:flex;
justify-content:space-around;
}
.checkBoxSection p{
    margin:0px;
}
.checkBoxSection input{
    margin:0px;
}
.checkBoxSection{
    margin-top:15px;
    font-size:35px;
    width:30px;
    display:flex;
    flex-direction: column;
    
    align-items: center;


}
</style>