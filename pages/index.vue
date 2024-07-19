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
        </Sidebar>
    </div>
    <Notification></Notification>
</template>

<script setup>
import { FileMessage, TextMessage } from '~/types/chat/Message';
new PeerManager();
onMounted(() => {
    UserInfoManager.username.value = useLocalStorage('username').value;
    


})
function changeTabs(tab) {
    console.log("切换tab", tab);
}
let testdata = ref('');
function test() {
    PeerManager.sendById(testdata.value,new TextMessage(testdata.value,"test发送消息"))
    
}

</script>

<style lang="scss" scoped></style>