<template>
    <div>
        <Loading :isLoading :info="loadinfo"></Loading>
        <button class="btn btn-primary" @click="()=>{isLoading = true}">loading</button>
    </div>
</template>

<script setup>
let isLoading = ref(false);
let loadinfo = ref('');
onMounted(()=>{

})

</script>

<style lang="scss" scoped>

</style>