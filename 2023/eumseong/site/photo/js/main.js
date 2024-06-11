
/* 한신정보기술 안형주 23.11.04 */
$(function () {
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
	$(function(){
		//rowgroup 스크롤 애니메이션 시작
		var $Rowgroup = $('.photo_db');
		$window.on('scroll', function (event) {
			$Rowgroup.each(function () {
				var $this = $(this),
					WindowTop = $window.scrollTop(),
					WindowBottom = WindowTop + $window.height(),
					WindowMiddle = (WindowTop + WindowBottom) / 2,
					ThisOffSet = $this.offset(),
					ThisOffSetTop = ThisOffSet.top;

				if (ThisOffSetTop < WindowMiddle + 300) {
					$this.addClass('row_ani');
				} else {
					$this.removeClass('row_ani');
				}
			});
		});
	});
	//rowgroup1
	$(function () {
		var $this = $(this),
			$VisualArea = $('.rowgroup1 .visual_area'),
			$VisualListWrap = $VisualArea.find('.visual_list_wrap'),
			$VisualList = $VisualListWrap.find('.visual_list'),
			$VisualItem = $VisualList.find('.visual_item'),
			//탑박스
			$AbTopBox = $VisualArea.find('.ab_top_box'),
			$TopTextBox = $AbTopBox.find('.top_text_box'),
			$AbTopTitle = $TopTextBox.find('.title'),
			$AbTopDesc = $TopTextBox.find('.desc'),
			//바텀박스
			$AbBottomBox = $VisualArea.find('.ab_bottom_box'),
			$ControlBox = $AbBottomBox.find('.control_box'),
			$DotsList = $ControlBox.find('.dots_list'),
			$DotsItem = $DotsList.find('.dots_item'),
			$Progress = $ControlBox.find('.progress'),
			$ProgressBar = $Progress.find('.bar'),
			$BottomTextBox = $AbBottomBox.find('.bottom_text_box'),
			$BottomText = $BottomTextBox.find('.bottom_text');

		//프로세스 바
		$VisualList.on('init', function (event, slick, currentSlide) {
			var $crtSlide = $(slick.$slides[0]),
				$crtRows = $crtSlide.find('.slick-rows');

			setTimeout(function () {
				$ControlBox.addClass('active');
				$html.addClass('hsg_tour');
			}, 1);
		});

		$VisualList.slick({
			slidesToShow: 1, //화면에 출력할 개수
			slidesToScroll: 1, //넘어갈 때 넘어갈 개 수
			autoplay: true,
			autoplaySpeed: 3000,
			fade: true,
			arrows:false,
			speed: 3000, //속도
			Dragg: false,
			swipe: false, //터치 유무
			pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
			dots:true, //동그라미버튼
			appendDots: $DotsList, //동그라미 선택자 지정

		});
		$VisualList.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$ControlBox.removeClass('active');
		});
		$VisualList.on('afterChange', function (event, slick, currentSlide, nextSlide) {
			$ControlBox.addClass('active');
		});

		//텍스트 애니메이션
		Splitting({
			target: '[data-splitting]',
			by: 'chars',
			key: null
		});
		$AbTopTitle.each(function () {
			splittingTextDelay(this, $(this).data('speed'), $(this).data('speed-delay'));
		});
		$BottomText.each(function () {
			splittingTextDelay(this, $(this).data('speed'), $(this).data('speed-delay'));
		});
		if (!$('html').is('.ie11')) {
			console.log('not ie11');
			var $LastChar = $('.rowgroup1 .words.chars .word:last-child .char:last-child'),
				LastCharDelay = $LastChar.css('animation-delay'), // Changed to get the animation delay
				SecLastCharDelay = parseFloat(LastCharDelay) + 1; // Added parseFloat to convert to number
		}
	});

	//rowgroup2
	$(function(){
		var $NewPhotoWrap = $('.rowgroup2 .new_photo_wrap'),
			$NewPhotoList = $NewPhotoWrap.find('.new_photo_list'),
			$NewPhotoControl = $NewPhotoWrap.find('.new_photo_control'),
			$NewPhotoPrve = $NewPhotoControl.find('.prve'),
			$NewPhotoNext = $NewPhotoControl.find('.next');

		$NewPhotoList.slick({
			slidesToShow: 5, //화면에 출력할 개수
			slidesToScroll: 1, //넘어갈 때 넘어갈 개 수
			speed: 600, //속도
			infinite: true, //무한반복
			variableWidth:true,
			arrows:true,
			prevArrow: $NewPhotoPrve,
			nextArrow: $NewPhotoNext,
			centerMode: false,  //센터모드
			pauseOnHover: true, 
			swipe: false, //터치 유무
			draggable: true,    //마우스로 드레그
			responsive: [
				{
					breakpoint: 640,
					settings: {
						slidesToShow:3,
						arrows:false,
						swipe: true, //터치 유무
					}
				},
			]
		});
            
	});

	//rowgroup3
	$(function(){
		$('.rowgroup3 .menu_photo_list .menu_item .menu_btn').on('click',function(){
			var $MenuBthThis = $(this), 
				$MenuItemThis = $MenuBthThis.parent('.menu_item'),
				$SlickSlideThis = $MenuItemThis.parents('.slick-slide'),
				MenuItemIndex = $SlickSlideThis.index(),

				$MenuBtn = $('.menu_btn'),
				$MenuItem = $MenuBtn.parents('.menu_item'),
				$SlickSlide = $MenuItem.parents('.slick-slide'),
				$Rowgroup3 = $MenuItem.parents('.rowgroup3'),
				$PhotoListWrap = $Rowgroup3.find('.photo_list_wrap'),
				$MenuImgItem = $PhotoListWrap.find('.menu_img_item'),

				$SlickSlideIndex = $MenuBthThis.parents('.slick-slide'),
				$MenuItemPrev = $SlickSlideIndex.prev('.slick-slide');
                

			$MenuBtn.removeAttr('title').parent().removeClass('active');
			$MenuItemThis.addClass('active').find('.menu_btn').attr('title', '선택됨');
			$SlickSlide.removeClass('prev_item');
			$MenuItemPrev.addClass('prev_item');

			$MenuImgItem.addClass('active').attr('title', '선택됨');
			$MenuImgItem.eq(MenuItemIndex).addClass('active').siblings('.menu_img_item').removeClass('active').removeAttr('title');   
		});
		$('.rowgroup3 .menu_photo_wrap .menu_photo_list').slick({
			slidesToShow: 5, //화면에 출력할 개수
			slidesToScroll: 1, //넘어갈 때 넘어갈 개 수
			speed: 600, //속도
			swipe: true, //터치 유무
			draggable: true,    //마우스로 드레그
			variableWidth:true,
			arrows:false,
			infinite: false,
		});
	});
});