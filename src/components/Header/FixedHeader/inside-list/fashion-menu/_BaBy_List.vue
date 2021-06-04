<template>
    <ul class="nav row inside-menu m-0 mb-20 pt-0 pb-20" style="width:100%">
        
        <div class="col-md-6 columns p-0">
            <div class="row">

            <div class="col-md-3 columns p-0">
                
                <h4>boys</h4>

                <ul class="nav link-list m-0 d-block pos-s">
                    <li class="inside-link">
                        <router-link to="/">Shirts</router-link>
                    </li> 
                    <li class="inside-link">
                        <router-link to="/">polo</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">t-shirts</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">jeans & pants</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">shotrs</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">swimwear</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">underwear</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">jeans & coats</router-link>
                    </li>
                </ul>
            </div>

            <div class="col-md-3 columns p-0">
                
                <h4>girls</h4>

                <ul class="nav link-list m-0 d-block pos-s">
                    <li class="inside-link">
                        <router-link to="/">tops</router-link>
                    </li> 
                    <li class="inside-link">
                        <router-link to="/">dresses</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">pants</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">underwear</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">sleepwear</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">shoes</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">hats & caps</router-link>
                    </li>

                </ul>
            </div>

            <div class="col-md-3 columns p-0">
                <h4>baby</h4>

                <ul class="nav link-list m-0 d-block pos-s">
                    <li class="inside-link">
                        <router-link to="/">bodysuits & onesies</router-link>
                    </li> 
                    <li class="inside-link">
                        <router-link to="/">baby sets</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">sleepwear</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">underwear</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">tops</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">pans</router-link>
                    </li>

                </ul>
            </div>

            <div class="col-md-3 columns p-0">
                
                <h4>Top Brands</h4>

                <ul class="nav link-list m-0 d-block pos-s">
                    <li class="inside-link">
                        <router-link to="/">lumax</router-link>
                    </li> 
                    <li class="inside-link">
                        <router-link to="/">cottonil</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">ravin</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">defacto</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">adidas</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">casio</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">town team</router-link>
                    </li>
                    <li class="inside-link">
                        <router-link to="/">new born</router-link>
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <div class="col-md-6">
        <div class="row">

            <div class="col-md-6 columns p-0">
                <router-link to="/">
                    <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/JB-sets-en.jpg')" alt="">
                </router-link>
            </div>

            <div class="col-md-6 columns p-0">
                <router-link to="/">
                    <img class="lazy-load" v-lazy="require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/baby-clothing-en.jpg')" alt="">
                </router-link>
            </div>

        </div>
    </div>

    </ul>
</template>
