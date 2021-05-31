<template>
    <div class="text-content">
        
        <h2>
            NURANIUM MARKETPLACE - SHOPPING AND SALES ONLINE SIMPLE, FAST AND SAFE
        </h2>

        <div class="text">
            Morbi et justo at enim rutrum molestie sit amet a purus. Quisque vel justo et diam dapibus viverra id vitae ligula. Cras pharetra arcu semper, interdum purus sed, molestie mauris. Phasellus gravida molestie pulvinar. Pellentesque suscipit vulputate diam luctus egestas. Nam dapibus felis ipsum, rutrum fermentum augue bibendum a. Vinovathemes sem. Quisque ac turpis velit. Pellentesque scelerisque condimentum diam, et ultrices tellus aliquam vitae. Proin ut purus pellentesque, porta arcu sit amet, consequat eros. Praesent feugiat, arcu in porta euismod, lorem magna mattis erat, sed volutpat libero sem in elit. Cras quis risus eget metus eleifend dapibus. Etiam pharetra semper justo, ut porta justo condimentum sit amet. Curabitur sodales facilisis nisi. Etiam at dolor ut turpis porta dictum.
        </div>

        <div class="text-content2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit maiores eos, non ut magni accusantium fugit sed, quam sunt amet, beatae praesentium architecto repudiandae quibusdam error. Qui, cumque fugit?
        </div>

        <div class="content-hidden">
            <h2>
                NURANIUM MARKETPLACE - RETURN POLICY
            </h2>
            <ul>
                <li>
                    Morbi et justo at enim rutrum       molestie sit amet a purus.
                </li>
                <li>
                    Quisque vel justo et diam dapibus viverra id vitae ligula. Cras pharetra arcu semper, interdum purus sed, molestie mauris.
                </li>
                <li>
                    Phasellus gravida molestie pulvinar pellentesque suscipit vulputate diam luctus egestas.
                </li>
                <li>
                    Nam dapibus felis ipsum, rutrum fermentum augue bibendum a.
                </li>
                <li>
                    et ultrices tellus aliquam vitae.
                </li>
                <li>
                    Proin ut purus pellentesque, porta arcu sit amet consequat eros.
                </li>
            </ul>
            <h2>NURANIUM MARKETPLACE - PRIVACY POLICY</h2>
            <div class="text">
                Morbi et justo at enim rutrum molestie sit amet a purus. Quisque vel justo et diam dapibus viverra id vitae ligula. Cras pharetra arcu semper, interdum purus sed, molestie mauris. Phasellus gravida molestie pulvinar. Pellentesque suscipit vulputate diam luctus egestas. Nam dapibus felis ipsum, rutrum fermentum augue bibendum a. Vinovathemes sem. Quisque ac turpis velit. Pellentesque scelerisque condimentum diam, et ultrices tellus aliquam vitae. Proin ut purus pellentesque, porta arcu sit amet, consequat eros. Praesent feugiat, arcu in porta euismod, lorem magna mattis erat, sed volutpat libero sem in elit. Cras quis risus eget metus eleifend dapibus. Etiam pharetra semper justo, ut porta justo condimentum sit amet. Curabitur sodales facilisis nisi. Etiam at dolor ut turpis porta dictum.
            </div>
            <div class="text2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error debitis quia reprehenderit, aut et nostrum modi numquam rem placeat quisquam. Tenetur in non laboriosam, iure debitis veniam aliquam rem!
            </div>
        </div>
        
        <span @click="seeMore" class="show-more">see more</span>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods: {
        seeMore:function(){
            var textHidden = $(".market-Text .content-hidden");
            var showBTN = $(".market-Text .show-more");
                $(".market-Text .text-content2").toggleClass("show")
                textHidden.toggleClass("show");
                if (textHidden.hasClass("show")) {
                    $(".market-Text .content-hidden").slideDown();
                    showBTN.text("show less");
                }else{
                    $(".market-Text .content-hidden").slideUp();
                    showBTN.text("show more");
                }
        }
    },
}
</script>
