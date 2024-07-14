<template>
    <div ref="sidebar" class="sidebar h-screen bg-base-100 flex">
        <div class="sidebar_content flex-1">
            <slot></slot>
        </div>
        <div class="resizebar h-screen flex items-center">
            <div class="box bg-neutral-400" :class="{ 'resizeing': resizeing }" @mousedown="() => { resizeing = true }">
            </div>
        </div>
    </div>
</template>

<script setup>

onMounted(() => {
    sidebarResizeHandler()



})

//#region 侧边栏拖动改变宽度
let resizeing = ref(false);
let sidebar = ref(null);
function sidebarResizeHandler() {
    document.addEventListener('mouseup', () => {
        resizeing.value = false;
    })

    document.addEventListener('mousemove', (e) => {
        if (!resizeing.value) return;
        let width = e.x;
        if (width <= 270) width = 270;
        if (width >= 400) width = 400;
        sidebar.value.style.width = width + 4 + 'px';
    })
}
//#endregion 
</script>

<style lang="scss" scoped>
.sidebar {
    width: 300px;
    border-right: 1px solid #77777720;

    .resizebar {
        width: 6px;

        .box {
            width: 4px;
            height: 0px;
            transition: .2s;
            transition-delay: .4s;
            margin: 1px;
            border-radius: 2px;
            cursor: col-resize;
            opacity: 0;
        }

        .resizeing {
            width: 4px;
            height: 200px;
            opacity: 0.3;
            scale: 1.2;
            transition-delay: 0s;

        }

    }



    .resizebar:hover .box {
        width: 4px;
        height: 200px;
        opacity: 0.3;
    }




}
</style>