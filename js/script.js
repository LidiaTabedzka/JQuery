$(function(){
    var carouselList = $("#carousel ul");
    var carouselIndicators = $("#carousel ol");
    var carouselIndicatorsItem = carouselIndicators.find("li");
    var arrowRight = $("#js-arrowRight");
    var arrowLeft = $('#js-arrowLeft');

    var interval = setInterval(changeSlide, 3000);
    
    function changeSlide(){
        carouselList.animate({"marginLeft":-525}, 500, moveFirstSlide);       
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
        changeIndicator();  
    }
    //Funkcja przesuwająca karuzelę do tyłu
    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-525});
        changeIndicatorBackwards();
    }
    //Strzałka przesuwająca karuzelę do przodu
    arrowRight.click(function(){
        changeSlide();
        newInterval();
    });    
    //Strzałka przesuwająca karuzelę do tyłu
    arrowLeft.click(function(){
        moveLastSlide();
        carouselList.animate({"marginLeft":0}, 500);
        newInterval();
    });

    //Funkcja zerująca interval 
    function newInterval(){
        clearInterval(interval);
        interval = setInterval(changeSlide, 3000);
    }

    //Funkcja do klikania w kółka   
    carouselIndicatorsItem.click(function(){
        var activeIndicator = carouselIndicators.find("li.active");
        var activeIndex = carouselIndicatorsItem.index(activeIndicator);
        var clickedIndicator = $(this);
        var clickedIndex = carouselIndicatorsItem.index(clickedIndicator);

        var distance = activeIndex - clickedIndex;
        
        if (distance < 0) {
            for (var i = -1; i >= distance; i--) {
                changeSlide();
            }
            newInterval();
        } else if (distance > 0) {
            for (var i = 1; i <= distance; i++) {
                moveLastSlide();
            }
            carouselList.animate({"marginLeft":0}, 500); 
            newInterval();
        } 
    });
});