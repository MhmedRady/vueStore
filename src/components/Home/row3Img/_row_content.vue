<template>

    <div class="col-lg-4 m-auto">
        <div class="wpb_single_image">
            <div class="wpb_wrapper-1">
                <a href="#">
                    <img class="w-100" :src="require(`../../../assets/images/row3-images/${img}`)" alt="">
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
