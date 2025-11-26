<template>
    <MainLayout>
        <div>Index</div>
        <Link href="/hello">Show Hello Page </Link>
        <div>The message is {{ message }}.</div>
    </MainLayout>
</template>

<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import MainLayout from "../../Layouts/MainLayout.vue";

defineProps(["message"]);
</script>
