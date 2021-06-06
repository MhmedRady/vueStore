<template>
    <div class="footer_mid row wpb_row row-fluid pt-28 pb-29 mb-0 text-xs-center footer_center custom-container">
        
        <!-- Payments accept  -->

        <div class="col-sm-6 col-lg-4 col-md-6 wpb_column column_container">
            <div class="wpb_single_image row wpb_content_element text-xs-center mb-0 mb-xs-20 d-inline-block payments vc_align_left">
                <h3 class="wpb_heading title d-inline-block">
                    <span class="badge">payment accept :</span>
                </h3>

                <img class="back-no" v-lazy="require(`../../assets/images/Footer/payments.png`)" alt="">
            </div>
        </div>

        <!-- FOLLOW US  -->
    
        <div class="col-sm-6 col-lg-4 col-md-6 wpb_column column_container p-0">
            <div class="wpb_single_image wpb_content_element text-xs-center mb-0 mb-xs-20 d-inline-block payments vc_align_left">
                <h3 class="wpb_heading title d-inline-block">
                    <span class="badge">payment accept :</span>
                </h3>

                <div class="block_content d-inline-block">
                    <ul class="list-inline mb-0 d-flex">
                        <li class="social_facebook "><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                        <li class="social_twitter  "><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        <li class="social_youtube  "><a href="" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
                        <li class="social_google  "><a href="" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                        <li class="social_dribbble  "><a href="" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Payments accept  -->

        <div class="col-sm-6 col-lg-4 col-md-6 wpb_column column_container">
            <div class="wpb_single_image wpb_content_element text-xs-center mb-0 mb-xs-20 d-block payments justify-content-center d-flex">
                <img class="back-no" v-lazy="require(`../../assets/images/Footer/payments-right.png`)" alt="">
            </div>
        </div>

    </div>

</template>
