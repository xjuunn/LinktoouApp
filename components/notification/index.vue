<template>
    <Teleport to="body">
        <div class="toast">
            <div class="alert" v-for="(item, index) in NotificationManager.notificationShowList.value" :key="index">
                <span class="">{{ item.id }}</span>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { useNotification } from '../../composables/useNotification';
let { NotificationManager } = useNotification();
</script>

<style lang="scss" scoped></style>