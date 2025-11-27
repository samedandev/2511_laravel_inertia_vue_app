<template>
    <Link href="/">Main Page </Link>
    <Link href="/hello">Show Page </Link>
    <!-- <div>
    The page with time <b>{{ timer }}</b>.
  </div> -->

    <div v-if="page.props.flash.success" class="success">
        {{ page.props.flash.success }}
    </div>

    <slot>Default</slot>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/vue3";

// page.props.flash.success
const page = usePage();
</script>

<style scoped>
.success {
    background-color: green;
    color: white;
}
</style>
