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
import { AppNotificationBuilder } from '../utils/AppNotificationBuilder';


// let { peer, connect, sendById } = usePeer();
// let { NotificationManager, createNotification } = useNotification();

// peer.on('open', (id) => {
//     UserInfoManager.id.value = id;
//     UserInfoManager.isOnline.value = true;
//     UserInfoManager.username.value = UserInfoManager.id.value.substring(0, 6)
// })
onMounted(() => {

})
function changeTabs(tab) {
    console.log("切换tab", tab);
}
function test() {
    createNotification(
        new AppNotificationBuilder()
            .setTitle('标题')
            .setIcon('M8 14h8v-.55q0-1.1-1.1-1.775T12 11t-2.9.675T8 13.45zm4-4q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6z')
            .setMessage("内容内容内容内容")
            .setLevel(NotificationLevel.Important)
            .setOkHandler('确认', () => {
                console.log('确认');
            })
            .setCancelHandler('取消', () => {
                console.log('取消');
            })
            .build())
}

</script>

<style lang="scss" scoped></style>