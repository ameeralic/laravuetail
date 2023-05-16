<template>
        <Head>
  <title>Ecommerce Website</title>
  <meta name="description" content="LaraVueTail is a library of open source web applications built with Laravel, vue and Tailwind CSS. This is an ecommerce website built with VILT Stack">
</Head>
    <div class="bg-zinc-800 min-h-screen flex">
        <div class="w-10 md:w-48 flex">
            <div class="bg-[#ff2d20] min-h-screen w-1/3"></div>
            <div class="bg-[#41b883] min-h-screen w-1/3"></div>
            <div class="bg-[#38bdf8] min-h-screen w-1/3"></div>
        </div>
        <div class="relative pl-5 md:pl-10 py-10 max-w-3xl">
            <div class="min-h-48">
                <p class="text-xl md:text-2xl text-zinc-100 font-poppins mb-5">
                    E-Commerce Website
                </p>
                <div class="mb-10">
                    <p
                        class="text-zinc-100 mb-1 font-medium font-poppins text-sm"
                    >
                        Built with :
                    </p>
                    <div
                        class="grid grid-cols-2 space-y-1 mb-2 font-poppins text-sm"
                    >
                        <div
                            class="flex justify-start text-zinc-100 gap-2 items-center"
                        >
                            <img
                                src="https://asset.brandfetch.io/ide68-31CH/idhaVMa0Af.svg"
                                alt=""
                                class="h-4 w-auto"
                            />
                            <p>Laravel</p>
                        </div>
                        <div
                            class="flex justify-start text-zinc-100 gap-2 items-center"
                        >
                            <img
                                src="https://asset.brandfetch.io/idT-7aLCAj/idYSAxBM8n.svg"
                                alt=""
                                class="h-3 w-auto"
                            />
                            <p>Vue.js</p>
                        </div>
                        <div
                            class="flex justify-start text-zinc-100 gap-2 items-center"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                                alt=""
                                class="h-4 w-auto"
                            />
                            <p>TailwindCSS</p>
                        </div>
                        <div
                            class="flex justify-start text-zinc-100 gap-2 items-center"
                        >
                            <img
                                src="https://asset.brandfetch.io/idGjvMIqVt/idd9HKmA9r.jpeg"
                                alt=""
                                class="h-4 w-auto"
                            />
                            <p>Inertia.js</p>
                        </div>
                    </div>
                </div>

                <p class="text-zinc-100 mb-1 font-medium font-poppins text-sm">
                    About Project :
                </p>

                <p class="text-sm text-zinc-100 font-poppins font-thin">
                    An E-Commerce website build in VILT(Vue, Inertia, Laravel,
                    Tailwind) Stack. Payment options includes Stripe, Cash On
                    Delivery(COD) and Order on whatsApp(Sending a message to
                    shop admin's Whatsapp with product/cart details)
                </p>

                <p
                    class="text-zinc-100 mb-1 font-medium font-poppins text-sm my-10"
                >
                    Features :
                </p>
                <ul
                    class="list-disc text-sm text-zinc-100 font-poppins font-thin pl-5"
                >
                    <li>User Accounts (Sign in/Register/Customer dashboard)</li>
                    <li>Admin dashboard and controls</li>
                    <ul class="list-disc pl-5">
                        <li>CRUD Users</li>
                        <li>CRUD Orders</li>
                        <li>CRUD Products</li>
                        <li>CRUD Categories</li>
                        <li>CRUD Custom Pages</li>
                        <li>
                            Edit Site-Name/Logo/Footer/Social Links/Payment
                            modes(stripe secrete key, Whatsapp Number) etc
                        </li>
                    </ul>
                    <li>Cart functionality</li>
                    <li>Payment modes:</li>
                    <ul class="list-disc pl-5">
                        <li>
                            Stripe International payment gateway(with webhooks)
                        </li>
                        <li>Cash on Delivery(COD)</li>
                        <li>
                            (New) Order on Whatsapp - Sends a autogenerated
                            Whatsapp message with product/cart details to shop
                            admins whatsapp number.<br />ex:<br /><span
                                class="italic"
                            >
                                "Hi.. I would like to buy, <br />Product name:
                                T-shirt<br />Quantity: 1<br />etc .."</span
                            >
                        </li>
                        <!-- ... -->
                    </ul>
                </ul>
                <p
                    class="text-zinc-100 mb-1 font-medium font-poppins text-sm my-10"
                >
                    Download:
                </p>
                <a
                    href="https://github.com/LaraVueTail/ecommerce-laravel-vue-tailwind-inertia-VILT-Stack"
                    target="_blank"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md shadow-black my-1"
                >
                    Github Repository
                    <i class="fa-brands ml-2 fa-github text-white"></i>
                </a>
                <p
                    class="text-zinc-100 mb-1 font-medium font-poppins text-sm my-10"
                >
                    Screenshots:
                </p>

                <p
                    class="text-zinc-100 mb-1 font-medium font-poppins text-sm my-10"
                >
                    How Install and Work with the project:
                </p>

                <ol
                    class="list-decimal text-sm text-zinc-100 font-poppins font-thin pl-5 space-y-2 mr-2"
                >
                    <li>
                        Clone or Download the git repository to your destined folder.
                    </li>
                    <li>
                        Make sure you have <a href="https://getcomposer.org/" class="underline hover:text-blue-500" target="_blank">Composer</a>, <a href="https://nodejs.org/en" class="underline hover:text-blue-500" target="_blank">Node(with NPM)</a> installed on your system. if not, download and install the latest version od these package managers.
                    </li>
                    <li>
                        Open the project directory, And then open Terminal (If you're using VS code use the terminal within):
                        <p class="mt-3">Install php dependencies including Laravel and Inertia(server side)</p>
                        <p class="bg-black py-2 px-4 rounded-lg my-2">composer install</p>
                        <p class="mt-3">Install node dependencies including Vue.js and Inertia(client side - vue3) with</p>
                        <p class="bg-black py-2 px-4 rounded-lg my-2">npm install</p>
                    </li>
                    <li>
                        Good, Now you have all frameworks and libraries installed!.
                    </li>
                    <li>
                        Now create a copy of '.env.example' file to '.env'.
                    </li>
                    <li>
                        Under Database section provide database credentials like 'DB_CONNECTION','DB_DATABASE'.. etc.
                        <p class="mt-3">If you want to use sqlite (if 'mysql' not installed) 'DB_CONNECTION=sqlite'</p>
                        <!-- <p class="bg-black py-2 px-4 rounded-lg my-2">DB_CONNECTION=sqlite</p> -->
                        <p class="my-3">Create a file named 'database.sqlite' in 'app/database' folder.</p>

                    </li>
                    <li>
                        Fill fields like 'STRIPE_SECRETE_KEY', 'STRIPE_WEBHOOK_KEY', 'CURRENCY', 'WHATSAPP_NUMBER' etc.
                    </li>
                    <li>
                        If database connections are complete.
                        <p class="mt-3">Migrate tables and dummy data with</p>
                        <p class="bg-black py-2 px-4 rounded-lg my-2">php artisan migrate:fresh --seed</p>
                        <p class="mt-3">This will drop all previous tables and start migrating fresh with new dummy data</p>
                    </li>
                    <li>
                        If migration complete.
                        <p class="mt-3">Generate app key with</p>
                        <p class="bg-black py-2 px-4 rounded-lg my-2">php artisan key:generate</p>
                    </li>
                    <li>
                        Now everything is set!.
                        <p class="mt-3">Run Laravel server with</p>
                        <p class="bg-black py-2 px-4 rounded-lg my-2">php artisan serve</p>
                        <p class="mt-3">Run node with</p>
                        <p class="bg-black py-2 px-4 rounded-lg my-2">npm run dev</p>
                        <p class="mt-3">Now your project is running in the 'APP_URL you set on '.env' file</p>

                    </li>
                    <!-- ... -->
                </ol>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<script setup>
import Footer from '../../Shared/Footer.vue';

</script>
