<template>
    <div id="calendar-module">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 sm-pad-30">
                    <h3>Pris og booking</h3>
                    <p >
                        Det er ikke muligt at booke husene direkte på denne side. Kalenderen viser, hvornår huset er ledigt, og man kan så kontakte os og høre om det er muligt at booke huset på ledige datoer.
                        <br><br>
                        Priser (inkl. forbrug)<br>
                        1.200 kr./hus for en weekend (200 kr. ekstra fra 1/10 til 1/5 pga. større energiforbrug).<br>
                        1.700 kr./hus for en uge (500 kr. ekstra fra 1/10 til 1/5 pga. større energiforbrug).<br>
                        Betaling skal foregå til følgende konto (Reg. nr. 8075 – Konto nr. 8075 179691)
                        <br><br>
                        Huset skal gøres rent når det forlades.
                        <br><br>
                        Kontakter:<br>
                        Helle tlf.: 59 51 30 28<br>
                        Lars: info-grantorpet@gmail.com<br>
                        Stine tlf.: 60 68 03 23<br>
                    </p>
                </div>
                <div class="col-sm-6">
                    <iframe id="g-cal" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=ugo7gmrs1umggf12295gh6k574%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=Europe%2FCopenhagen" style="border-width:0" width="100%" height="400" frameborder="0" scrolling="no"></iframe>
                </div>
            </div>
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
    #calendar-module {
        background-color: #fff;
        
        padding: 0 0 60px 0;
        @media (min-width: 1025px) {
            padding: 90px 0;
        }
    }
    .sm-pad-30 {
        padding-bottom: 30px;
        @media (min-width: 768px) {
           padding-bottom: 0;
        }
    }
    #g-cal {
        height: 250px;
        @media (min-width: 414px) {
            height: 300px;
        }
        @media (min-width: 1025px) {
            height: 400px;
        }
    }
    
</style>
