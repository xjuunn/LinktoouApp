<template>
    <div class="userInfoCard m-1 rounded-lg hover:bg-base-300 transition-color collapse collapse-arrow focus:border-base-content focus:border-2"
        tabindex="0">
        <div class="flex collapse-title p-3 m-0">
            <div class="avatar skeleton" :class="UserInfoManager.isOnline.value ? 'online' : 'offline'">
                <div class="w-10 h-10 rounded-full">
                    <img v-show="UserInfoManager.avatar_url.value" :src="UserInfoManager.avatar_url.value" />
                </div>
            </div>
            <div class="flex-1 m-2 ps-2">
                {{ UserInfoManager.name }}
            </div>
        </div>
        <div class="collapse-content">
            <div class=" text-sm">
                <div class="flex">
                    <b>ID: </b>
                    <a @click="copy(UserInfoManager.id.value)"
                        class="link link-hover overflow-hidden ms-2 me-2 text-neutral-400 text-sm flex-1">复制</a>
                    <b>RSA key: </b>
                    <a @click="copy(UserInfoManager.public_rsa_key)"
                        class="link link-hover overflow-hidden ms-2 me-2 text-neutral-400 text-sm flex-1">复制</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let clipboard = useClipboard()
onBeforeMount(() => {
})
onMounted(() => {
    UserInfoManager.id.value = "sdflas;dhfpaoehjfoj;shgoiuwpeofijdfasdfe";
    UserInfoManager.name.value = "Junhsiun";
    UserInfoManager.avatar_url.value = 'https://pbs.twimg.com/profile_images/1770095002783535104/QNTnQj0B_400x400.jpg'
    UserInfoManager.public_rsa_key = "tsetasdfserw";
    UserInfoManager.contact.value = {
        phone: '1234567890',
        email: '123123@gmail.com',
        qq: '123123123',
        wxid: '_x123123',
        telegram: '@123123'
    }
})

function copy(msg) {
    clipboard.copy(msg);
}

</script>

<style lang="scss" scoped></style>