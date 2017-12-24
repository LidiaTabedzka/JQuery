$(function(){
    var carouselList = $("#carousel ul");
    var carouselIndicators = $("#carousel ol");
    var carouselIndicatorsItem = carouselIndicators.find("li");
    var arrowRight = $("#js-arrowRight");
    var arrowLeft = $('#js-arrowLeft');

    var interval = setInterval(moveCarousel, 3000);

    //Funkcja zerująca interval 
    function newInterval(){
        clearInterval(interval);
        interval = setInterval(moveCarousel, 3000);
    }
    //Funcja zmieniająca slajd i kółka
    function changeSlide(target){
        carouselIndicatorsItem.removeClass("active").eq(target).addClass("active");
        carouselList.animate({"marginLeft":-525 * target}, 500);       
    }
    //Funkcja przesuwająca karuzelę do przodu
    function moveCarousel(){
        var activeIndicator = carouselIndicators.find("li.active");
        var nextIndicator = activeIndicator.next();
        var nextIndicatorIndex = carouselIndicatorsItem.index(nextIndicator);
        
        if (nextIndicatorIndex >= 0) {
            changeSlide(nextIndicatorIndex);
        } else {
            changeSlide(0);
        }
    }
    //Strzałka przesuwająca karuzelę do przodu
    arrowRight.click(function() {
        moveCarousel();        
        newInterval();
    });    
    //Strzałka przesuwająca karuzelę do tyłu
    arrowLeft.click(function(){
        var activeIndicator = carouselIndicators.find("li.active");
        var prevIndicator = activeIndicator.prev();
        var prevIndicatorIndex = carouselIndicatorsItem.index(prevIndicator);

        if (prevIndicatorIndex >= 0) {
            changeSlide(prevIndicatorIndex);
        } else {
            changeSlide(4);
        }
        newInterval();
    });
    //Funkcja do klikania w kółka   
    carouselIndicatorsItem.click(function(){
        const target = $(this).index();
        changeSlide(target);
        newInterval();
    });
});