<template>
    <div class="vc_column-inner vc_custom">
        <div class="wpb_wrapper">
            <div class="row wpb_row row-fluid mb-xs-0">
                
                <div v-for="link in linksData" :key="link.linght" class="col-sm-4 wpb_column vc_column_container">
                    <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                            <div class="wpb_text_column wpb_content_element link-list-footer mb-0 pb-30 pb-xs-0">
                                <div class="wpb_wrapper">
                                    <div class="title_footer">
                                        <div class="title_block collapsed">{{link.title}}</div>
                                        <div class="block_content collapse d-block">
                                            <ul>
                                                <li v-for="alink in link.links" :key="alink.id"><router-link to="/">{{alink.link}}</router-link></li>
                                            </ul>
                                        </div>
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

