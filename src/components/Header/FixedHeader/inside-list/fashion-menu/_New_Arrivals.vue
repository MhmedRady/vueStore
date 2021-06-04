<template>

    <ul class="nav row inside-menu m-0 mb-20 pt-0 pb-20" style="width:100%">
        
        <div class="col-md-12 columns p-0">
            <div class="row">

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/Apparel-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/Footwear-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/Watches-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/Sports-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/Bags-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/Jewelry-en.jpg')" alt="">
                    </router-link>
                </div>

            </div>
        </div>
    </ul>
        
</template>

<style lang="scss" scoped>
    .inside-menu{
        left: 0 !important;
    }
</style>
