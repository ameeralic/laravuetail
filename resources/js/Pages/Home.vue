<template>
    <div>
    <div class="flex h-screen">
        <div class="bg-[#ff2d20] w-1/3">
        </div>
        <div class="bg-[#41b883] w-1/3">
        </div>
        <div class="bg-[#38bdf8] w-1/3">
        </div>
    </div>
    <div class="absolute top-0 flex h-screen w-screen">
        <div class="bg-[#ff2d20] w-5/12 flex justify-end items-center transition-all ease-in-out delay-150 duration-300 hover:w-full p-2 md:p-8 tou" @mouseenter="laravelShow=true" @mouseleave="laravelShow=false">
            <p class="text-4xl font-bold tracking-tight text-white lg:text-8xl font-poppins tracking-wider">
                    <span>Lara</span>
                <!-- <Transition name="fade"> -->
                    <span v-if="laravelShow">vel</span>
                <!-- </Transition> -->
            </p>
        </div>

        <div class="bg-[#41b883] w-2/12 min-w-fit flex justify-center items-center transition-all ease-in-out delay-150 duration-300 hover:w-full p-2 md:p-8" @mouseenter="vueShow=true" @mouseleave="vueShow=false">
            <p class="text-4xl font-bold tracking-tight text-white lg:text-8xl font-poppins tracking-wider">
                <span>Vue</span>
                <!-- <Transition name="fade"> -->
                    <span v-if="vueShow">.JS</span>
                <!-- </Transition> -->
            </p>
        </div>
        <div class="bg-[#38bdf8] w-5/12 flex justify-start items-center  transition-all ease-in-out delay-150 duration-300 hover:w-full p-2 md:p-8" @mouseenter="tailwindShow=true" @mouseleave="tailwindShow=false">
            <p class="text-4xl font-bold tracking-tight text-white lg:text-8xl font-poppins tracking-wider">
                <span>Tail</span>
                <!-- <Transition name="fade"> -->
                    <span v-if="tailwindShow">wind</span>
                <!-- </Transition> -->
            </p>
        </div>
        </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            laravelShow:false,
            vueShow:false,
            tailwindShow:false,
        }
    },
}
</script>
<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;

    
  }
  25% {
    opacity: 0;

  }
  50% {

    opacity: 0.75;

  }
  100% {

    opacity: 1;


  }
}
</style>