<template>
    <div id="app">
        <grantorpet-hero/>
        <grantorpet-intro/>
        <grantorpet-gallery/>
        <grantorpet-googlemap/>
        <grantorpet-calendar/>
        <grantorpet-footer/>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import Hero from '@/components/Hero'
    import Intro from '@/components/Intro'
    import GoogleMap from '@/components/Map'
    import Gallery from '@/components/Gallery'
    import Calendar from '@/components/Calendar'
    import Footer from '@/components/Footer'

    export default {
        name: 'app',
        components:  {
            'grantorpet-navigation' : Navigation,
            'grantorpet-hero' : Hero,
            'grantorpet-intro' : Intro,
            'grantorpet-googlemap' : GoogleMap,
            'grantorpet-gallery' : Gallery,
            'grantorpet-calendar' : Calendar,
            'grantorpet-footer' : Footer
        }
    }
</script>

<style lang="scss">

    body {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif !important;
        letter-spacing: 8px;
    }

    p {
        letter-spacing: 2px;
    }

    .justify {
        text-align: justify;
    }

    @font-face {
    font-family: 'icomoon';
        src:  url('assets/fonts/icomoon.eot?3nuc5w');
        src:  url('assets/fonts/icomoon.eot?3nuc5w#iefix') format('embedded-opentype'),
            url('assets/fonts/icomoon.ttf?3nuc5w') format('truetype'),
            url('assets/fonts/icomoon.woff?3nuc5w') format('woff'),
            url('assets/fonts/icomoon.svg?3nuc5w#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'icomoon' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-image:before {
        content: "\e90d";
    }
    .icon-images:before {
        content: "\e90e";
    }
    .icon-credit-card:before {
        content: "\e93f";
    }
    .icon-envelop:before {
        content: "\e945";
    }
    .icon-location:before {
        content: "\e947";
    }
    .icon-location2:before {
        content: "\e948";
    }
    .icon-calendar:before {
        content: "\e953";
    }
    .icon-zoom-in:before {
        content: "\e987";
    }
    .icon-zoom-out:before {
        content: "\e988";
    }
    .icon-enlarge:before {
        content: "\e989";
    }
    .icon-shrink:before {
        content: "\e98a";
    }
    .icon-plus:before {
        content: "\ea0a";
    }
    .icon-minus:before {
        content: "\ea0b";
    }
    .icon-info:before {
        content: "\ea0c";
    }
    .icon-arrow-right:before {
        content: "\ea34";
    }
    .icon-arrow-left:before {
        content: "\ea38";
    }

</style>
