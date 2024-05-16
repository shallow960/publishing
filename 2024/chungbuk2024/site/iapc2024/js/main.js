'use strict';

try {
	//제이쿼리가 있으면
	this.jQuery = this.jQuery || undefined;

	//제이쿼리가 있으면
	// eslint-disable-next-line no-undef
	if(jQuery) {
		//$ 중복방지
		(function($) {
			//그룹 스크롤 효과 시작
			$(document).ready(function () {
				$('.waypoint').waypoint(function (direction) {
					$(this.element)[(direction === 'down') ? 'addClass' : 'removeClass']('active');
				}, {
					offset: '85%'
				});
				$('.waypoint2').waypoint(function (direction) {
					$(this.element)[(direction === 'down') ? 'addClass' : 'removeClass']('active');
				}, {
					offset: '70%'
				});
			});
			
			/* rowgroup1 */
			$(function() {
				var $MainVisualWrap = $('.rowgroup1 .main_visual_wrap'),
					$MainVisualList = $MainVisualWrap.find('.main_visual_list'),
					$VisualControlBox = $MainVisualWrap.find('.visual_control_box'),
					$PageBox = $VisualControlBox.find('.page_box'),
					$ButtonBox = $VisualControlBox.find('.button_box'),
					$ButtonAll = $ButtonBox.find('.all');
			
				$MainVisualList.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1500,
					prevArrow: false,
					nextArrow: false,
					autoArrow: $ButtonAll,
					pauseText : '정지',
					playText : '재생',
					arrows: true,
					autoplay: true,
					autoplaySpeed: 1500,
					fade: false,
					infinite: true
				});
			
				// 슬라이드 수에 따라 페이지 버튼 생성
				for (let i = 1; i < $MainVisualList.slick('getSlick').slideCount; i++) {
					$PageBox.append('<div class="page_btn_box"><button type="button" class="page_btn"><span>' + (i + 1 + 'p') + '</span></button></div>');
				}
			
				// 버튼 클릭시 해당되는 슬라이드index로 넘기기
				$PageBox.on('click', '.page_btn', function () {
					var slideNo = $(this).parent().index();
					$MainVisualList.slick('slickGoTo', slideNo);
					updatePageButtons(slideNo);
				});
			
				// 슬라이드 넘어가기전에 함수호출
				$MainVisualList.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					updatePageButtons(nextSlide);
				});
			
				// 슬라이드 버튼 함수 업데이트
				function updatePageButtons(slideIndex) {
					$PageBox.find('.page_btn').removeClass('active').removeAttr('title');
					$PageBox.find('.page_btn').eq(slideIndex).addClass('active').attr('title', '선택됨');
				}
			
			});
			

			/* rowgroup3 */
			$(function() {
				var $MenuItemList = $('.rowgroup3 .quic_menu_wrap .menu_item_list');
				/* $MenuItem = $MenuItemList.find('.menu_item'); */

				$MenuItemList.slick({
					slidesToShow: 7, //화면에 출력할 개수
					slidesToScroll: 1, //넘어갈 때 넘어갈 개수
					rows: 1, //여러줄
					speed: 500,
					prevArrow: false,
					nextArrow: false,
					arrows: false,   //컨트롤러 사용 유무
					autoplay: false,
					autoplaySpeed: 500,
					infinite: false,
					centerMode: false,  //센터모드
					variableWidth: false, //width를 css로 제어
					responsive: [
						{
							breakpoint: 1001,
							settings: {
								slidesToShow: 1,
								slidesPerRow: 5, //여러줄일 때 한줄의 출력 개수
								rows: 2, //여러줄
								variableWidth: true, //width를 css로 제어
							},
						},
						{
							breakpoint: 801,
							settings: {
								slidesPerRow: 4, //여러줄일 때 한줄의 출력 개수
								rows: 2, //여러줄
								variableWidth: true, //width를 css로 제어
							},
						},
						{
							breakpoint: 641,
							settings: {
								slidesToShow: 4, //화면에 출력할 개수
								slidesPerRow: 1, //여러줄일 때 한줄의 출력 개수
								rows: 1, //여러줄
								variableWidth: true, //width를 css로 제어
							},
						},
						{
							breakpoint: 581,
							settings: {
								slidesToShow: 3, //화면에 출력할 개수
								slidesPerRow: 1, //여러줄일 때 한줄의 출력 개수
								rows: 1, //여러줄
								variableWidth: true, //width를 css로 제어
							},
						},
						{
							breakpoint: 431,
							settings: {
								slidesToShow: 2, //화면에 출력할 개수
								slidesPerRow: 1, //여러줄일 때 한줄의 출력 개수
								rows: 1, //여러줄
								variableWidth: true, //width를 css로 제어
							},
						},
					], 
				});
			});

			/* rowgroup4 */
			$(function() {
				var $BannerWrap = $('.rowgroup4 .banner_wrap'),
					$BannerList = $BannerWrap.find('.banner_list'),
					$ControlBtnBox = $BannerWrap.find('.control_btn_box'),
					$ControlBtnBoxPrev = $ControlBtnBox.find('.prev'),
					$ControlBtnBoxNext = $ControlBtnBox.find('.next');

				
				$BannerList.slick({
					slidesToShow: 4, //화면에 출력할 개수
					slidesToScroll: 1, //넘어갈 때 넘어갈 개수
					speed: 500,
					arrows: true,   //컨트롤러 사용 유무
					prevArrow: $ControlBtnBoxPrev,
					nextArrow: $ControlBtnBoxNext,
					autoplay: false,
					autoplaySpeed: 500,
					fade: false,    //페이드 효과
					infinite: true,
					variableWidth: false,
					responsive: [
						{
							breakpoint: 1401,
							settings: {
								slidesToShow: 3, //화면에 출력할 개수
							},
						},
						{
							breakpoint: 641,
							settings: {
								slidesToShow: 2, //화면에 출력할 개수
							},
						},
						{
							breakpoint: 501,
							settings: {
								slidesToShow: 1, //화면에 출력할 개수
							},
						},
					],
				});

			});
		// eslint-disable-next-line no-undef
		})(jQuery);
	}
}catch(e) {
	console.error(e);
}

