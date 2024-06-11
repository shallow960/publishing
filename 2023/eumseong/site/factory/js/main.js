
/* 한신정보기술 안형주 23.11.04 */


(function ($) {
    'use strict';
    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head');

    function splittingTextDelay(object, speed, delay_speed) {
        var splitLength = $(object).find('.char').length;
        for (var i = 0; i < splitLength; i++) {
            if ($(object).data('css-property') == 'animation') {
                $(object).find('.char').eq(i).css('animation-delay', delay_speed + (i * speed) + 's');
            } else if ($(object).data('css-property') == 'transition') {
                $(object).find('.char').eq(i).css('transition-delay', delay_speed + (i * speed) + 's');
            }
        }
    }
    

    $(function () {
        /* 여기부터 작성 */

        //rowgroup 스크롤 애니메이션 시작
        var $Rowgroup = $('.rowgroup');
        $window.on('scroll', function (event) {
            $Rowgroup.each(function () {
                var $this = $(this),
                    WindowTop = $window.scrollTop(),
                    WindowBottom = WindowTop + $window.height(),
                    WindowMiddle = (WindowTop + WindowBottom) / 2,
                    ThisOffSet = $this.offset(),
                    ThisOffSetTop = ThisOffSet.top;

                if (ThisOffSetTop < WindowMiddle + 200) {
                    $this.addClass('row_ani');
                } else {
                    $this.removeClass('row_ani');
                }
            });
        });

        /* 텍스트 애니메이션 */
        Splitting({
            target: '[data-splitting]',
            by: 'chars',
            key: null
        });
        var $splittingTxt = $('.top_text');
        $splittingTxt.each(function () {
            splittingTextDelay(this, $(this).data('speed'), $(this).data('speed-delay'));
        });
        if (!$('html').is('.ie11')) {
            console.log('not ie11');
            var $LastChar = $('.rowgroup1 .top_text_box .top_title_text .top_text .word:last-child .char:last-child'),
                LastCharDelay = $LastChar.css('animation-delay'), // Changed to get the animation delay
                SecLastCharDelay = parseFloat(LastCharDelay) + 0.5; // Added parseFloat to convert to number
        };

        /* 비주얼 */
        var $this = $(this),
            $MainVisualList = $('.rowgroup1 .main_visual_wrap .main_visual_list'),
            $MainVisualItem = $MainVisualList.find('.main_visual_item'),
            $ControlBox = $('.rowgroup1 .main_visual_control .control_box'),
            $ControlAuto = $ControlBox.find('.auto'),
            $ProgressBox = $ControlBox.find('.progress_box'),
            $Current = $ProgressBox.find('.current'),
            $Total = $ProgressBox.find('.total');

        $MainVisualList.on('init', function (event, slick, currentSlide) {
            var $crtSlide = $(slick.$slides[0]),
                $crtRows = $crtSlide.find('.slick-rows');

            setTimeout(function () {
                $ControlBox.addClass('active');
                $html.addClass('hsg_tour');
            }, 1);
        });
        $MainVisualList.slick({
            slidesToShow: 1, //화면에 출력할 개수
            slidesToScroll: 1, //넘어갈 때 넘어갈 개 수
            autoplay: true, //자동재생
            autoplaySpeed: 3000, //자동재생
            prevArrow: $ControlBox.find('.prev'),
            nextArrow: $ControlBox.find('.next'),
            autoArrow: $ControlBox.find('.auto'),
            pauseText: 'stop',
            playText: 'play',
            centerMode: false,  //센터모드
            Dragg: false,
            fade: true,
            speed: 2000, //속도
            total: $Total,
            current: $Current,
            customState: function (state) {
                if (state.Page < 10) {
                    state.Page = state.Page;
                }
                if (state.total < 10) {
                    state.total = state.total;
                }
                return state;
            },

        });
        $MainVisualList.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $ControlBox.removeClass('active');
        });
        $MainVisualList.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $ControlBox.addClass('active');
        });
        //일시정지 재생
        $ControlAuto.on('click', function () {
            var $this = $(this),
                $ProgressBar = $ProgressBox.find('.bar'),
                IsPlay = $this.is('.slick-pause');
            if ($(this).hasClass('stop')) {
                $MainVisualList.slick('slickPause');
                $(this).removeClass('stop').addClass('play');
            } else {
                $MainVisualList.slick('slickPlay');
                $(this).removeClass('play').addClass('stop');
                $ControlBox.removeClass('pro_ani');
            }

            if (IsPlay) {
                $ProgressBar.css('animation-play-state', 'running');
            }
            else {
                $ProgressBar.css('animation-play-state', 'paused');
            }
        });

        //페이지 넘버
        /* $MainVisualList.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            let _num = (currentSlide ? currentSlide : 0) + 1;
            let _slidesToShow = slick.slickGetOption('slidesToShow');
            let _curPage = parseInt((_num - 1) / _slidesToShow) + 1;
            let _totalPage = parseInt((slick.slideCount - 1) / _slidesToShow) + 1;
            $Page.text("" + _curPage);
            $Total.text("" + _totalPage);
        }); */

        /* rowgroup3 */
        var $IconList = $('.rowgroup3 .icon_list');

        $IconList.slick({
            slidesToShow: 7, //화면에 출력할 개수
            slidesToScroll: 1, //넘어갈 때 넘어갈 개 수
            swipeToSlide: true,
            autoplay: true, //자동재생
            autoplaySpeed: 0,
            draggable: true,
            speed: 2000,
            swipe: true,
            variableWidth: true,
            pauseOnHover: true,
            pauseOnFocus: true,
            cssEase: 'linear',
            responsive: [
                {
                    //반응형
                    breakpoint: 1001,
                    settings: {
                        slidesToShow: 5,
                    }
                },{
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 6,
                    }
                },{
                    breakpoint: 401,
                    settings: {
                        slidesToShow: 4,
                    },
                },
            ]
        });
    });
})(jQuery);