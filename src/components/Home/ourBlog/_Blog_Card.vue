<template>

    <div class="item post-item item_list">
        <b-card no-body class="blog-card overflow-hidden border-0" style="max-width: 500px;">
            <b-row no-gutters>
                <b-col md="6" lg="6">
                    <router-link to="/" class="pb-1r pl-5 pr-lg-4">
                        <b-card-img :src="require(`../../../assets/images/Home/our-blog/${img}`)" :alt="title" class="rounded-0"></b-card-img>
                        <span class="post-time pos-a">
                            <span class="date">
                                {{day}}
                            </span>
                            <span class="month d-block">
                                {{shMonth}} 
                            </span>
                        </span>
                    </router-link>
                </b-col>
                <b-col md="6" lg="6" class="flex-0-auto text-col">
                    <b-card-body>
                        <b-card-sub-title sub-title-tag="span" class="mb-10 d-block"><i class="material-icons">event_note</i> {{`${year}-${lgMonth}-${day}`}}</b-card-sub-title>
                        <b-card-title title-tag="router-link" to="/" class="mb-1r">{{title}}</b-card-title>
                        <b-card-text class="post-desc">
                            {{description | cropText(80,'...')}}
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
    
</template>

<script>
export default {
    props: ["title","img","description","day","shMonth","lgMonth","year"],
    
}
</script>

<style lang="scss" scoped>
.bloglist{
    .post-item {
        padding: 30px 5px 30px 5px !important;
        .blog-card{
            .text-col{
                max-width: none !important;
                @media screen and (min-width: $minIpad){
                    width: 50%;
                }
            }
            .card-body{
                padding: 5px 0px 5px 5px;
                text-align: $textAlign;
                
                .card-title{
                    @include f-F;
                    @include fontSize(.8);
                    @media screen and(max-width: $mxIpad) {
                        @include fontSize(.75);
                    }

                    &:hover{
                        color: $WebGrn;
                        text-decoration: none;
                    }
                }
                .card-subtitle{
                    @include f-F(OxyB);
                    @include fontSize(.72);
                    color: $subColor !important;
                    i{
                        @include fontSize(.8);
                    }
                }
                
                .post-desc{
                    @include fontSize(.75);
                    @media screen and(max-width: $mxIpad) {
                        @include fontSize(.75);
                    }
                }
            }
        }
    }
    .post-time,
    .post-comment{
        padding: 8px 18px;
        border-radius: 3px;
        background-color: $WebGrn;
        top: 10px;
        left: 15px;
        color: #000;
        text-align: center;
        box-shadow: $btnShadow;
        .date{
            font-weight: 700;
            font-family: PopB;
            font-size: .75rem;
        }
        .month,.icon{
            position: relative;
            margin-top: 3px;
            padding-top: 7px;
            padding-left: 0;
            padding-right: 0;
            font-size: .7rem;
            font-weight: 700;
            text-transform: uppercase;
            font-family: Pop;
            &::before{
                content: "";
                position: absolute;
                width: 28px;
                height: 2px;
                background: rgba(255,255,255,.3);
                top: 0;
                left: 50%;
                -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                transform: translateX(-50%);
            }
        }
    }
    .post-time{
        background-color: $f;
        .month{
            &::before{
                background: rgba(0,0,0,.3);
            }
        }
    } 
}

</style>
