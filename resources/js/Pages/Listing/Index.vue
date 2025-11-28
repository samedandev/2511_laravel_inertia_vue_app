<template>
    <div v-for="listing in listings" :key="listing.id">
        <div>
            <!-- <Link :href="`/listing/${listing.id}`"> -->
            <!-- <Link :href="route('listing.show', listing.id)"> -->
            <Link :href="route('listing.show', { listing: listing.id })">
                <ListingAddress :listing="listing" />
            </Link>
        </div>
        <div>
            <!-- <Link :href="`/listing/${listing.id}/edit`"> -->
            <Link :href="route('listing.edit', listing.id)"> Edit</Link>
        </div>

        <div>
            <!-- <Link :href="`/listing/${listing.id}`" method="DELETE" as="button"> -->
            <Link
                :href="route('listing.destroy', listing.id)"
                method="DELETE"
                as="button"
            >
                Delete</Link
            >
        </div>
    </div>
</template>

<script setup>
import ListingAddress from "@/Components/ListingAddress.vue";
import { Link } from "@inertiajs/vue3";

defineProps({
    listings: Array,
});
</script>
