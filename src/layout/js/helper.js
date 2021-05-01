
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
    }
}

export default helperFun;

    // scrollFun(e,"fixed-header","showFixed",270)