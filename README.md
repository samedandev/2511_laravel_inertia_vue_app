### Udemy course

> https://www.udemy.com/course/master-laravel-6-with-vuejs-fullstack-development/learn/lecture/43171754#overview

# Source Git

> https://github.com/piotr-jura-udemy/master-laravel-vue-fullstack

# This Git

> https://github.com/samedandev/2511_laravel_inertia_vue_app

### Install Laravel

> composer create-project "laravel/laravel:^10.0" example-app

> php artisan serve

> npm run dev

### Vite

> https://vite.dev/

# vite.config.js, package.json

## Add Vue plugin

> npm install --save-dev @vitejs/plugin-vue
> https://laravel.com/docs/10.x/vite#main-content

### Inertia Laravel

> composer require inertiajs/inertia-laravel

### Laravel 10 Inertia

> /NO/ bootstrap/app.php
> /YES/ app/Http/Kernel.php
> \App\Http\Middleware\HandleInertiaRequests::class,

### Inertia FrontEnd files

> /app/resources/js/Index/Index.vue

# Laravel route

> /routes/web.php -> return inertia('Index/Index');

### Routes & Controller

# New Controller

> php artisan make:controller IndexController

### Layouts

> /resources/js/Layouts/MainLayout.vue -> <slot></slot>

### Persistent Layouts

> Show.vue, Index.vue

```
<script>
import MainLayout from "../../Layouts/MainLayout.vue";

export default {
    layout: MainLayout,
};
</script>
```

### Default Layouts

> /resources/js/app.js

```
resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        const page = await pages[`./Pages/${name}.vue`];
        // load default layout if other doesn't exist
        page.default.layout = page.default.layout || MainLayout;

        return page;
    }
```

### Check code for errors

> package.json -> npm run fix:eslint

### DebugBar

> composer require barryvdh/laravel-debugbar --dev

> .env -> APP_DEBUG=true

# IDE Helper

> https://github.com/barryvdh/laravel-ide-helper
> composer require barryvdh/laravel-ide-helper --dev

# new \_ide_helper.php File

> php artisan ide-helper:generate

> ![DebugBar](https://github.com/samedandev/2511_laravel_inertia_vue_app/blob/main/_printscreens/01.jpg)

### DATABASE

# Model + Migration

> php artisan make:model Listing -m

> php artisan migrate

# Add columns to Migration

> php artisan make:migration add_fields_to_listings_table

# Check status of Migrations

> php artisan migrate:status

# Rollback migration

> php artisan migrate:rollback

### FACTORIES data

> php artisan make:factory ListingFactory

# ListingFactory.php

> 'beds' => fake()->numberBetween(1, 7)

# Faker

> DatabaseSeeder.php ->
> php artisan db:seed

### Delete Database

> php artisan migrate:refresh

### Delete AND Seed Database

> php artisan migrate:refresh --seed

### DATABASE Autoload

> composer dumpautoload

### Tinker

> php artisan tinker

# exemple Query

> Listing::where('beds', '>', 4)->where('area', '>', 200)->get()

> Listing::where('beds', '>=', 4)->where('area', '>', 200)->orderBy('price', 'desc')->first()

### Fillable data

> Listing.php -> protected $fillable = ['beds', 'baths', 'area', 'city', 'code', 'street', 'street_nr', 'price'];

# tinker test

```
Listing:: create([
  'beds' => 2, 'baths' => 2, 'area' => 100, 'city' => 'North', 'street' => 'Tinker st', 'street_nr' => 20, 'code' => 'TS', 'price' => 200_000
])
```

### ListingController

> php artisan make:controller --resource ListingController

# Available routes

> web.php -> Route::resource('listing', ListingController::class)->only('index', 'show');

> ![Routes](https://github.com/samedandev/2511_laravel_inertia_vue_app/blob/main/_printscreens/02.jpg)

## Listings vues

> /resources/js/Pages/Listing/ Index.vue + Show.vue

### Listings for loop

```
<template>
    <div v-for="listing in listings" :key="listing.id">
        <Link :href="`/listing/${listing.id}`">
            {{ listing.street }} No {{ listing.street_nr }}, {{ listing.city }},
            {{ listing.price }}
        </Link>
    </div>
</template>
```

### Add new Listing Form

# Form template

> /resources/js/Pages/Listing/Create.vue

# ListingController return page

> public function create()

# ListingController save form info

> public function store(Request $request)

### Middleware / SHARE Data across app

> /app/Http/Middleware/HandleInertiaRequest.php

```
public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'flash' => [
                'success' => $request->session()->get('success')
            ]
        ];
    }
```

# Message shared from controller

> ListingController.php -> store() ... with('success', 'xyz')

> ![Success](https://github.com/samedandev/2511_laravel_inertia_vue_app/blob/main/_printscreens/03.jpg)

### Computed properties Vue

> https://vuejs.org/guide/essentials/computed

> MainLayout.vue -> const flashSuccess = computed(() => page.props.flash.success);

### Laravel Form validation

# Merge returned form data with errors

> ListingController -> store(.. $request->validate([...]))

# FrontEnd

> Create.vue -> <div v-if="form.errors.beds">{{ form.errors.beds }}</div>

### Add/EDIT Listing form

# edit Form template

> resources/js/Pages/Layout/Edit.vue

# delete Button

> resources/js/Pages/Layout/Index.vue

```
<div>
            <Link :href="`/listing/${listing.id}`" method="DELETE" as="button"
                >Delete</Link
            >
        </div>
```

### ZIGGY

> composer require tightenco/ziggy

# Links FrontEnd to vendor folder

> vite.config.js

```
resolve: {
        alias: {
            ziggy: path.resolve("vendor/tightenco/ziggy/dist/vue.es.js"),
        },
    },
```

> app.blade.php -> @routes in head

### Taillwind Css

> https://v3.tailwindcss.com/docs/guides/laravel

> npm i -d tailwindcss postcss autoprefixer
> npm install tailwindcss @tailwindcss/vite --legacy-peer-deps
> npx tailwindcss init -p

### Talwind Dark Mode

> https://vueuse.org/core/useDark/#usedark

> ![DarkMode](https://github.com/samedandev/2511_laravel_inertia_vue_app/blob/main/_printscreens/04.jpg)
