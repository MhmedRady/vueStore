<template>
    <div class="contact-form col-sm-12 col-xl-6 col-md-12 mb-30 wpb_column vc_column_container">
        <div class="column-inner ">
            <div class="wpb_wrapper">
                <div class="contactform">
                    <div class="block block-contactform clearfix">
                        <h2 class="title_block d-flex align-items-center justify-content-center">
                            <div>
                                <div class="title">
                                    contact us a Line
                                </div>
                                <span class="sub_title">
                                    We are happy to hear from you. Your suggestions will improve our marketplace the best
                                </span>
                                <div class="desc_title"></div>
                            </div>
                        </h2>

                        <div class="block_content">
                            <form class="contact-form" action="#" method="post" enctype="multipart/form-data">
                                <div class="form-fields">
                                    <div class="form-group row no-flow">

                                        <div class="col-md-6">
                                            <input class="form-control" name="name" placeholder="Your name">
                                        </div>
                                        <div class="col-md-6">
                                            <input class="form-control" name="from" type="email" value="" placeholder="Your email">
                                        </div>
                                
                                    </div>
                                    <div class="form-group row">

                                        <div class="col-12 form-select">
                                            <b-form-select v-model="selected" class="mb-3">
                                                <b-form-select-option value="1">Customer service</b-form-select-option>
                                                <b-form-select-option value="2">Webmaster</b-form-select-option>
                                            </b-form-select>
                                        </div>
                    
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-12">
                                            <textarea class="form-control" name="message" placeholder="Message" rows="8"></textarea>
                                        </div>
                                    </div>                                    
                                </div>
                                <div class="form-footer" >
                                    <button class="btn badge" type="submit" name="submitMessage">
                                        <img class="img-fluid b-WebGrn mr-10" src="../../../assets/svg/login/img-send.png" alt="img">
                                        <span>Send message</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            selected: "1",
        }
    },
}

</script>

<style lang="scss" scoped>
.contact-form{
    .block-contactform {
        .title_block {
            -webkit-justify-content: $left !important;
            -moz-justify-content: $left !important;
            -ms-justify-content: $left !important;
            justify-content: $left !important;
            -ms-flex-pack: $left !important;
            margin-bottom: 40px;
            
        }
        .sub_title {
            margin-top: 10px;
            padding-top: 4px;
        }
    }
    form{
        
        input,textarea{
            @include f-F(Oxy);
            max-height: 150px;
            text-transform: uppercase;
            @include fontSize(.7);
        }
        textarea{
            min-height: 100px;
        }
        .form-select{
            select{
                @include f-F(Oxy);
                color: #495057c2;
                text-transform: uppercase;
                @include fontSize(.7);
                min-height: 40px;
            }
        }
        
        .form-footer{
            button{
                background-color: $WebGrn;
                padding: 14px 38px;
                color: $f;
                @include f-F(OxyB);
                text-transform: uppercase;
                position: relative;
                border: transparent;
                float: $left;
            }
        }
        input,textarea,select,button{
            @media screen and (max-width: $maxMobile){
                margin-bottom: 20px !important;
            }
        }
    }    
}
</style>