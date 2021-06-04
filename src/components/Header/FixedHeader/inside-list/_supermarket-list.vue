<template>
    <li class="nav-item p-0 content-list">
            <router-link to="/" class="nav-link p-0"> Supermarket</router-link>
            <!-- <div class="row"> -->
            <ul class="nav content-menu">

                <li class="nav-item">
                    <a class="nav-link top-link" href="#">Don't forget</a>
                    <Dont-List />

                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">New Arrivals</a>
                </li>
                
            </ul>
            <!-- </div> -->
        </li>
</template>

<script>
import DontList from '@/components/Header/FixedHeader/inside-list/supermarket-menu/_Dont_List'

export default {
    components:{
        DontList
    }
}
</script>

<style lang="scss" scoped>
.category-nav-content .menu-list{
    .content-list{
        >a{
            &::after{
                background-color: $discount !important;
            }
        }
        &:hover{
            >a{
                &.nav-link{
                    color: $discount !important;
                    
                }
            }
        }
        
        
        
        >ul{
            &.content-menu{
                li{
                    &:hover{
                        a{
                            &:not(.top-link){
                                color: $discount;
                            }
                        }
                    }
                }
                .inside-menu{
                    background-color: $f;
                }   
            }
        }
        
    }
}
</style>