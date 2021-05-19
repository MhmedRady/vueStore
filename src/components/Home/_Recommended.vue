<template>
    <div class="recommenList">
        
        <div class="row vc_row pt-5r wpb_row row-flud mb-5r row-has-fill vc_custom">
            
                <!-- /*** RECOMMEND TITLE & LIST  ***/ -->
                <recommend-List />
            
            <div class="recomm-side col-xl-2 col-lg-3 col-md-3 col-sm-4 wpb_column column_container">
                <div class="column-inner">
                    <div class="wpb_wrapper">
                        <our-Brands />

                        <side-Banner />
                    </div>
                </div>
                
            </div>

        </div>
    </div>
</template>

<script>
import OurBrands from '@/components/Home/recommendList/_our_brands'
import RecommendList from '@/components/Home/recommendList/_recommened_Content'
import SideBanner from '@/components/Home/recommendList/_side_banner'

export default {
    components:{OurBrands,RecommendList,SideBanner}
}
</script>


