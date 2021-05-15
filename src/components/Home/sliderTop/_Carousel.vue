<template>
    <div class="carouselTop wpb_revslider_element wpb_content_element">
        <!-- Begin Slider Area -->
            <b-carousel
                id="carousel-fade"
                class="carousel-fade"
                v-model="slide"
                :interval="4000"
                indicators
                fade
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
                
                <!-- Slides with img slot -->
            
                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <caeouselComp v-for="slide in slideData"
               :key="slide.id" :num="slide.id" :title="slide.h" :Img="slide.img" :from="slide.from" :desc="slide.desc" :buy="slide.buy"/>
              
            </b-carousel>
        <!-- Slider Area End Here -->          
    </div>
</template>

<script>
import caeouselComp from "@/components/Home/sliderTop/_carousel_Comp.vue"
import sliderJson from '../../../assets/models/Home/sliderTop/sliderTop.json'

export default {
  name: "slideTop",
    data() {
      return {
        slide: 0,
        sliding: null,
        slideData: sliderJson,
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
    components: {
      caeouselComp
    }
}
</script>
