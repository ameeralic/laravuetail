<template>
    <Head>
  <title>Home</title>
  <meta name="description" content="LaraVueTail is a library of open source web applications built with Laravel, vue and Tailwind CSS">
</Head>
    <div class="bg-zinc-800">
        <div class="flex h-screen max-w-screen">
            <div
                class="bg-[#ff2d20] w-5/12 grid content-center place-items-center justify-items-end transition-all ease-in delay-150 duration-300 p-4 md:p-8 cursor-pointer"
                @click="laravelMouseover = !laravelMouseover"
                :class="{
                    'w-full bg-white': laravelMouseover,
                }"
            >
                <div
                    class="bg-no-repeat bg-left-top md:h-20 md:w-20 bg-contain h-10 w-10"
                    :style="
                        laravelShow && laravelMouseover
                            ? `background-image: url('/images/laravel.svg');`
                            : ''
                    "
                ></div>

                <p
                    class="my-1 md:my-4 text-xl md:text-4xl font-bold tracking-tight lg:text-4xl font-poppins tracking-wider transition-all ease-in delay-150 duration-300"
                    :class="laravelMouseover ? 'text-[#ff2d20]' : 'text-white'"
                >
                    <span>Lara</span>
                    <Transition name="slide-fade">
                        <span v-if="laravelShow && laravelMouseover">vel</span>
                    </Transition>
                </p>
                <div class="h-10">
                    <Transition name="slide-fade">
                        <div
                            v-if="laravelShow && laravelMouseover"
                            class="grid justify-items-end"
                        >
                            <button
                                class="my-1 md:my-4 text-xs md:text-sm bg-[#ff2d20] border-2 border-[#ff2d20] rounded-full px-4 py-1 font-poppins text-white hover:bg-white hover:text-[#ff2d20]"
                            >
                                Visit Laravel
                            </button>
                        </div>
                    </Transition>
                </div>
            </div>

            <div
                class="bg-[#41b883] md:w-2/12 min-w-fit grid content-center justify-items-center transition-all ease-in delay-150 duration-300 p-4 md:p-8 cursor-pointer"
                @click="vueMouseover = !vueMouseover"
                :class="{
                    'w-full bg-white': vueMouseover,
                }"
            >
                <div
                    class="bg-no-repeat bg-left-top md:h-20 md:w-20 bg-contain h-10 w-10"
                    :style="
                        vueShow && vueMouseover
                            ? `background-image: url('/images/vue.svg');`
                            : ''
                    "
                ></div>
                <p
                    class="text-center text-xl md:text-4xl font-bold tracking-tight lg:text-4xl font-poppins tracking-wider transition-all ease-in delay-150 duration-300"
                    :class="vueMouseover ? 'text-[#41b883]' : 'text-white'"
                >
                    <span>Vue</span>
                    <Transition name="slide-fade">
                        <span v-if="vueShow && vueMouseover">.JS</span>
                    </Transition>
                </p>
                <div class="h-10">
                    <Transition name="slide-fade">
                        <div v-if="vueShow && vueMouseover" class="">
                            <button
                                class="my-1 md:my-4 text-xs md:text-sm bg-[#41b883] border-2 border-[#41b883] rounded-full px-4 py-1 font-poppins text-white hover:bg-white hover:text-[#41b883]"
                            >
                                Visit Vue.js
                            </button>
                        </div>
                    </Transition>
                </div>
            </div>
            <div
                class="bg-[#38bdf8] w-5/12 grid content-center justify-items-start transition-all ease-in delay-150 duration-300 p-4 md:p-8 cursor-pointer"
                @click="tailMouseover = !tailMouseover"
                :class="{
                    'w-full bg-white': tailMouseover,
                }"
            >
                <div
                    class="bg-no-repeat bg-left-top md:h-20 md:w-20 bg-contain h-10 w-10"
                    :style="
                        tailwindShow && tailMouseover
                            ? `background-image: url('/images/tailwind.svg');`
                            : ''
                    "
                ></div>
                <p
                    class="text-xl md:text-4xl font-bold tracking-tight lg:text-4xl font-poppins tracking-wider transition-all ease-in delay-150 duration-300"
                    :class="tailMouseover ? 'text-[#38bdf8]' : 'text-white'"
                >
                    <span>Tail</span>
                    <Transition name="slide-fade">
                        <span v-if="tailwindShow && tailMouseover">wind</span>
                    </Transition>
                </p>
                <div class="h-10">
                    <Transition name="slide-fade">
                        <div v-if="tailwindShow && tailMouseover" class="">
                            <button
                                class="my-1 md:my-4 text-xs md:text-sm bg-[#38bdf8] border-2 border-[#38bdf8] rounded-full px-4 py-1 font-poppins text-white hover:bg-white hover:text-[#38bdf8]"
                            >
                                Visit Tailwind
                            </button>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <div class="absolute top-1/2 mt-36 md:mt-56 w-full">
            <div
                class="mx-auto max-w-screen grid justify-items-center content-center px-7"
            >
                <p
                    class="text-xs md:text-base font-poppins text-center my-4 p-2 rounded md:rounded-lg px-4 shadow-lg"
                    :class="
                        laravelMouseover || vueMouseover || tailMouseover
                            ? 'bg-gray-600/75 text-white'
                            : 'text-white shadow-none'
                    "
                >
                    <string>LaraVueTail</string><br />
                    is a library of Open source web applications built with
                    <br />Laravel, Vue and Tailwind CSS.
                </p>
                <a
                    href="#projects"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-8 h-8 text-gray-600 bg-white rounded-full p-2 shadow-lg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                        /></svg
                ></a>
            </div>
        </div>
        <!-- </div> -->
        <div class="min-h-screen py-10 md:py-24 md:max-w-6xl mx-auto" id="projects">
            <div class="w-fit mx-auto">
                <h1
                    class="p-1 font-poppins font-bold text-xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d20] from-33% via-[#41b883] via-66% to-[#38bdf8] to-90%"
                >
                    Projects
                </h1>
            </div>
            <div class="grid md:grid-cols-2 my-10 md:my-24 mx-5 justify-items-center">
                <div
                    class="max-w-sm border rounded-lg shadow bg-zinc-900 border-zinc-700 font-poppins"
                >
                    <a href="#">
                        <img
                            class="rounded-t-lg"
                            src="https://images.pexels.com/photos/5076511/pexels-photo-5076511.jpeg"
                            alt=""
                        />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5
                                class="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white"
                            >
                                E-Commerce Website
                            </h5>
                        </a>
                        <p class="text-gray-300 text-sm mb-1 font-normal">
                            Built with :
                        </p>
                        <div class="grid grid-cols-2 space-y-1 mb-2">
                            <div
                                class="flex justify-start text-gray-300 gap-2 text-sm items-center"
                            >
                                <img
                                    src="https://asset.brandfetch.io/ide68-31CH/idhaVMa0Af.svg"
                                    alt=""
                                    class="h-4 w-auto"
                                />
                                <p>Laravel</p>
                            </div>
                            <div
                                class="flex justify-start text-gray-300 gap-2 text-sm items-center"
                            >
                                <img
                                    src="https://asset.brandfetch.io/idT-7aLCAj/idYSAxBM8n.svg"
                                    alt=""
                                    class="h-3 w-auto"
                                />
                                <p>Vue.js</p>
                            </div>
                            <div
                                class="flex justify-start text-gray-300 gap-2 text-sm items-center"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                                    alt=""
                                    class="h-4 w-auto"
                                />
                                <p>TailwindCSS</p>
                            </div>
                            <div
                                class="flex justify-start text-gray-300 gap-2 text-sm items-center"
                            >
                                <img
                                    src="https://asset.brandfetch.io/idGjvMIqVt/idd9HKmA9r.jpeg"
                                    alt=""
                                    class="h-4 w-auto"
                                />
                                <p>Inertia.js</p>
                            </div>
                        </div>

                        <p class="text-gray-300 text-sm mb-1 font-normal">
                            About :
                        </p>
                        <p class="text-gray-400 text-xs md:text-sm mb-4 font-thin">
                            An E-Commerce website build in VILT(Vue, Inertia,
                            Laravel, Tailwind) Stack.
                            <br />
                            Payment options includes Stripe, Cash On
                            Delivery(COD) and Order on whatsApp(Sending a
                            message to shop admin's Whatsapp with product/cart
                            details)
                            <!-- <br/> -->
                            <!-- Admin Controls: CRUD Orders, CRUD Categories, CRUD Products, CRUD Users, Edit Contents of Home/About/Contact Pages, Create and Edit Custom Pages -->
                        </p>
                        <div class="flex gap-2">
                            <Link
                                href="/projects/ecommerce"
                                class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-zinc-800 bg-white rounded-lg hover:text-white hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                Docs
                                <svg
                                    aria-hidden="true"
                                    class="w-4 h-4 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                            <!-- <a
                                href="#"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-700 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                Visit Demo
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 ml-2 -mr-1"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                    />
                                </svg>
                            </a> -->
                            <a
                                href="https://github.com/LaraVueTail/ecommerce-laravel-vue-tailwind-inertia-VILT-Stack"
                                target="_blank"

                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-700 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                Github
                                <i
                                    class="fa-brands ml-2 fa-github text-white"
                                ></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<script setup>
import vue from "@heroicons/vue";
import Footer from "../../Shared/Footer.vue";
</script>
<script>
export default {
    data() {
        return {
            laravelShow: false,
            laravelMouseover: false,
            vueShow: false,
            vueMouseover: false,
            tailwindShow: false,
            tailMouseover: false,
            count:0
        };
    },
    mounted(){
        setInterval(this.enableRandom,5000)
    },
    methods:{
        enableRandom(){
            this.count++
            var x = this.count%3
            switch (x) {
                case 0:
                    this.laravelMouseover = !this.laravelMouseover
                    break;
                case 1:
                    this.vueMouseover = !this.vueMouseover
                    break;
                case 2:
                    this.tailMouseover = !this.vueMouseover
                    break;
                default:
                    break;
            }
        }
    },
    watch: {
        laravelMouseover(newValue, oldValue) {
            if (newValue === true) {
                this.vueMouseover = false;
                this.tailMouseover = false;
                setTimeout(() => (this.laravelShow = true), 500);
                setTimeout(() => (this.laravelMouseover = false), 3000);
            } else {
                this.laravelShow = false;
            }
        },
        vueMouseover(newValue, oldValue) {
            if (newValue === true) {
                this.laravelMouseover = false;
                this.tailMouseover = false;
                setTimeout(() => (this.vueShow = true), 500);
                setTimeout(() => (this.vueMouseover = false), 3000);
            } else {
                this.vueShow = false;
            }
        },
        tailMouseover(newValue, oldValue) {
            if (newValue === true) {
                this.laravelMouseover = false;
                this.vueMouseover = false;
                setTimeout(() => (this.tailwindShow = true), 500);
                setTimeout(() => (this.tailMouseover = false), 3000);
            } else {
                this.tailwindShow = false;
            }
        },
    },
};
</script>
<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(40px);
    opacity: 0;
}
</style>
