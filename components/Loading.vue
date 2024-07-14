<template>
    <Teleport to="body">
        <div v-show="isLoading" class="w-screen h-screen fixed bg-base-100 text-pixel7px text-2xl">
            <div class="h-screen flex justify-center items-center self-center flex-col">
                {{ info }}
            </div>
        </div>
    </Teleport>
</template>

<script setup>
const { $anime } = useNuxtApp();
let title = ref('正在加载');
let props = defineProps(['info','isLoading'])

onMounted(() => {
    
});



</script>

<style lang="scss" scoped>

</style>
