### Udemy course

> https://www.udemy.com/course/master-laravel-6-with-vuejs-fullstack-development/learn/lecture/43171754#overview

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
