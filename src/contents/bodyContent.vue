<template>
  <main id="body">
    <HeaderBar />
    <router-view class="container"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <script src="../src/layout/js/jQuery.min.js"></script> -->
    <!-- <Widgets/> -->
  </main>
</template>



<script>
// import $ from 'jquery'

import HeaderBar from "@/components/Header/Header.vue";
// import Widgets from './Widgets.vue';

export default {
  name: "BodyContent",
  components: {
    HeaderBar,
    // Widgets,
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: Oxy;
    src:url("../layout/myFont/Oxygen-Regular.ttf")
    format('truetype');
  }
  @font-face {
    font-family: OxyB;
    src:url("../layout/myFont/Oxygen-Bold.ttf")
    format('truetype');
  }

  @font-face {
    font-family: Pop;
    src:url("../layout/myFont/Poppins-Medium.ttf")
    format('truetype');
  }
  @font-face {
    font-family: PopB;
    src:url("../layout/myFont/Poppins-Bold.ttf")
    format('truetype');
  }
      
#body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: Oxy;
  >.container{
    @extend %queryCONTAINER;
  }
  .image-cover,
  .image-back{
    background-image: url("../assets/svg/loading.gif");
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
