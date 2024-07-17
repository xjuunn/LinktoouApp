<template>
    <dialog id="modal_dialog" class="modal modal-bottom sm:modal-middle" :class="{ 'modal-open': show }">
        <div class="modal-box" @click.stop>
            <form v-if="close" method="dialog">
                <button @click="handleCloseClick"
                    class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 v-if="title" class="text-lg font-bold">{{ title }}</h3>
            <slot></slot>
            <div class="flex justify-end space-x-2">
                <slot name="footer"></slot>
            </div>
        </div>
        <form v-if="close" method="dialog" class="modal-backdrop">
            <button @click="handleCloseClick">close</button>
        </form>
    </dialog>
</template>

<script setup>
let props = defineProps(['show', 'close', 'title']);
let emit = defineEmits(['update:show']);
function handleCloseClick() {
    emit('update:show', false);
}
</script>

<style lang="scss" scoped></style>