<template>
    <div :class="`col-sm-2 wpb_column column_container ${index%2!=0?'back-e':''}`">
        <div class="vc_column-inner">
            <div class="wpb_wrapper">
                <div class="policy-item text-center pt-40 pb-30 pl-5 pr-5">
                    <div>
                        <img class="policy-icon" :src="require(`../../assets/images/Footer/monet-Icons/${img}`)" alt="">
                        <span class="title_policy title-style">{{title}}</span>
                        <span class="content-policy">{{sub}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["index","title","img","sub"]
}
</script>

<style lang="scss" scoped>
    .money-icon {
        >div{
            max-width: 20%;
            flex: 0 0 20%;
            width: 20%;
            padding-left: 0;
            padding-right: 0;
            @media screen and(max-width: $maxMobile){
                max-width: 100%;
                width: 100%;
                flex: 0 0 100%;
            }
        }
        
        .policy-icon {
            background: none;
            margin-bottom: 15px;
        }
        .title_policy {
            display: grid;
            margin-bottom: 10px;
        }
        .title-style{
            @include fontSize(.7);
            font-weight: 700;
            color: #000;
            @include f-F(PopB);
        }
        .content-policy {
            max-width: 270px;
            margin: auto;
            @include fontSize(.65);
            font-weight: 700;
        }
    }
</style>