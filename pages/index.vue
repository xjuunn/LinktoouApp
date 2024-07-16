<template>
    <div>
        <Sidebar>
            <InfoCard></InfoCard>
            <label class="input input-ghost input-sm focus-within:border-0 flex items-center gap-2 me-1 ms-1">
                <input type="text" class="grow" placeholder="搜索" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="h-4 w-4 opacity-70">
                    <path fill-rule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd" />
                </svg>
            </label>
            <ChatTabs :tabs="['聊天', '群组', '频道']" @onTabChanged="changeTabs"></ChatTabs>
            <ChatList>
            </ChatList>
            <input v-model="data" type="text" class="input input-primary" />
            <button @click='test' class="btn btn-primary">连接</button>
            <button @click='send' class="btn btn-primary">发消息</button>

        </Sidebar>
    </div>
    <Notification></Notification>
</template>

<script setup>
let { peer, connect, sendById } = usePeer();
onMounted(() => {
    peer.on('open', (id) => {
        UserInfoManager.id.value = id;
        UserInfoManager.isOnline.value = true;
        UserInfoManager.username.value = UserInfoManager.id.value.substring(0, 6)
    })
})
function changeTabs(tab) {
    console.log("切换tab", tab);
}
let data = ref('');
function test() {
    connect(data.value);
}
function send() {
    sendById(data.value, '你好')
}

</script>

<style lang="scss" scoped></style>