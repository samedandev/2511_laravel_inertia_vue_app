<template>
    <Link href="/listing">Listings</Link>&nbsp;
    <Link href="/listing/create">New Listing</Link>
    <br />&nbsp;
    <!-- <div>
    The page with time <b>{{ timer }}</b>.
  </div> -->

    <!-- <div v-if="page.props.flash.success" class="success">
        {{ page.props.flash.success }}
    </div> -->
    <div v-if="flashSuccess" class="success">
        {{ flashSuccess }}
    </div>
    <!-- <div>{{ y }}</div> -->

    <slot>Default</slot>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

// const x = ref(0);
// const y = computed(() => x.value * 2);

// page.props.flash.success
const page = usePage();

const flashSuccess = computed(() => page.props.flash.success);
</script>

<style scoped>
.success {
    background-color: green;
    color: white;
}
</style>
