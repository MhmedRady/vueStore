<template>

    <ul class="nav row inside-menu m-0 mb-20 pt-0 pb-20" style="width:100%">
        
        <div class="col-md-12 columns p-0">
            <div class="row">

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/supermarket-menu/Dairy-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/supermarket-menu/Water-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/supermarket-menu/Canned_food-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/supermarket-menu/Disposable-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/supermarket-menu/Air_freshner-en.jpg')" alt="">
                    </router-link>
                </div>

                <div class="col-md-2 columns p-0">
                    <router-link to="/">
                        <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/supermarket-menu/PnG-en.jpg')" alt="">
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
