<template>
    <div class="form-col vc_column-inner vc_custom">
        <div class="wpb_wrapper">
            <div class="row wpb_row row-fluid mb-xs-0">
                
                <div class="wpb_column vc_column_container">
                    <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                            <div class="wpb_text_column wpb_content_element link-list-footer mb-0 pl-10 pr-10 pb-30 pb-xs-0">
                                <div class="wpb_wrapper">
                                    <div class="title_footer">
                                        <div class="title_block collapsed">Contact us</div>
                                        <div class="block_content collapse d-block">
                                            <p>
                                                Sign up for newsletter to receive special offers and exclusive news about Nuranium products.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="block_form">
                                        <form action="/" method="post">
                                            <div class="input-group">
                                                <input type="text" class="form-control" name="email" value="" placeholder="ENTER YOUR EMAIL...">
                                                <span class="input-group-btn">
                                                    <button class="btn p-12 rounded-end" name="submitNews" type="submit">Subscribe</button>
                                                </span>
                                            </div>
                                            <input type="hidden" name="action" value="0">
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import linkJson from '../../../assets/models/Footer/footerTop-Links/footerTop-Links.json'

export default {
    data() {
        return {
            linksData: linkJson,
        }
    },
}
</script>

<style lang="scss" scoped>
.form-col{
    .link-list-footer{
        @media screen and(min-width: $ipad10Pro){
            padding-right: 20px !important;
        }
    }
    .block_content{
        p{
            @include fontSize(.8);
            font-weight: 500;
        }
    }
    form{
        input{
            &.form-control{
                @include fontSize(.7);
                font-weight: 700;
            }
        }
        button{
            color: $f;
            @include fontSize(.75);
            font-weight: 700;
            text-transform: uppercase;
            @include f-F;
            background-color: $WebGrn;
            // padding: .72rem !important;
            margin-#{$left}: 10px;
            border-radius: 0 10px 10px 0;
        }
    }
}
</style>