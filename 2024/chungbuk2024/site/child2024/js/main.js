'use strict';

try {
	//제이쿼리가 있으면
	this.jQuery = this.jQuery || undefined;

	//제이쿼리가 있으면
	// eslint-disable-next-line no-undef
	if(jQuery) {
		//$ 중복방지
		(function($) {
			var $window = $(window);
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

				// 비주얼 슬라이드 시작
				var $mainVisualList = $('.main_visual_list'),
					$mainVisualPrev = $('.main_visual_wrap .prev'),
					$mainVisualNext = $('.main_visual_wrap .next'),
					$mainVisualAll = $('.main_visual_wrap .all');

				$mainVisualList.on('beforeChange', function() {
					// 현재 슬라이드에서 애니메이션 클래스 제거
					$mainVisualList.find('.slick-slide').removeClass('animate_slide');
				});
			
				$mainVisualList.on('afterChange', function(event, slick, currentSlide) {
					// 새로운 현재 슬라이드에 애니메이션 클래스 추가
					$mainVisualList.find('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('animate_slide');
				});
				
				$mainVisualList.slick({
					//기본
					autoplay : true,
					speed : 1500,
					autoplaySpeed : 3000,
					dots : false,
					draggable : true,
					swipe : true,
					swipeToSlide : true,
					slidesToShow : 1,
					slidesToScroll : 1,
					variableWidth : false,
					infinite: true,
					arrows : true,
					prevArrow : $mainVisualPrev,
					nextArrow : $mainVisualNext,
					autoArrow : $mainVisualAll,
					pauseText : '정지',
					playText : '재생',
					isRunOnLowIE : true,
					pauseOnHover : true,
					pauseOnSwipe : true,
					pauseOnArrowClick : true,
					centerMode:false,
					zIndex : 1,
					fade: true,
					responsive : [{}]
				});
				
				//운영지원팀 전달 특이사항 (비주얼 mask-image 효과)
				function animateMaskPosition(element, duration) {
					if (document.body.classList.contains('ie11')) {
						return; // IE11에서는 animateMaskPosition 함수 실행 중단
					}
					let start = Date.now();
					let timer = setInterval(function() {
						let timePassed = Date.now() - start;
						let progress = (timePassed / duration) % 1;
				
						// X 값 계산: 0 -> 2 -> 1 -> 0
						let x;
						if (progress < 0.333) {// 0에서 2로
							x = 6 * progress;// 2 / 0.333 ≈ 6
						} else if (progress < 0.666) {// 2에서 1로
							x = 2 - 3 * (progress - 0.333);// 2 - (3 / 0.333 ≈ 3) * (progress - 0.333)
						} else {// 1에서 0으로
							x = 1 - 3 * (progress - 0.666);// 1 - (3 / 0.333 ≈ 3) * (progress - 0.666)
						}
				
						// Y 값 계산: 0 -> 4 -> 6 -> 0
						let y;
						if (progress < 0.333) {// 0에서 6으로
							y = 12 * progress;// 4 / 0.333 ≈ 12
						} else if (progress < 0.666) {// 6에서 -3으로
							y = 4 + 6 * (progress - 0.333);// 4 - (6 / 0.333 ≈ 18) * (progress - 0.666)
						} else {// -3에서 0으로
							y = 6 - 6 * (progress - 0.666) / 0.333;// 6 - 6 (3 / 0.333 ≈ 9) * (progress - 0.666)
						}

						// mask-position과 -webkit-mask-position 업데이트
						var maskPosition = x + 'px ' + y + 'px';
						element.style.maskPosition = maskPosition;
						element.style.webkitMaskPosition = maskPosition;
						
						// Size는 100%에서 98%로 그리고 다시 100%로 변경되는 사이클을 생성
						let scaleSize = 100 - 2 * Math.abs(progress * 2 - 1);// progress가 0.5일 때 최소값 98%에 도달
						var maskSize = scaleSize + '% ' + scaleSize + '%';
						element.style.maskSize = maskSize;
						element.style.webkitMaskSize = maskSize;
				
						if (progress >= 1) clearInterval(timer);
					}, 20);
				}
				
				// visual_img_box 클래스를 가진 모든 요소에 대해 애니메이션 적용
				var elements = document.getElementsByClassName('visual_img_box');
				for (var i = 0; i < elements.length; i++) {
					animateMaskPosition(elements[i], 3000);
				}
			});

			/* rowgroup2 */
			$(function(){
				var $JobMenuList = $('.jop_menu .job_menu_list'),
					$JobItem = $JobMenuList.find('.job_item');
			
				function applyHoverEffect() {
					if ($(window).width() >= 1001) {
						$JobItem.hover(
							function() {
								//마우스가 올라갔을 때
								$(this).removeClass('off').addClass('on');
								$(this).parent('.job_menu_box').removeClass('off').addClass('on');
								$JobItem.not($(this)).addClass('off');
								$JobItem.not($(this)).parent('.job_menu_box').addClass('off');
							},
							function() {
								//마우스가 벗어났을 때
								$(this).removeClass('on');
								$(this).parent('.job_menu_box').removeClass('on');
								$JobItem.removeClass('off');
								$JobItem.parent('.job_menu_box').removeClass('off');
							}
						);
					} else {
						//hover 이벤트 핸들러 제거
						$JobItem.off('mouseenter mouseleave');
					}
				}
				$(window).on('load resize', applyHoverEffect);
			});

			/* rowgroup3 하단 슬릭영역 */
			$(function(){
				var $OldImgList = $('.rowgroup3 .old_img_wrap .old_img_list'),
					$OldControlBox = $('.rowgroup3 .old_img_wrap .old_control_box'),
					$OldPrev = $OldControlBox.find('.prev'),
					$OldNext = $OldControlBox.find('.next'),
					$OldAll = $OldControlBox.find('.all'),
					$OldMoveBtn = $OldControlBox.find('.move_btn');

				$OldImgList.slick({
					accessibility: true, //접근성 여부
					autoplay : true,
					autoplaySpeed : 0,
					speed : 2500,
					dots : false,
					draggable : true,
					swipe : true,
					swipeToSlide : true,
					slidesToShow : 3,
					slidesToScroll : 1,
					variableWidth : true,
					infinite: true,
					arrows : true,
					cssEase: 'linear',
					prevArrow : $OldPrev,
					nextArrow : $OldNext,
					autoArrow : $OldAll,
					pauseText : '정지',
					playText : '재생',
					centerMode: true,  //센터모드
					centerPadding: 0,  //센터모드일때 padding
					pauseOnHover: true, //마우스 오버 했을 때 자동 일시정지 유무
					pauseOnFocus: true, //포커스 갔을때 일시정지 유무
					pauseOnDotsHover: true, //썸네일 마우스 올렸을 때 일시정지 유무
					pauseOnArrowClick:true, //이전 또는 다음 버튼 클릭시 일시중지시킴
					pauseOnDirectionKeyPush: true,
					pauseOnSwipe: true,
					pauseOnDotsClick: true,
					responsive: [
						{
							breakpoint: 1301,
							settings: {
								slidesToShow: 1,
								speed: 2500,
								autoplay : false,
							},
						},{
							breakpoint: 641,
							settings: {
								slidesToShow: 1,
								autoplay: false,
								speed: 1000,
							},
						}
					]
				}).on('breakpoint', function(event, slick, breakpoint) {
					//화면 사이즈 줄였을때 작동
					//1300px일때 슬릭 2.5초 동작을 멈추고 재배치후 다시 실행
					if(breakpoint == 1301 || breakpoint==null){
						$OldImgList.slick('slickPause');
						setTimeout(function(){
							$OldImgList.slick('slickSetOption', 'autoplay', true).slick('slickPlay');
							$OldAll.removeClass('slick-play').addClass('slick-pause').text('정지');
						}, 2500);
					}if(breakpoint == 641){
						//화면사이즈 640px일때 자동재생 멈추기(실시간)
						$OldImgList.slick('slickPause');
						setTimeout(function(){
						}, 0);
					}
				});
				
				//화면사이즈 640px일때 자동재생 멈추기
				$window.on('responsive', function(event) {
					if(event.state == 'phone') {
						$OldImgList.slick('slickPause');
						$OldAll.removeClass('slick-pause').addClass('slick-play').text('재생');
					}
				});

				$OldMoveBtn.on('click', function() {
					// Slick 슬라이더의 내부 track에 대한 CSS transition 변경
					$OldImgList.find('.slick-track').css('transition', 'transform 1000ms linear 0s');
				});
				
				$OldImgList.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
					var totalSlides = slick.$slides.length;
					var isTransitionToFirst = (currentSlide === totalSlides - 1 && nextSlide === 0);
					var isTransitionToLast = (currentSlide === 0 && nextSlide === totalSlides - 1);
			
					if (isTransitionToFirst || isTransitionToLast) {
						$OldImgList.slick('slickSetOption', 'speed', 1000, false);
					} else {
						$OldImgList.slick('slickSetOption', 'speed', 2500, false);
					}
				});
				
			});
			
		// eslint-disable-next-line no-undef
		})(jQuery);
	}
}catch(e) {
	console.error(e);
}

