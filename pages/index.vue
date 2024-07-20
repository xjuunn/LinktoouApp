<template>
    <div>
        <Sidebar>
            <InfoCard></InfoCard>
            <ChatSearch></ChatSearch>
            <ChatTabs :tabs="['聊天', '群组', '分类']" @onTabChanged="changeTabs"></ChatTabs>
            <ChatList>
            </ChatList>
            <input v-model="testdata" class="input">
            <button @click="test" class="btn btn-primary">test</button>
            <video autoplay ref="video"></video>
        </Sidebar>
    </div>
    <Notification></Notification>
</template>

<script setup>
import { TextMessage } from '~/types/chat/Message';

new PeerManager();
onMounted(() => {
    UserInfoManager.username.value = useLocalStorage('username').value;

})
function changeTabs(tab) {
    console.log("切换tab", tab);
}
let testdata = ref('');
let video = ref(null);
function test() {
        PeerManager.send(testdata.value,new TextMessage(testdata.value,'testaaaaa'))
}


</script>

<style lang="scss" scoped></style>