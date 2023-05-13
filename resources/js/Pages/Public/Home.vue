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
        <div class="bg-[#ff2d20] w-5/12 flex justify-end items-center transition-all ease-in-out delay-150 duration-300 hover:w-full p-2 md:p-8 tou" @mouseover="laravelMouseover=true" @mouseleave="laravelMouseover=false">
            <p class="text-4xl font-bold tracking-tight text-white lg:text-8xl font-poppins tracking-wider">
                    <span>Lara</span>
                <!-- <Transition name="fade"> -->
                  <Transition name="slide-fade">
                    <span v-if="laravelShow && laravelMouseover">vel</span>
                  </Transition>
                    <!-- <span v-if="laravelShow">vel</span> -->
                <!-- </Transition> -->
            </p>
        </div>

        <div class="bg-[#41b883] w-2/12 min-w-fit flex justify-center items-center transition-all ease-in-out delay-150 duration-300 hover:w-full p-2 md:p-8" @mouseover="vueMouseover=true" @mouseleave="vueMouseover=false">
            <p class="text-4xl font-bold tracking-tight text-white lg:text-8xl font-poppins tracking-wider">
                <span>Vue</span>
                <!-- <Transition name="fade"> -->
                  <Transition name="slide-fade">
                    <span v-if="vueShow && vueMouseover">.JS</span>
                  </Transition>
                <!-- </Transition> -->
            </p>
        </div>
        <div class="bg-[#38bdf8] w-5/12 flex justify-start items-center  transition-all ease-in-out delay-150 duration-300 hover:w-full p-2 md:p-8" @mouseover="tailMouseover=true" @mouseleave="tailMouseover=false">
            <p class="text-4xl font-bold tracking-tight text-white lg:text-8xl font-poppins tracking-wider">
                <span>Tail</span>
                <!-- <Transition name="fade"> -->
                  <Transition name="slide-fade">
                    <span v-if="tailwindShow && tailMouseover">wind</span>
                  </Transition>
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
            laravelMouseover:false,
            vueShow:false,
            vueMouseover:false,
            tailwindShow:false,
            tailMouseover:false
        }
    },
    watch:{
      laravelMouseover(newValue,oldValue){
        if(newValue === true){
            setTimeout(()=>this.laravelShow = true, 500)
        } else {
          this.laravelShow = false
        }
      },
      vueMouseover(newValue,oldValue){
        if(newValue === true){
            setTimeout(()=>this.vueShow = true, 500)
        } else {
          this.vueShow = false
        }
      },
      tailMouseover(newValue,oldValue){
        if(newValue === true){
            setTimeout(()=>this.tailwindShow = true, 500)
        } else {
          this.tailwindShow = false
        }
      },
    }
}
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
}</style>