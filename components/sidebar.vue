<template>
    <div class="sidebar h-screen bg-base-100 flex">
        <div class="sidebar_content flex-1">
            test
        </div>
        <div class="resizebar h-screen flex items-center">
            <div class="box bg-neutral-400"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.sidebar {
    width: 300px;
    border-right: 1px solid #77777720;

    .resizebar {
        // background-color: red;
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
    }

    .resizebar:hover .box {
        width: 4px;
        height: 200px;
        opacity: 0.3;

    }
}
</style>