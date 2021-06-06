<template>
    <div class="block_hotline d-flex align-items-center">
        <div id="kb_displaynav1_links_container">
            <div class="display_nav1_link">
                <a href="#" title="Click to view all sellers badge" rel="nofollow">
                    <i class="material-icons">groups</i>
                    Sellers
                </a> 
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .align-items-center {
        -webkit-box-align: center !important;
        -webkit-align-items: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
    }
    .block_hotline {
        margin-left: auto;
        margin-right: 0;
    }
    #kb_displaynav1_links_container {
        display: inline-table;
 
        .display_nav1_link {
            height: 46px;
            padding-left: 20px;
            padding-right: 20px;
            color: #fff;
            line-height: 46px;
            background-color: rgba(255, 255, 255, 0.09);
            text-align: center;
            text-transform: uppercase;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            -ms-border-radius: 3px;
            -o-border-radius: 3px;
            border-radius: 3px;
            a {
                color: #fff;
                font-size: 10px;
                display: -webkit-box;
                display: -moz-box;
                display: box;
                display: -webkit-flex;
                display: -moz-flex;
                display: -ms-flexbox;
                display: flex;
                font-weight: 700;
                font-family: $popFont;
                @include fontSize(.6);
 
                i {
                    @include fontSize(1.4);
                    color: $f;
                    font-weight: 400;
                    right: 5px;
                    top: 10px;
                }
                &:hover{
                    i{
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>