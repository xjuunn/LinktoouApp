<template>
    <div>
        <button class="btn" @click="test">test</button>
        {{ peerId }} <br>
        <input type="text" v-model="inputPeerId" /> <br>
        <button class="btn btn-primary" @click="btnConnect">连接</button>
        <button class="btn btn-primary" @click="logUser">查看用户</button>
        <button class="btn btn-primary" @click="send">发送消息</button>
    </div>
</template>

<script setup>
let { peer, connect, sendById } = usePeer();
let peerId = ref('');
let inputPeerId = ref('');
let userManager = new UserManager();
peer.on('open', function (id) {
    peerId.value = id;
})
function btnConnect() {
    connect(inputPeerId.value)
}
function test() {
    console.log(peer.id);
}
function logUser() {
    console.log(userManager.findUserById(inputPeerId.value));
}
function send(){
    sendById(inputPeerId.value,"test");
}
</script>

<style lang="scss" scoped></style>