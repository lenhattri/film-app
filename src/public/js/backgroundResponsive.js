function changeBackground(){
    var width = $(window).width();
    if (width < 700) {
    $('#background').children().attr('src','../../../images/backgroundResponsive.jpg');
    } else {
    $('#background').children().attr('src','../../../images/background.jpg');
    }
}

changeBackground();
$(window).resize(function () {
    changeBackground();
});