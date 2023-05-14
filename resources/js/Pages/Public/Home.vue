<template>
    <div>
        <div class="flex h-screen">
            <div class="bg-[#ff2d20] w-1/3"></div>
            <div class="bg-[#41b883] w-1/3"></div>
            <div class="bg-[#38bdf8] w-1/3"></div>
        </div>
        <div class="absolute top-0">
            <div class="flex h-screen w-screen">
                <div
                    class="bg-[#ff2d20] w-5/12 grid content-center place-items-center justify-items-end transition-all ease-in delay-150 duration-300 p-4 md:p-8 cursor-pointer"
                    @click="laravelMouseover = !laravelMouseover"
                    :class="{
                        'w-full bg-white border-r-2 border-[#ff2d20]':
                            laravelMouseover,
                    }"
                >
                    <div
                        class="bg-no-repeat bg-left-top md:h-24 md:w-24 bg-contain h-10 w-10"
                        :style="
                            laravelShow && laravelMouseover
                                ? `background-image: url('/images/laravel.svg');`
                                : ''
                        "
                    ></div>

                    <p
                        class="my-4 text-xl md:text-4xl font-bold tracking-tight lg:text-8xl font-poppins tracking-wider transition-all ease-in delay-150 duration-300"
                        :class="
                            laravelMouseover ? 'text-[#ff2d20]' : 'text-white'
                        "
                    >
                        <span>Lara</span>
                        <Transition name="slide-fade">
                            <span v-if="laravelShow && laravelMouseover"
                                >vel</span
                            >
                        </Transition>
                    </p>
                    <div class="h-10">
                        <Transition name="slide-fade">
                            <div
                                v-if="laravelShow && laravelMouseover"
                                class="grid justify-items-end"
                            >
                                <button
                                    class="my-4 text-xs hidden md:block bg-[#ff2d20] border-2 border-[#ff2d20] rounded-full px-6 py-2 font-poppins text-white hover:bg-white hover:text-[#ff2d20]"
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
                        'w-full bg-white border-x-2 border-[#41b883]':
                            vueMouseover,
                    }"
                >
                    <div
                        class="bg-no-repeat bg-left-top md:h-24 md:w-24 bg-contain h-10 w-10"
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
                                class="my-4 text-xs hidden md:block bg-[#41b883] border-2 border-[#41b883] rounded-full px-6 py-2 font-poppins text-white hover:bg-white hover:text-[#41b883]"
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
                        'w-full bg-white border-l-2 border-[#38bdf8]':
                            tailMouseover,
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
                        <!-- <Transition name="fade"> -->
                        <Transition name="slide-fade">
                            <span v-if="tailwindShow && tailMouseover"
                                >wind</span
                            >
                        </Transition>
                        <!-- </Transition> -->
                    </p>
                </div>
            </div>
            <div class="absolute top-1/2 w-screen mt-36 md:mt-56">
                <div
                    class="grid justify-items-center place-content-center px-20"
                >
                    <p
                        class="text-white font-poppins text-center"
                        v-if="
                            !laravelMouseover && !vueMouseover && !tailMouseover
                        "
                    >
                        LaraVueTail is a library of Open source web applications
                        built with Laravel, Vue and Tailwind CSS.
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-white"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <h1
                class="text-md md:text-4xl text-gray-500 font-poppins my-4 text-center"
            >
                Projects
            </h1>
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
