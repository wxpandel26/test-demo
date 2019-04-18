<template>
    <div>
        <span>count</span>
        <span>ttt</span>
        <button @click="handlerClick">count++</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count : 0
        }
    },
    methods :{
        handlerClick() {
            this.count++;
            this.$emit("change",this.count);
        }
    }
}
</script>

<style>

</style>
