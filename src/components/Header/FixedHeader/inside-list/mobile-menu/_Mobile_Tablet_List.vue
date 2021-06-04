<template>
    <ul class="nav row inside-menu no-Top m-0 mb-20 pt-10 pt-0 pb-10" style="width:100%">
            
                <div class="col-md-5 columns p-10">
                    <div class="row">

                        <div class="col-md-4 columns p-0">
                        
                            <h4>shop by brand</h4>

                            <ul class="nav link-list m-0 p-0 d-block pos-s">
                                <li class="inside-link">
                                    <router-link to="/">apple</router-link>
                                </li> 
                                <li class="inside-link">
                                    <router-link to="/">Samsung</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">sony</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">huawel</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">nokia</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">honor</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">oppo</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">infinix</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">xiaomi</router-link>
                                </li>
                            </ul>

                        </div>

                        <div class="col-md-4 columns p-0">
                        
                            <h4>Shop by Price</h4>

                            <ul class="nav link-list m-0 p-0 d-block pos-s">
                                <li class="inside-link">
                                    <router-link to="/">below 1,000 $</router-link>
                                </li> 
                                <li class="inside-link">
                                    <router-link to="/">1,000-2,000 $</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">2,000-3,000 $</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">3,000-5,000 $</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">5,000-6,000 $</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">6,000-7,000 $</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">8,000-9,000 $</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">9,000-10,000 $</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">10,000 $ & above</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/"><h4>shop all mobile</h4></router-link>
                                </li>

                            </ul>

                        </div>

                        <div class="col-md-4 columns p-0">
                            <h4>Tablets</h4>

                            <ul class="nav link-list m-0 p-0 d-block pos-s">
                                <li class="inside-link">
                                    <router-link to="/">7-7.9 inch</router-link>
                                </li> 
                                <li class="inside-link">
                                    <router-link to="/">8-8.9 inch</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">9-9.9 inch</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">10 inch & above</router-link>
                                </li>
                            </ul>

                            <h4>Shop by brands</h4>

                            <ul class="nav link-list m-0 p-0 d-block pos-s">
                                <li class="inside-link">
                                    <router-link to="/">apple</router-link>
                                </li> 
                                <li class="inside-link">
                                    <router-link to="/">Samsung</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">sony</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">huawel</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/">nokia</router-link>
                                </li>
                                <li class="inside-link">
                                    <router-link to="/"><h4>shop all Tablets</h4></router-link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="col-md-7">

                    <div class="row">

                        <div class="col-md-4 columns p-0">
                            <router-link to="/">
                                <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/mobile-menu/Samsung-S21-shopnow-en.png')" alt="">
                            </router-link>
                        </div>

                        <div class="col-md-4 columns p-0">
                            <router-link to="/">
                                <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/mobile-menu/Feature-Phone.jpg')" alt="">
                            </router-link>
                        </div>

                        <div class="col-md-4 columns p-0">
                            <router-link to="/">
                                <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/mobile-menu/Tablets.jpg')" alt="">
                            </router-link>
                        </div>
                    </div>
                </div>
                
        </ul>
</template>

<style lang="scss" scoped>
    .inside-menu{
        background-color: #3A3843;
        h4{
            color: $f;
        }
        h4,.inside-link{
            text-align: $textAlign;
        }
    }
</style>