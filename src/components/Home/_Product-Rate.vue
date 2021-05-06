<template>
    <div class="product-rate">
        <div class="star_rate">
            <i class="star act"></i>
            <i class="star act"></i>
            <i class="star act"></i>
            <i class="star"></i>
            <i class="star"></i>
        </div> 
    </div>
</template>


<style lang="scss" scoped>
.slick-content{
    .nov-productdeals
    {
        .product-rate{
            padding-left: 20px;
            margin-bottom: 0;
            margin-top: 0;
            margin-left: auto;
            margin-right: 0;

            .star_rate{
                margin-right: 5px;
                color: #f7bc3d;
                display: inline-block;
                vertical-align: middle;
                font-size: 1.1rem;
                color: #909090;

                .star{
                    display: block;
                    float: left;
                    overflow: hidden;
                    cursor: pointer;
                    position: relative;
                    &::after {
                        content: "\f006";
                        font-family: "FontAwesome";
                        display: inline-block;
                        left: 0;
                        font-size: 15px;
                        font-weight: bolder;
                        // text-shadow: 0 0px 2px;
                    }

                    &::after{
                        color: #dbdbdb;
                    }
                    &.act{
                        &::after{
                            content: '\f005';
                            color: $rate;
                        }
                    }
                }
                    
            }

        }    
    }
}

</style>