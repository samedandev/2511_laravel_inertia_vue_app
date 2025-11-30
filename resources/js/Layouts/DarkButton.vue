<template>
    <div>
        <h1>This is an about page</h1>
        <button @click="toggleDarkMode">Toggle</button>
    </div>
</template>

<script>
export default {
    methods: {
        toggleDarkMode() {
            this.$emit("dark-switch");
        },
    },
};
</script>
