function slideShows() {
    var slideList = $('.hot-list_item');
    var slideIndex = 0;
    var lengList = slideList.length;
    function prev() {
        slideIndex--;
        showSlide();
        if (slideIndex < lengList - 4) {
            var prevAnimate = slideList[slideIndex].animate([{
                opacity: '0'
            },
            {
                opacity: '1'
            }
            ],
                {
                    duration: 2000
                });

        }
        if (slideIndex == lengList - 4) {
            var prevAnimateFinal = slideList[slideIndex + 3].animate([{
                opacity: '0'
            },
            {
                opacity: '1'
            }
            ],
                {
                    duration: 2000
                });

        }


    }
    function next() {
        slideIndex++;
        showSlide();
        if (slideIndex <= lengList - 4 && slideIndex != 0) {
            var nextAnimate = slideList[slideIndex + 3].animate([{
                opacity: '0'
            },
            {
                opacity: '1'
            }
            ],
                {
                    duration: 2000
                });
        } else {
            var nextAnimateFinal = slideList[slideIndex].animate([{
                opacity: '0'
            },
            {
                opacity: '1'
            }
            ],
                {
                    duration: 2000
                });

        }
    }

    $('.fa-angle-right').click(function () {
        next();
    });
    $('.fa-angle-left').click(function () {
        prev();
    });
    showSlide();

    function showSlide() {
        if (slideIndex > lengList - 4) { slideIndex = 0 };
        if (slideIndex < 0) { slideIndex = lengList - 4 };
        slideList.css('display', 'none');
        for (let i = slideIndex; i <= slideIndex + 3; i++) {
            $('.hot-list_item:nth(' + i.toString() + ')').css('display', 'block');
        }
    }
}

function slideShowsResponsive() {
    var slideList = $('.hot-list_item');
    var slideIndex = 0;
    var lengList = slideList.length;
    function prev() {
        slideIndex--;
        showSlide();
        if (slideIndex < lengList - 1) {
            var prevAnimate = slideList[slideIndex].animate([{
                opacity: '0'
            },
            {
                opacity: '1'
            }
            ],
                {
                    duration: 2000
                });

        }
        if (slideIndex == lengList - 1) {
            var prevAnimateFinal = slideList[slideIndex].animate([{
                opacity: '0'
            },
            {
                opacity: '1'
            }
            ],
                {
                    duration: 2000
                });

        }


    }
    function next() {
        slideIndex++;
        showSlide();
        if (slideIndex <= lengList - 1 && slideIndex != 0) {
            var nextAnimate = slideList[slideIndex].animate([{
                opacity: '0'
            },
            {
                opacity: '1'
            }
            ],
                {
                    duration: 500
                });
        } else {
            var nextAnimateFinal = slideList[slideIndex].animate([{
                opacity: '0'
            },
            {
                opacity: '1'
            }
            ],
                {
                    duration: 500
                });

        }
    }

    $('.fa-angle-right').click(function () {
        next();
    });
    $('.fa-angle-left').click(function () {
        prev();
    });
    showSlide();

    function showSlide() {
        if (slideIndex > lengList - 1) { slideIndex = 0 };
        if (slideIndex < 0) { slideIndex = lengList - 1 };
        slideList.css('display', 'none');
        for (let i = slideIndex; i <= slideIndex; i++) {
            $('.hot-list_item:nth(' + i.toString() + ')').css('display', 'block');
        }
    }
}


function changeSlideShowsEvent(){
    var width = $(window).width();
    if (width < 900) {
        slideShowsResponsive();
    } else {
        slideShows();
    }
}
changeSlideShowsEvent()
$(window).resize(function () {
    changeSlideShowsEvent();
});
