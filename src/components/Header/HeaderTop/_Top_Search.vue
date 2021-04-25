<template>
  <div class="form-control p-0 border-0 bg-transparent _desktop_advancsearch">
    <div class="_search_content">
      <form action="" method="get">
        <div class="input-group">
          <div class="input-group-btn nov_category_tree hidden-sm-down">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              value=""
              aria-expanded="false"
            >
              <span>all categories</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="selected">
                <a @click="dropSelctor" class="badge all-category dropdown-item"
                  >All Categories</a
                >
              </li>
              <li>
                <a
                  @click="dropSelctor"
                  class="main-category badge dropdown-item"
                  >electronic</a
                >
              </li>
              <li>
                <a
                  @click="dropSelctor"
                  class="parent-category badge dropdown-item"
                >
                  - Smartphone</a
                >
              </li>
              <li>
                <a
                  @click="dropSelctor"
                  :data-id="1"
                  class="badge dropdown-item"
                  href="#"
                  >-- iPhone</a
                >
              </li>
              <li>
                <a
                  @click="dropSelctor"
                  :data-id="2"
                  class="badge dropdown-item"
                  href="#"
                  >-- samsung</a
                >
              </li>
              <li>
                <a
                  @click="dropSelctor"
                  :data-id="3"
                  class="badge dropdown-item"
                  href="#"
                  >-- sony</a
                >
              </li>
              <li>
                <a
                  @click="dropSelctor"
                  :data-id="4"
                  class="badge dropdown-item"
                  href="#"
                  >-- LG</a
                >
              </li>
              <li>
                <a
                  @click="dropSelctor"
                  :data-id="5"
                  class="badge dropdown-item"
                  href="#"
                  >-- Oppo</a
                >
              </li>
              <li>
                <a
                  @click="dropSelctor"
                  :data-id="6"
                  class="badge dropdown-item"
                  href="#"
                  >-- HTC</a
                >
              </li>
              <li>
                <a
                  @click="dropSelctor"
                  :data-id="7"
                  class="badge dropdown-item"
                  href="#"
                  >-- Motorola</a
                >
              </li>
            </ul>
          </div>
          <input
            type="text"
            class="search_input_query ui-autocomplete-input form-control ac_input"
            placeholder="Enter search keywords"
          />
          <span class="btn_search">
            <button type="submit" name="submit_search">
              <i class="material-icons">search</i>
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "searchForm",

  methods: {
    dropSelctor: function (e) {
      var text = e.target.innerText;
      e.target.classList.add("try");
      $(".dropdown-menu li").removeClass("selected");
      e.target.parentNode.classList.add("selected");
      $(".dropdown-toggle span").text(text);
    },
  },
};
</script>

<style lang="scss" scoped>
._desktop_advancsearch {
  max-width: 580px;
  height: auto;
  ._search_content {
    position: relative;
    margin-right: 40px;
    @media screen and(max-width:$maxIpad) {
      width: 100%;
      right: 40px;
    }
    .input-group {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-left: 30px;
      @media screen and (min-width) {
        width: 45%;
      }
      .input-group-btn {
        position: relative;
        font-size: 0;
        white-space: nowrap;
        .dropdown-toggle {
          font-size: 11px;
          text-transform: uppercase;
          color: #c7c6c6;
          padding-left: 20px;
          padding-right: 38px;
          background: #fff;
          font-weight: 400;
          height: 100%;
          max-width: 160px;
          -moz-border-radius-topleft: 3px;
          -webkit-border-top-left-radius: 3px;
          border-top-left-radius: 3px;
          -moz-border-radius-bottomleft: 3px;
          -webkit-border-bottom-left-radius: 3px;
          border-bottom-left-radius: 3px;
          -moz-border-top-right-radius: 0;
          -webkit-border-bottom-right-radius: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          &::before {
            content: "";
            position: absolute;
            width: 1px;
            height: 25px;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            right: 0;
            background: #e5e5e5;
          }
          &::after {
            content: "\f0dc";
            border: none;
            font-family: "FontAwesome";
            vertical-align: baseline;
            margin-left: 10px;
          }
          span {
            width: 95px;
            max-width: 95px;
            overflow: hidden;
            display: inline-block;
            vertical-align: middle;
          }
        }
        ul {
          position: absolute;
          transform: translate3d(0px, 46px, 0px);
          top: 0px;
          left: 0px;
          will-change: transform;
          border-radius: 0;
          text-align: $textAlign;
          margin-top: 0px;
          overflow: hidden scroll;
          height: auto;
          > li a {
            color: $WB;
            font-size: 12px;
            cursor: pointer;
            text-transform: capitalize;
          }
          > li a.all-category {
            padding-left: 5 + px !important;
          }
          > li a.main-category {
            padding-left: $m10 + px;
            text-decoration: none;
            color: #4449;
            display: block;
          }
          > li a.parent-category {
            padding-left: ($m10 + 5) + px !important;
          }
          a {
            text-align: left;
            color: $WB;
            &:hover {
              color: $HeaderBar_with_Op;
            }
            transition: all 0.5s ease-in-out;
          }
          li a {
            padding-left: ($m10 + 10) + px;
          }
          li.selected a {
            color: $WebGrn !important;
            text-decoration: underline !important;
          }
        }
      }
      .search_input_query {
        @include fontSize(.7);
        border: none;
        border-top-right-radius: 3px;
        -moz-border-radius-bottomright: 3px;
        -webkit-border-bottom-right-radius: 3px;
        -moz-border-top-right-radius: 0;
        -webkit-border-bottom-right-radius: 0;
        border-bottom-right-radius: 3px;
        height: 46px;
      }
      .btn_search {
        button {
          position: absolute;
          height: 46px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          right: 8px;
          z-index: 9;
          background: transparent;
          border: none;
          outline: none;
          line-height: 1;
          cursor: pointer;
          i {
            color: $HeaderBar_Co;
            font-size: 21px;
          }
        }
      }
    }
  }
}
</style>
