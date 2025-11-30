<template>
    <div>
        <span class="font-bold">{{ listing.beds }}</span
        >&nbsp;beds
        <span class="text-gray-400">|</span>
        <span class="font-bold">&nbsp;{{ listing.baths }}</span
        >&nbsp;baths
        <span class="text-gray-400">|</span>
        <span class="font-bold">&nbsp;{{ listing.area }}</span
        >&nbsp;m²
    </div>
</template>

<script setup>
defineProps({
    listing: Object,
});
</script>
