import $ from "jquery";

var helperFun = {

  scrollFun : (e,elClass,addClass,Top)=> {
    var elment = document.getElementsByClassName(elClass); 
    var elmentClass = elment[0].classList;
    var scrollEl = e.target.scrollingElement.scrollTop;
    var fixedClass = scrollEl>=Top ? elmentClass.add(addClass): elmentClass.remove(addClass);
        fixedClass;
    },

    getEl : function () {
        console.log("element");
    },
    
    goTop: function(){
        console.log("goTop");
        $('html, body').animate({scrollTop:0},1000);
    },

    gotTopScroll: ()=>{
        var sTop = $(window).scrollTop();
            
        var v = document.getElementsByClassName("go-back-top")[0];
        // console.log(v);
        if (sTop <500) {
            v.setAttribute("disabled","");
            v.classList.add("disabled");
        }else{
            v.removeAttribute("disabled","");
            v.classList.remove("disabled");
        }
        
    },
    
    timers :  (date,id) => {
        // console.log("m param => "+m);
        // Set the date we're counting down to
        var countDownDate = new Date(date).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with ID
            $(`.dys${id}`).text(days);
            $(`.hrs${id}`).text(hours);
            $(`.mins${id}`).text(minutes);
            $(`.secs${id}`).text(seconds);
            // If the count down is finished, write some text
            // if (distance < 0) {
            //     clearInterval(x);
            //     document.getElementById("demo").innerHTML = "EXPIRED";
            // }
            }, 1000);
            x;
    },
    cyrb53 : function(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
        h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
        return 4294967296 * (2097151 & h2) + (h1>>>0);
    }

}

export default helperFun;


    // scrollFun(e,"fixed-header","showFixed",270)