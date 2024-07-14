<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>
let { setLocale } = useI18n();
onMounted(() => {
  setLocale(navigator.language.split('-')[0]);  // 根据浏览器自动设置语言
})
</script>
<style>
@font-face {
  font-family: deyi;
  src: url(./public/fonts/deyi.ttf);
}
@font-face {
  font-family: pixel7px;
  src: url(./public/fonts/pixel7px.ttf);
}
.text-deyi{
  font-family:deyi;
}
.text-pixel7px{
  font-family: pixel7px;
}

* {
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* Internet Explorer/Edge */
}
img {
  pointer-events: none;
}
</style>