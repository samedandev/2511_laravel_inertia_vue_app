<template>
    <div>Index</div>
    <Link href="/hello">Show Hello Page </Link>
</template>

<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
const counter = ref(0);
setInterval(() => counter.value++);
</script>
