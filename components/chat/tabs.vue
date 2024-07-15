<template>
    <div class="text-center mt-3">
        <div role="tablist" class="tabs tabs-bordered relative">
            <a @click="onTabClick(item,$event)" role="tab" class="tab z-10" :class="{ 'tab-active': item == tabActive }"
                v-for="(item, index) in tabs" :key="index">{{ item }}
            </a>
        </div>
    </div>
</template>

<script setup>
let props = defineProps(['tabs']);
let tabActive = ref('');
let emit = defineEmits(['onTabChanged'])
onMounted(() => {
    tabActive.value = props.tabs[0];
})
function onTabClick(tab,e) {
    if (tabActive.value === tab) return;
    tabActive.value = tab
    emit('onTabChanged', tab)
}
</script>

<style lang="scss" scoped>

</style>

