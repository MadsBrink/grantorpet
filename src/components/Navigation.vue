<template>
    <nav v-bind:class="{ active: menuActive }">
        <button type="button" class="icon-transform icon-burger" v-on:click="menuToggle">
            <span class="icon-burger__lines"></span>
        </button>
        <ul class="nav-list">
            <li><span class="icon-info"></span></li>
            <li><span class="icon-location"></span></li>
            <li><span class="icon-images"></span></li> 
            <li><span class="icon-calendar"></span></li>
            <li><span class="icon-credit-card"></span></li>    
        </ul>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            menuActive: false,
        }
    },
    methods: {
        menuToggle: function(){
            this.menuActive = !this.menuActive;
        }
    }
}
</script>

<style lang="scss">
    $icon-color: #fff;
    $bubble-color: rgba(000,000,000,0.5);
    nav {
        position: fixed;
        padding: 10px;
        z-index: 900;
        &.active{
            .icon-burger .icon-burger__lines{
                background-color: transparent;
                margin-left: 12px;
                &:before,
                &:after { 
                    transform-origin: 50% 50%; 
                    transform: rotate3d(0, 0, 1, -45deg);
                    top:0; 
                    width: 35px;
                }
                &:before { transform: rotate3d(0, 0, 1, -45deg); }
                &:after { transform: rotate3d(0, 0, 1, 45deg); }
            }

            .nav-list {
                li{
                    transition-timing-function: cubic-bezier(0.175,  0.885, 0.320, 1.275);
                    transform: translateY(0) scale(1);
                }
                :nth-child(1){transition-delay: 0s; }
                :nth-child(2){transition-delay: 0.2s;}
                :nth-child(3){transition-delay: 0.4s;}
                :nth-child(4){transition-delay: 0.6s;}
                :nth-child(5){transition-delay: 0.8s;}
            }
        }
    }
    .nav-list {
        list-style: none;
        margin: 5px 0 0 0;
        padding: 0;
        li {
            -webkit-backface-visibility: hidden;
            color:$icon-color;
            font-size:24px;
            text-align: center;
            box-shadow: inset -11px -10px 17px -8px rgba(0,0,0,0.55);
            margin: 0;
            padding: 0;
            height: 60px;
            width: 60px;
            border-radius: 50%;
            margin-bottom: 5px;
            transition: transform 0.5s;
            transition-timing-function: cubic-bezier(0.600, -0.280, 0.735, 0.045);
            transform: translateY(-100%) scale(0);
            box-sizing: border-box;
            background: $bubble-color;
            position: relative;
            cursor: pointer;
            span{
                &:before {
                    line-height: 60px;
                }
            }
        }
        :nth-child(1){transition-delay: 0.8s; z-index:99;}
        :nth-child(2){transition-delay: 0.6s; z-index:98;}
        :nth-child(3){transition-delay: 0.4s; z-index:97;}
        :nth-child(4){transition-delay: 0.2s; z-index:96;}
        :nth-child(5){transition-delay: 0; z-index:95;}
    }
    .icon-burger {
        box-shadow: inset -11px -10px 17px -8px rgba(0,0,0,0.55);
        border-radius: 50%;
        position: relative;
        z-index: 100;
        border:none;
    }
    .icon-transform {
        appearance: none;
        cursor: pointer;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        height: 60px;
        width: 60px;
        transition: .3s;
        user-select: none;
        background: $bubble-color;
        outline: none;
        padding: 0;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: transparent;
        &:focus,
        &:active {
            outline: none;
        }
    }
    .icon-burger__lines {
        height: 3px;
        width: 40px;
        margin-left: 10px;
        display: inline-block;
        transition: .3s;
        background: $icon-color;
        position: relative;
        border-radius: 2px;
        &:before,
        &:after {
            content: '';
            height: 3px;
            width: 40px;
            display: inline-block;
            transition: .3s;
            background: $icon-color;
            position: absolute;
            left: 0;
            transform-origin: 3px center;
            border-radius: 2px;
        }
        &:before { top: -8px; }
        &:after { top: 8px; }
    }
</style>
