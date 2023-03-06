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

<style>

</style>