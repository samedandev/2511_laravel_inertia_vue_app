<template>
    <span>
        {{ listing.street }} No {{ listing.street_nr }}, {{ listing.city }},
    </span>
</template>

<script setup>
defineProps({
    listing: Object,
});
</script>
