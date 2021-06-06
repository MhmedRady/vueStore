<template>
  <div class="social-left col-lg-2 col-md-3">
    <div class="social list-social nov-socials">
      <ul class="list-unstyled mb-0 p-0">
        <li class="social_facebook">
          <a href="#" target="_blank"
            ><span>Facebook</span><i class="fa fa-facebook"></i
          ></a>
        </li>
        <li class="social_twitter">
          <a href="#" target="_blank"
            ><span>Twitter</span><i class="fa fa-twitter"></i
          ></a>
        </li>
        <li class="social_instagram">
          <a href="vinovathemes" target="_blank"
            ><span>Instagram</span><i class="fa fa-instagram"></i
          ></a>
        </li>
        <li class="social_pinterest">
          <a href="#" target="_blank"
            ><span>Pinterest</span><i class="fa fa-pinterest"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social-left {
  .nov-socials {
    line-height: 42px;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;

    ul {
      margin-top: 0;
      li {
        display: inline-block;
        &:not(:last-child) {
          margin-right: 20px;
        }
        &:not(:last-child) {
          margin-right: 5px;
        }
        a {
          line-height: 26px;
          text-align: center;
          color: #fff;
          width: 26px;
          height: 26px;
          border: 1px solid rgba(255, 255, 255, 0.27);
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          -ms-border-radius: 3px;
          -o-border-radius: 3px;
          border-radius: 3px;
          font-size: 13px;
          display: block;
          color: $f;
          span {
            display: none;
            font-size: 1.3rem;
            font-weight: 700;
            margin-left: 15px;
          }
          &:hover {
            span {
              color: $Orenge;
            }
          }
          @include transition(0.5);
        }
      }
    }
  }
}
</style>
