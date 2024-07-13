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
