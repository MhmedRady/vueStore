<template>
    <div class="copyRight row wpb_row row-fluid d-md-flex align-items-center mb-md-0 pt-2r pb-2r mb-mob-4">
        <div class="wpb_heading wpb_content_element mb-1r">
            <h3>
                PRODUCT LISTING POLICY - INTELLECTUAL PROPERTY PROTECTION - PRIVACY POLICY - TERMS OF USE - USER INFORMATION LEGAL ENQUIRY GUIDE
            </h3>
        </div>
        <div class="wpb_heading wpb_content_element mb-1r">
            <h3>
                Copyright <i class="fa fa-copyright" aria-hidden="true"></i> <strong id="copyY"> </strong> Vinovathemes. All rights reserved.
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        setYear: function(){
            let span = document.querySelector("#copyY");
            console.log(span);
            var y = new Date().getUTCFullYear();
            span.innerHTML = y;
        }
    },
    mounted(){
        this.setYear();
    }
}
</script>

<style lang="scss" scoped>
.footer {
    .wpb_heading{
        width: 100%;
        h3{
            font-size: .7rem;
            color: $f;
            line-height: 20px;
            text-align: center;
            font-family: Pop;
            font-weight: 700;
            font-style: normal;
        }
    }
}
</style>