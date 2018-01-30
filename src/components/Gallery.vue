<template>
    <div id="gallery-module">
        <div class="container">
            <h3>Billeder af husene</h3>
            <div class="carousel-container">
                <div class="controles-container hidden-xs">
                    <button @click="decreasePerPage()">
                        <span class="icon-image"></span>
                    </button>
                    <button @click="increasePerPage()">
                        <span class="icon-images"></span>
                    </button>
                </div>
                <carousel :navigationNextLabel="'<span class=icon-arrow-right></span>'" :navigationPrevLabel="'<span class=icon-arrow-left></span>'" :paginationEnabled="false" :navigationEnabled="true" :perPage="1" :navigationClickTargetSize="8" :perPageCustom="[[768, 1], [992, perPageDesktop]]">
                    <slide v-for="index in 22" :key="index">
                        <img class="gallery-image" :src="getImageUrl('g-image-'+ index)" />
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    data () {
        return {
            perPageDesktop: 3
        }
    },
    components: {
        Carousel,
        Slide
    },
    methods: {
        increasePerPage() {
            if(this.perPageDesktop < 5){
                this.perPageDesktop++;
            }
        },
        decreasePerPage() {
            if(this.perPageDesktop > 1){
                this.perPageDesktop--;
            }
        },
        getImageUrl(image) {
            var images = require.context('../assets/images/gallery/', false, /\.jpg$/)
            return images('./' + image + ".jpg")
        }
    }
}
</script>

<style scoped lang="scss">
    h3 {
        text-align: center;
        padding-bottom: 30px;
    }
    #gallery-module {
        background-color:#fff;
        padding: 0 0 30px 0;
        @media (min-width: 1025px) {
            padding: 30px 0 90px 0;
        }
    }
    .carousel-container {
        position: relative;
        padding: 0 20px;
    }
    .gallery-image {
        width: 100%;
    }
    .controles-container {
        top:0;
        right: 20px;
        position: absolute;
        z-index: 1;
        button {
            border: none;
            background-color: rgba(000, 000, 000, 0.5);
            color: #fff;
            font-size: 25px;
            outline: none;
            font-weight: 1;
            display: block;
            margin: 0;
            padding: 4px 5px 1px 5px;
            float: left;
        }
    }
</style>
<style>
    .VueCarousel-inner {
        transition: all 0.5s ease !important;
    }
    .VueCarousel-navigation {
        letter-spacing: 0;
    }
</style>
