<template>
    <div class="chatlist pt-1">
        <div v-for="(item, index) in userList" :key="index"
            class="hover:bg-base-200 p-4 transition-colors flex rounded-btn cursor-pointer">
            <div class="avatar h-full">
                <div class="text-center leading-10 ring-gray-600 mt-1 ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-1">
                    <img v-if="item.avatar_url" :src="item.avatar_url" />
                    <span v-else class="text-xl inline-block pt-1 opacity-80">
                        {{ item.name[item.name.length - 1] }}
                    </span>
                </div>
            </div>
            <div class="flex-1 ps-5 w-1">
                <b class="w-full inline-block overflow-hidden text-ellipsis text-nowrap">{{ item.name }}</b>
                <div class="w-full opacity-70 overflow-hidden text-ellipsis text-sm h-5">
                    {{ item.lastMessage }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
let userList = UserManager.getUserList();
onMounted(() => {


})
</script>

<style lang="scss" scoped></style>