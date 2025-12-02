<template>
    <!-- <span class="dark:text-white"> {{ isDark ? "Dark" : "Light" }} Mode </span> -->
    <header
        class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full"
    >
        <div class="grid grid-cols-12">
            <div class="container mx-auto col-span-11 w-full">
                <nav class="p-4 flex items-center justify-between">
                    <div class="text-lg font-medium">
                        <Link :href="route('listing.index')">Listings</Link>
                    </div>

                    <div
                        class="text-xl text-indigo-600 dark:text-indigo-300 font-bold text-center"
                    >
                        <Link :href="route('listing.index')">LaraVUE</Link>
                    </div>

                    <div>
                        <Link
                            :href="route('listing.create')"
                            class="btn-primary"
                            >+ New Listing</Link
                        >
                    </div>

                    <!-- <div id="app" :class="{ dark: darkmode }">
                    <p>Darkmode: {{ darkmode }}</p>
                    <DarkButton @dark-switch="onDarkSwitch" />
                </div> -->
                </nav>
            </div>

            <!-- Dark Mode -->
            <div class="pt-2 dark:bg-gray-800 col-span-1 pr-0">
                <div class="h-12 w-12 float-right">
                    <button
                        @click="toggleDark()"
                        class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            class="fill-violet-700 block dark:hidden"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                            ></path>
                        </svg>
                        <svg
                            class="fill-yellow-500 hidden dark:block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- END Dark Mode -->
        </div>
    </header>

    <main class="container mx-auto p-4">
        <!-- v-if="flashSuccess" -->
        <div
            v-if="flashSuccess"
            class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2"
        >
            {{ flashSuccess }}
        </div>

        <slot>Default</slot>
    </main>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";
import { useDark, useToggle } from "@vueuse/core";
// import DarkButton from "./components/DarkButton.vue";

const page = usePage();
const isDark = useDark();
const toggleDark = useToggle(isDark);

const flashSuccess = computed(() => page.props.flash.success);
</script>
