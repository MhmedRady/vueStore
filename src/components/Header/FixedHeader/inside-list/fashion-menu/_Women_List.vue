<template>
  <ul class="nav row inside-menu m-0 mb-20 pt-0 pb-20" style="width: 100%">
    <div class="col-md-8 columns p-0">
      <div class="row">
        <div class="col-md-2 columns p-0">
          <h4>Clothing</h4>

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

        <div class="col-md-2 columns p-0">
          <h4>footwear</h4>

          <ul class="nav link-list m-0 d-block pos-s">
            <li class="inside-link">
              <router-link to="/">athletic</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">active</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">sneakers</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">boots</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">loafers & Moccasian</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">Slippers</router-link>
            </li>
          </ul>

          <h4>bags</h4>

          <ul class="nav link-list m-0 d-block pos-s">
            <li class="inside-link">
              <router-link to="/">backpacks</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">wallets</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">messenger bags</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-2 columns p-0">
          <h4>Watches</h4>

          <ul class="nav link-list m-0 d-block pos-s">
            <li class="inside-link">
              <router-link to="/">casual wathches</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">dress wathches</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">sport wathches</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">leather wathches</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">stainless steel wathches</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-2 columns p-0">
          <h4>Men's Accessories</h4>

          <ul class="nav link-list m-0 d-block pos-s">
            <li class="inside-link">
              <router-link to="/">belts</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">hats & caps</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">socks</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">cufflinks</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-2 columns p-0">
          <h4>Eyewear</h4>

          <ul class="nav link-list m-0 d-block pos-s">
            <li class="inside-link">
              <router-link to="/">sunglasses</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">aviator</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">wayfarer</router-link>
            </li>
            <li class="inside-link">
              <router-link to="/">optical frames</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-2 columns p-0">
          <h4>Top Brands</h4>

          <ul class="nav link-list m-0 d-block pos-s">
            <li class="inside-link">
              <router-link to="/">andora</router-link>
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

    <div class="col-md-4 columns p-0">
      <div class="row">
        <div class="col-md-6 columns p-0">
          <router-link to="/">
            <img
              class="lazy-load"
              v-lazy="
                require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/Carina-en.jpg')
              "
              alt=""
            />
          </router-link>
        </div>

        <div class="col-md-6 columns p-0">
          <router-link to="/">
            <img
              class="lazy-load"
              v-lazy="
                require('../../../../../assets/images/Header/Fixed-Header/fashion-menu/bags-en.jpg')
              "
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
  </ul>
</template>
