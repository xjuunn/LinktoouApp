<template>
    <div>
        <Sidebar>
            <UserInfoCardVue></UserInfoCardVue>
            <ChatTabs :tabs="['聊天','群组','频道']" @onTabChanged="changeTabs"></ChatTabs>
            <ChatChatlist></ChatChatlist>
        </Sidebar>
    </div>
</template>

<script setup>
function changeTabs(tab){
    console.log("切换tab",tab);
}

</script>

<style lang="scss" scoped></style>