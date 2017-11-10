$(function(){
    var carouselList = $("#carousel ul");
    var carouselIndicators = $("#carousel ol");
    var arrowRight = $("#js-arrowRight");
    var arrowLeft = $('#js-arrowLeft');

    var interval = setInterval(changeSlide, 3000);
    
    function changeSlide(){
        carouselList.animate({"marginLeft":-525}, 500, moveFirstSlide);
        changeIndicator();       
    }

    //Funkcja przesuwająca kółeczka do przodu
    function changeIndicator(){
        var activeIndicator = carouselIndicators.find("li.active");
        var lastIndicator = carouselIndicators.find("li:last");
        var firstIndicator = carouselIndicators.find("li:first");

        if (lastIndicator.attr("class") == "active") {
            activeIndicator.removeClass();
            firstIndicator.addClass("active");
        } else {
            activeIndicator.removeClass();
            activeIndicator.next().addClass("active");
        } 
    }
    //Funkcja przesuwająca kółeczka do tyłu
    function changeIndicatorBackwards(){
        var activeIndicator = carouselIndicators.find("li.active");
        var lastIndicator = carouselIndicators.find("li:last");
        var firstIndicator = carouselIndicators.find("li:first");

        if (firstIndicator.attr("class") == "active") {
            activeIndicator.removeClass();
            lastIndicator.addClass("active");
        } else {
            activeIndicator.removeClass();
            activeIndicator.prev().addClass("active");
        } 
    }
    //Funkcja przesuwająca karuzelę do przodu
    function moveFirstSlide(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
    //Funkcja przesuwająca karuzelę do tyłu
    function moveLastSLide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-525});
        changeIndicatorBackwards();
    }
    //Strzałka przesuwająca karuzelę do przodu
    arrowRight.click(function(){
        clearInterval(interval);
        changeSlide();
        interval = setInterval(changeSlide, 3000);
    });    
    //Strzałka przesuwająca karuzelę do tyłu
    arrowLeft.click(function(){
        clearInterval(interval);
        moveLastSLide();
        carouselList.animate({"marginLeft":0}, 500);
        interval = setInterval(changeSlide, 3000);
    });
});