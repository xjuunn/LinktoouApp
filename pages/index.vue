<template>
    <div>
        <Sidebar>
            <InfoCard></InfoCard>
            <ChatSearch></ChatSearch>
            <ChatTabs :tabs="['聊天', '群组', '分类']" @onTabChanged="changeTabs"></ChatTabs>
            <ChatList>
            </ChatList>
            <input v-model="testdata" class="input">
            <button class="btn btn-primary" @click="test">test</button>
            <video autoplay ref="video"></video>
        </Sidebar>
    </div>
    <Notification></Notification>
</template>

<script setup>
new PeerManager();
onMounted(() => {
    UserInfoManager.username.value = useLocalStorage('username').value;

})
function changeTabs(tab) {
    console.log("切换tab", tab);
}
let testdata = ref('');
let video = ref(null);
async function test() {
    let {start} = useDisplayMedia();
    let stream = await start();
    PeerManager.call(testdata.value,stream)
    video.value.srcObject = stream

}


</script>

<style lang="scss" scoped></style>