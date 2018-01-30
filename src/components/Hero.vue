<template>
    <div id="intro-module">
        <div id="intro-text">
            <h2>Grantorpet</h2>
            <h3>Vores dejlige sted i de svenske skove</h3>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
    #intro-module {
        width: 100%;
        height: 100vh;
        background-image: url('../assets/images/image-1.jpg');
        background-size: cover;
        background-position: top center;
    }

    #intro-text {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        text-align: center;
        background-color: rgba(000,000,000,0.5);
        width: 100%;
        padding-bottom: 20px;
    }

    h2, h3{
        color: #fff;
        font-size: 40px;
        @media (min-width: 768px) {
            font-size: 100px;
        }
    }
    h3 {
        margin-top: 10px;
        font-size: 16px;
        line-height: 22px;
        @media (min-width: 768px) {
            font-size: 20px;
            line-height: auto;
        }
    }
    
</style>
