<template>
    <div>
        <p>Escribe algo feliz que te haya pasado hoy:</p>
        <textarea  class="msg" ></textarea>
    </div>
</template>

<script>
export default {
  name: 'MessageInput',
}
</script>

<style scoped>
.msg{
    width: 100%;
    max-width: 100%;
}
</style>