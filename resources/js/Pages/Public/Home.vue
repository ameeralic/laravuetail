<template>
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
                class="my-4 text-xl md:text-4xl font-bold tracking-tight lg:text-8xl font-poppins tracking-wider transition-all ease-in delay-150 duration-300"
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
                            class="my-4 text-xs md:text-base hidden md:block bg-[#ff2d20] border-2 border-[#ff2d20] rounded-full px-6 py-2 font-poppins text-white hover:bg-white hover:text-[#ff2d20]"
                        >
                            Visit Laravel Official site
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
                class="text-center text-xl md:text-4xl font-bold tracking-tight lg:text-8xl font-poppins tracking-wider transition-all ease-in delay-150 duration-300"
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
                            class="my-4 text-xs md:text-base hidden md:block bg-[#41b883] border-2 border-[#41b883] rounded-full px-6 py-2 font-poppins text-white hover:bg-white hover:text-[#41b883]"
                        >
                            Visit Vue Official site
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
                class="bg-no-repeat bg-left-top md:h-24 md:w-24 bg-contain h-10 w-10"
                :style="
                    tailwindShow && tailMouseover
                        ? `background-image: url('/images/tailwind.svg');`
                        : ''
                "
            ></div>
            <p
                class="text-xl md:text-4xl font-bold tracking-tight lg:text-8xl font-poppins tracking-wider transition-all ease-in delay-150 duration-300"
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
                            class="my-4 text-xs md:text-base hidden md:block bg-[#38bdf8] border-2 border-[#38bdf8] rounded-full px-6 py-2 font-poppins text-white hover:bg-white hover:text-[#38bdf8]"
                        >
                            Visit Vue Official site
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
                class="text-xs md:text-base text-white font-poppins text-center my-4 bg-gray-600/75 p-2 rounded-full px-4 shadow-lg"
            >
                LaraVueTail is a library of Open source web applications built
                with Laravel, Vue and Tailwind CSS.
            </p>
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
                />
            </svg>
        </div>
    </div>
    <!-- </div> -->
    <div class="h-screen py-24 max-w-6xl mx-auto">
        <div class="w-fit mx-auto">
            <h1
                class="p-1 font-poppins font-bold text-xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d20] from-33% via-[#41b883] via-66% to-[#38bdf8] to-90%"
            >
                Projects
            </h1>
        </div>
        <div class="grid md:grid col-span-2">
            <div
                class="max-w-sm bg-white border border-zinc-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-700 font-poppins"
            >
                <a href="#">
                    <img
                        class="rounded-t-lg"
                        src="https://images.pexels.com/photos/5076510/pexels-photo-5076510.jpeg"
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
                    <p
                        class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm"
                    >
                        <strong>Built with :</strong><br/> Laravel, VueJs, TailwindCSS, InertiaJS.<br/>
                        <strong>Description :</strong><br/> This project is an ecommerce website build with VILT Stack<br/>
                    </p>
                    <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-zinc-800 bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800"
                    >
                        Read more
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
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>
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
        };
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
                setTimeout(() => (this.vueMouseover = false), 10000);
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
