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
            <button @click='test' class="btn btn-primary">test</button>
        </Sidebar>
    </div>
    <Notification></Notification>
</template>

<script setup>
import { useNotification } from '../composables/useNotification';
import AppNotification, { NotificationLevel } from '../types/AppNotification';


let { peer, connect, sendById } = usePeer();
let {NotificationManager,createNotification} = useNotification();

peer.on('open', (id) => {
    UserInfoManager.id.value = id;
    UserInfoManager.isOnline.value = true;
    UserInfoManager.username.value = UserInfoManager.id.value.substring(0, 6)
})
onMounted(() => {

})
function changeTabs(tab) {
    console.log("切换tab", tab);
}
function test(){
    createNotification(new AppNotification('通知源','标题','通知内容通知内容通知内容通知内容通知内容通知内容通知内容',NotificationLevel.General))
}

</script>

<style lang="scss" scoped></style>