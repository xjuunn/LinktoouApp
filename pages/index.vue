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
import { TextMessage} from '~/types/chat/Message';


let { peer ,sendById} = usePeer();
onMounted(() => {
    UserInfoManager.username.value = useLocalStorage('username').value;
    peer.on('open', (id) => {
        UserInfoManager.id.value = id;
        UserInfoManager.isOnline.value = true;
        UserInfoManager.username.value = UserInfoManager.username.value ?? UserInfoManager.id.value.substring(0, 6)
    })
})
function changeTabs(tab) {
    console.log("切换tab", tab);
}
let testdata = ref('');
function test() {
    sendById(UserManager.userList.value[0].id,new TextMessage(testdata.value,'发送的信息'));
}

</script>

<style lang="scss" scoped></style>