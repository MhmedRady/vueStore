<template>
    <div class="product-card item col- seeMore-card pl-xs-5 pr-xs-5 pt-5 pl-10 pr-0 mb-30 slick-slide slick-current slick-active">
        <div class="card" style="width:190px">
            <router-link :to="To!=null?To:`/`">
            <div class="overlay" :style="{ backgroundImage: 'url(' + require(`../../assets/images/${img}`) + ')' }"></div>
            <div class="overlay"></div>
            <div class="text-content badge">
                {{title!=null?title:'view more'}}
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:["To","title","img"],
}
</script>

<style lang="scss" scoped>

.seeMore-card{
    justify-content: space-around;
    display: flex;
    .card{
        height: 300px;
        position: absolute;
        top: 150%;
        background-color: $f;
        border: 1px solid #aaa;
        box-shadow: 2px 2px 5px 2px #5b5b5b69;
        
        .overlay{
            @extend %overlay;
            background-color: #ffffff36 !important;
            // border-top: 2px solid #105caac7;
            border-radius: 5px;
            // border-bottom: 2px solid #105caac7;
            z-index: 1;
            background: none;
            
            &:first-of-type{
                @include filter(blur(2px));
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                // background-image: url("../../../assets/images/Home/under-$10/banner-2.jpg");
                z-index: 0;
                opacity: .8;
            }
            
        }

        .text-content{
            position: absolute;
            width: 80%;
            left: 10%;
            bottom: 40%;
            padding-top: 20px;
            text-align: center;
            text-transform: uppercase;
            padding-bottom: 20px;
            color: $WebGrn;
            z-index: 2;
            @include f-F;
            @include fontSize(.83);
            &::after,
            &::before{
                content: "";
                position: absolute;
                width: 30%;
                display: block;
                height: 30px;
            }
            &::before{
                border-top: 5px solid #105caaa3;
                border-left: 5px solid #105caaa3;
                margin-top: -15px;
                margin-left: 0px;
                border-top-left-radius: 5px;
            }
            &::after{
                right: 5px;
                margin-top: -15px;
                border-bottom-right-radius: 5px;
                border-right: 5px solid #105caaa3;
                border-bottom: 5px solid #105caaa3;
            }
        }
    }
}
</style>