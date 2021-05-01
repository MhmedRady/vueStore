<template>
    <div class="_topSlider">
        <b-carousel-slide 
        content-tag="div"
        :class="`c${num %2==0?2:1}`"
            img-blank img-alt="Blank image">
                <template #img>
                    <div 
                    class="backImg d-block img-fluid w-100"
                    :style="{ backgroundImage: 'url(' + require(`../../../assets/images/slider-top/${Img}`) + ')' }"
                    >
                    </div>
                </template>
                <div :class="`slider-content i${num %2==0?2:1} ${num ==1?'z0':''}`">
                        <span v-if="from">{{from}}</span>
                        <h3>{{title}}</h3>
                        <p v-if="desc">
                            <strong>
                                {{desc}}
                            </strong>
                        </p>
                        <span class="buy" v-if="buy">{{buy}}</span>
                </div>
            
        </b-carousel-slide>
    </div>
</template>

<script>
// import $ from 'jquery';
export default {
    props: ["title","Img","from","desc","buy","num"],
    
}
</script>

<style lang="scss" scoped>
      .carousel-indicators{
        display: none !important;
      }
      .carouselTop{
          .carousel-item 
            {
                .backImg{
                    height: 376px;
                    background-size: cover;
                    background-size: cover;
                    background-position: center center;
                    visibility: inherit;
                    // @media screen and(max-width: $ipad10Pro) {
                    //     height: 400px;
                    // }
                    @media screen and(max-width: $maxIpad) {
                        height: 300px;
                    }
                    @media screen and(max-width: $maxMobile) {
                        height: 264px;
                    }
                }
            }
        ._topSlider{
            .carousel-item{
                .slider-content{
                    overflow: hidden;
                    h3{
                        @include fontSize(2);
                        @include transform(translateX(100%));
                        @include transition(2,ease);
                        
                    }
                    span{
                        &:first-of-type{
                            z-index: 6;
                            white-space: nowrap;
                            font-size: 22px;
                            line-height: 22px;
                            color: rgb(73, 173, 0);
                            letter-spacing: 0px;
                            font-family: PopB;
                            visibility: inherit;
                            transition: none 0s ease 0s;
                            text-align: inherit;
                            border-width: 0px;
                            margin: 0px;
                            padding: 0px;
                            min-height: 0px;
                            min-width: 0px;
                            max-height: none;
                            max-width: none;
                            font-weight: 950;
                            position: relative;
                            @include transform(translateX(-100%));
                            @include transition(2,ease);
                        }
                        &.buy{
                            color: $Orenge;
                            font-family: PopB;
                            @include transform(translateY(100%));
                            @include transition(2,ease);
                        }
                    }
                    p{
                        position: relative;
                        overflow: hidden;
                        strong{
                            font-size: .8rem;
                            font-family: Pop;
                            font-weight: 700;
                            position: relative;
                            visibility: hidden;
                            top: -100%;
                            @include transition(2,ease);
                        }
                    }
                    &.z0{
                        h3{
                            @include transform(translateX(-100%) rotate(-90deg));
                            transform-origin: top left;
                        }
                    }
                    @media screen and (max-width: $maxMobile){
                        h3{
                            @include fontSize(1.2);
                        }
                        strong{
                            @include fontSize(.6);
                        }
                        span{
                            @include fontSize(.8);
                        }
                    }
                    
                }
                
                &.active{
                    .slider-content{
                        h3{
                            @include transform(translateX(0));
                        }
                        span{
                            &:first-of-type{
                                @include transform(translateX(0));
                            }
                            &.buy{
                                @include transform(translateY(0));
                            }
                        }
                        p{
                            strong{
                                top: 0;
                                visibility: visible;
                            }
                        }
                        &.z0{
                            @include transform(translateX(0) rotate(0));
                        }
                    }
                }
            }
        }
      }
</style>