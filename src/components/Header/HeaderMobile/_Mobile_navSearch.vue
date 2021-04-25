<template>
    <div id="_mobile_advancsearch">
        <div class="style_2">
            <form action="form-novadvancedsearch">
                <div class="input-group">
                    <input type="text" class="search_query ui-autocomplete-input form-control ac_input" 
                        name="search_query"
                        autocomplete="off"
                        novautocomplete="off"
                        placeholder="Enter search keywords"
                        >
                        <span class="btn_search">
                            <button type="submit" name="submit_search"> <i class="material-icons">search</i></button>
                        </span>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #_mobile_advancsearch{
        @media screen and(max-width: 767px) {
            width: 100%;
            margin-right: 10px !important;
        }
        >div{
            position: relative;
            form{
                @media screen and(max-width: 767px) {
                    display: block;
                    input {
                        height: 33px !important;
                        border-radius: 30px !important;
                        background: #f4f4f4 !important;
                        -webkit-box-shadow: none !important;
                        -moz-box-shadow: none !important;
                        -ms-box-shadow: none !important;
                        -o-box-shadow: none !important;
                        box-shadow: none !important;
                        border: none;
                        
                        @include fontSize(0.62);
                    }
                }
                .btn_search button {
                    position: absolute;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                    right: 8px;
                    z-index: 9;
                    background: transparent;
                    border: none;
                    outline: none;
                    line-height: 1;
                    cursor: pointer;
                    @media screen and(max-width: 767px){
                        padding: 5px 3px;
                        i{
                            font-size: 16px !important;
                            color: #000 !important;
                        }
                    }
                    height: 46px;
                }
            }
        }
    }
</style>

