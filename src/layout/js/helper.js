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
    }

}

export default helperFun;

    // scrollFun(e,"fixed-header","showFixed",270)