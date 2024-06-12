<template>
    <label class="swap swap-rotate">
        <input type="checkbox" v-model="isDark" />
        <Icon name="ic:round-dark-mode" class="swap-off"/>
        <Icon name="ic:round-light-mode" class="swap-on"/>
    </label>
</template>

<script setup lang='ts'>
const systemIsDark = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
const isDark = ref(systemIsDark)

// define the dark theme from your tailwindcss themes (see tailwind.config.js/ts)
const darkTheme = 'dim'
const lightTheme = 'bumblebee'

// get stored mode, if none, get system preference and store it
onMounted(()=>{
    const storedMode = localStorage.getItem('dark')
    if(storedMode) {
        isDark.value = storedMode==='true' ? true: false
    } else {
        localStorage.setItem('dark', systemIsDark ? 'true':'false') 
    }
    document.documentElement.setAttribute('data-theme', isDark.value ? darkTheme : lightTheme);
})

// watch for changes in toggle button
watch(isDark, ()=>{
    document.documentElement.setAttribute('data-theme', isDark.value ? darkTheme : lightTheme);
    localStorage.setItem('dark', isDark.value ? 'true': 'false')
})
</script>

<style></style>