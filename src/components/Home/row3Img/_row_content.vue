<template>

    <div class="col-md-4 m-auto mb-3r mt-1r">
        <div class="wpb_single_image">
            <div class="wpb_wrapper-1">
                <a href="#">
                    <img class="w-100" :src="require(`../../../assets/images/Home/row3-images/${img}`)" alt="">
                </a>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ["img"]
}
</script>
