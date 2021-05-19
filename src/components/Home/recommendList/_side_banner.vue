<template>
    <div class="side_banner mt-2r mb-2r">
        <SlickCarousel
        :touchMove="true"
        :autoplay="true"
        :dots="true"
        :arrows="false"
        :swipeToSlide="false"
        >
            <div class="item image col p-0 d-flex justify-content-center slick-slide wpb_single_image">
                <div class="wpb_wrapper">
                    <img src="../../../assets/images/Home/recommended-list/slide-banner/slide-banner1.jpg" alt="">
                </div>
            </div>
            <div class="item image col p-0 slick-slide d-flex justify-content-center wpb_single_image">
                <div class="wpb_wrapper">
                    <img src="../../../assets/images/Home/recommended-list/slide-banner/slide-banner2.jpg" alt="">
                </div>
            </div>
            <div class="item image col p-0 slick-slide d-flex justify-content-center wpb_single_image">
                <div class="wpb_wrapper">
                    <img src="../../../assets/images/Home/recommended-list/slide-banner/slide-banner3.jpg" alt="">
                </div>
            </div>
        </SlickCarousel>
    </div>
</template>
