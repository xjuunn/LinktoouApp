<template>
    <div class="toast card text-neutral-content m-0 me-1 p-0">
        <div v-for="(item, index) in NotificationManager.notificationShowList.value" :key="index"
            class="flex flex-row card-body text-left w-96 p-3 mb-2 bg-neutral rounded-btn">
            <div class="flex-1 m-3">
                <div class="card-title text-lg">
                    <svg v-if="item.icon" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                        viewBox="0 0 24 24">
                        <path class="fill-base-content" :d="item.icon" />
                    </svg>
                    <span v-if="item.title">{{ item.title }}</span>
                </div>
                <p class="text-wrap indent-8 text-md"> {{ item.message }} </p>
                <div class="card-actions justify-end">
                    <button v-if="item.okHandler" @click="item.okHandler.handler" class="btn btn-primary btn-sm">{{
                        item.okHandler.text }}</button>
                    <button v-if="item.cancelHandler" @click="item.cancelHandler.handler"
                        class="btn btn-ghost btn-sm">{{ item.cancelHandler.text }}</button>
                </div>
            </div>
            <div>
                <svg @click="close(item)" class="hover:bg-base-100 rounded-full" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path class="fill-base-content"
                        d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNotification } from '../../composables/useNotification';
let { NotificationManager } = useNotification();
function close(notification){
    console.log(notification);
    
}
</script>

<style lang="scss" scoped></style>