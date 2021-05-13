<template>
    <div class="group_cate d-flex align-items-center pt-15 pb-15">
        <ul class="list-category list-inline mb-0 p-0">
            <li class="list-inline-item">
                <a href="#">Home</a>
            </li>
            <li class="list-inline-item">
                <a href="#">Lenovo</a>
            </li>
            <li class="list-inline-item">
                <a href="#">Xiaomi</a>
            </li>
            <li class="list-inline-item">
                <a href="#">OPPO</a>
            </li>
            <li class="list-inline-item">
                <a href="#">HTC</a>
            </li>
            <li class="list-inline-item">
                <a href="#">Sony Xperia</a>
            </li>
            <li class="list-inline-item">
                <a href="#">SamSung</a>
            </li>
            <li class="list-inline-item">
                <a href="#">iPhone</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .sale-date-list{
        .block-heading-group{
            .group_cate {
                min-height: 49px;
                .list-category {
                    li:not(:last-child) {
                        margin-right: 30px;
                    }
                    a {
                        @include f-F();
                        @include fontSize(.75);
                        font-weight: 500;
                        color: #666;
                        &:hover{
                            color: $WebGrn;
                        }
                    }
                }
            }
        }
    }
</style>