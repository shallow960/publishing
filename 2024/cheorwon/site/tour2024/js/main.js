/* item1 */
var myAnim;
var myTextAnim;
var Nowprogress = 0;

function Loading() {
	Nowprogress = 0;
	// eslint-disable-next-line no-undef
	var count = $('#count');
	// eslint-disable-next-line no-undef
	myTextAnim = $({Counter: 0}).animate({Counter: 100}, {
		duration: 2500,
		easing: 'linear',
		step: function () {
			count.text(Math.ceil(this.Counter) + '%');
		}
	});
	// eslint-disable-next-line no-undef
	var s = Snap('#animated');
	var progress = s.select('#progress');
	progress.attr({strokeDasharray: '0, 251.2'});
	// eslint-disable-next-line no-undef
	myAnim = Snap.animate(0, 251.2, function (value) {
		progress.attr({'stroke-dasharray': value + ',251.2'});
	}, 2500);
}

function Loadingpause() {
	myAnim.pause();
	myTextAnim.stop(true, false);
	// eslint-disable-next-line no-undef
	$('#count').text(myTextAnim[0].Counter + '%');
	Nowprogress = myTextAnim[0].Counter;
	console.log(myTextAnim[0].Counter);
}

function Loadingresume() {
	var Nowduration = 30 * (100 - Nowprogress);
	// eslint-disable-next-line no-undef
	var count = $('#count');
	// eslint-disable-next-line no-undef
	myTextAnim = $({Counter: Nowprogress}).animate({Counter: 100}, {
		duration: Nowduration,
		easing: 'linear',
		step: function () {
			count.text(Math.ceil(this.Counter) + '%');
		}
	});
	// eslint-disable-next-line no-undef
	var s = Snap('#animated');
	var progress = s.select('#progress');
	var NowDegree = (251.2 / 100) * Nowprogress;
	progress.attr({strokeDasharray: NowDegree + ', 251.2'});
	// eslint-disable-next-line no-undef
	myAnim = Snap.animate(NowDegree, 251.2, function (value) {
		progress.attr({'stroke-dasharray': value + ',251.2'});
	}, Nowduration, function () {

	});
}

/* item2 */
var myAnim2;
var myTextAnim2;
var Nowprogress2 = 0;

function Loading2() {
	Nowprogress2 = 0;
	// eslint-disable-next-line no-undef
	var count2 = $('#count2');
	// eslint-disable-next-line no-undef
	myTextAnim2 = $({Counter: 0}).animate({Counter: 100}, {
		duration: 2500,
		easing: 'linear',
		step: function () {
			count2.text(Math.ceil(this.Counter) + '%');
		}
	});
	// eslint-disable-next-line no-undef
	var s2 = Snap('#animated2');
	var progress2 = s2.select('#progress2');
	progress2.attr({strokeDasharray: '0, 251.2'});
	// eslint-disable-next-line no-undef
	myAnim2 = Snap.animate(0, 251.2, function (value) {
		progress2.attr({'stroke-dasharray': value + ',251.2'});
	}, 2500);
}

function Loadingpause2() {
	myAnim2.pause();
	myTextAnim2.stop(true, false);
	// eslint-disable-next-line no-undef
	$('#count2').text(myTextAnim2[0].Counter + '%');
	Nowprogress2 = myTextAnim2[0].Counter;
	console.log(myTextAnim2[0].Counter);
}

function Loadingresume2() {
	var Nowduration2 = 30 * (100 - Nowprogress2);
	// eslint-disable-next-line no-undef
	var count2 = $('#count2');
	// eslint-disable-next-line no-undef
	myTextAnim2 = $({Counter: Nowprogress2}).animate({Counter: 100}, {
		duration: Nowduration2,
		easing: 'linear',
		step: function () {
			count2.text(Math.ceil(this.Counter) + '%');
		}
	});
	// eslint-disable-next-line no-undef
	var s2 = Snap('#animated2');
	var progress2 = s2.select('#progress2');
	var NowDegree2 = (251.2 / 100) * Nowprogress2;
	progress2.attr({strokeDasharray: NowDegree2 + ', 251.2'});
	// eslint-disable-next-line no-undef
	myAnim2 = Snap.animate(NowDegree2, 251.2, function (value) {
		progress2.attr({'stroke-dasharray': value + ',251.2'});
	}, Nowduration2, function () {

	});
}
//lnb scroll color
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 900) {
        document.documentElement.classList.add('wide_color');
    } else {
        document.documentElement.classList.remove('wide_color');
    }
});
$(window).on('resize', function(){
	if ($('html').width() <= 1800) {
		document.documentElement.classList.add('fixed');
	}esle{
		document.documentElement.classList.remove('fixed');
	}
});



'use strict';

try {
	//제이쿼리가 있으면
	this.jQuery = this.jQuery || undefined;

	//제이쿼리가 있으면

	// eslint-disable-next-line no-undef
	if (jQuery) {
		//$ 중복방지
		
		(function ($) {

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

			//splitting.js
			//텍스트 애니메이션 한글자씩 분리
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

            
			/* rowgroup1 */
			$(function () {
				var $VisualBox = $('.rowgroup1 .visual_box'),
					$MoveControlBox = $VisualBox.find('.move_control_box'),
					$BtnCoverBox = $MoveControlBox.find('.btn_cover_box'),
					$CoverPrev = $BtnCoverBox.find('.prev'),
					$CoverNext = $BtnCoverBox.find('.next'),

					$VisualList = $VisualBox.find('.visual_list'),
					$VisualItem = $VisualList.find('.visual_item'),

					$DacoBox = $VisualBox.find('.daco_box'),
					$VisualControlBox = $DacoBox.find('.visual_control_box'),
					$ConBtn = $VisualControlBox.find('.all'),
					$PageBtn = $VisualControlBox.find('.page_btn'),
					$PageCount = $VisualControlBox.find('.page_count'),
					$PageText = $PageCount.find('.page'),
					$SumText = $PageCount.find('.sum'),
					$PgBtn = $PageBtn.find('.3pg_btn'),
					PgBtnActive = $PgBtn.hasClass('active'),

					$VisualTitle = $VisualItem.find('.title'),
					$VisualTitleSpan = $VisualTitle.find('.ani_text');

				// 페이지 넘버 업데이트 함수
				function updatePageNumber(slick) {
					let _num = (slick.currentSlide || 0) + 1;
					let _slidesToShow = slick.slickGetOption('slidesToShow');
					let _curPage = Math.ceil(_num / _slidesToShow);
					let _totalPage = Math.ceil(slick.slideCount / _slidesToShow);
					$PageText.text('0' + _curPage);
					$SumText.text('0' + _totalPage);
				}

				$VisualList.slick({
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 3000,
					dots: false,
					draggable: false,
					swipe: false, //터치 유무
					swipeToSlide: false, //터치로 밀었을 때 자연스럽게
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: $CoverPrev,
					nextArrow: $CoverNext,
					autoArrow: $ConBtn,
					pauseText: '정지',
					playText: '재생',
					fade: true,
					zIndex : 5,
					pauseOnHover: false, //마우스 오버 했을 때 자동 일시정지 유무
					pauseOnFocus: false, //포커스 갔을때 일시정지 유무
					variableWidth: false,
					pauseOnArrowClick: true,
					pauseOnDotsClick: true,
					pauseOnDirectionKeyPush: true, //방향키 눌렀을때 일시정지
					responsive: [
						{
							breakpoint: 1001,
							settings: {
								swipe: true,
								swipeToSlide: true,
								draggable: true,
								prevArrow: false,
								nextArrow: false,
							},
						},
					]
				});


				// 페이지 로딩 시 한 번 호출하여 초기화
				updatePageNumber($VisualList.slick('getSlick'));

				//슬릭 아이템 개수 확인후 반복문 작업
				for (let i = 1; i < $VisualList.slick('getSlick').slideCount; i++) {
					$PageBtn.append('<button type="button" class="pg_btn">' + (i + 1) + '</button>');
				}

				//버튼 클릭시 해당되는 슬라이드index로 넘기기
				$PageBtn.on('click', '.pg_btn', function () {
					var slideNo = $(this).index();
					$PgBtn.removeClass('active').removeAttr('title', '');
					$VisualList.slick('slickGoTo', slideNo);
					// 클릭한 버튼에 'active' 클래스 추가 또는 제거
					if (!PgBtnActive) {
						$PageBtn.children('.pg_btn').removeClass('active').removeAttr('title', '');
						$(this).addClass('active').attr('title', '선택됨');
					} else {
						$PageBtn.children('.pg_btn').removeClass('active').removeAttr('title', '');
					}
				});

				// 슬라이드 변경 시 'active' 클래스 업데이트
				$VisualList.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

					$PageBtn.children('.pg_btn').removeClass('active').removeAttr('title', '');
					$PageBtn.children('.pg_btn').eq(nextSlide).addClass('active').attr('title', '선택됨');
				});


				// 페이지 넘버 업데이트 이벤트
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				$VisualList.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
					setTimeout(function () {
						updatePageNumber(slick);
					}, 0);
				});

				//텍스트 애니메이션
				// eslint-disable-next-line no-undef
				Splitting({
					target: '[data-splitting]',
					by: 'chars',
					key: null
				});
				$VisualTitleSpan.each(function () {
					splittingTextDelay(this, $(this).data('speed'), $(this).data('speed-delay'));
				});
				/* if (!$('html').is('.ie11')) {
					console.log('not ie11');
					var $LastChar = $('.rowgroup1 .words.chars .word:last-child .char:last-child'),
						LastCharDelay = $LastChar.css('animation-delay'), 
						SecLastCharDelay = parseFloat(LastCharDelay) + 1; 
				}
				 */
			});
			

			/* rowgroup2 */
			$(function () {
				var $thema_tour_box = $('.rowgroup2 .thema_tour_box'),
					$LeftBox = $('.rowgroup2 .left_text_box'),
					$ControlBox = $LeftBox.find('.control_box'),
					$PrevBtn = $ControlBox.find('.prev'),
					$NextBtn = $ControlBox.find('.next'),
					$SlideBtn = $ControlBox.find('.slide_btn'),
					$BthAllBox = $ControlBox.find('.bth_all_box'),
					$AllBtn = $BthAllBox.find('.all'),

					$LeftAniText = $LeftBox.find('.ani_text');
					/* $RightBox = $('.rowgroup2 .right_slick_box'),
					$ThemaTourList = $RightBox.find('.thema_tour_list'),
					$SlickCurrent = $ThemaTourList.find('.slick-current'),
					$OffSlickSlide = $SlickCurrent.prevAll('.slick-slide'),
					$OffClass = $OffSlickSlide.hasClass('off'); */

				/* new */
				var $RightSlickBox = $('.rowgroup2 .right_slick_box2'),
					$BigSlideList = $RightSlickBox.find('.big_slide_list'),
					BigSlideListHtml = $BigSlideList.html(),
					$ThemaSlideList = $RightSlickBox.find('.thema_slide_list');
					/* $ThemaSlideItem = $ThemaSlideList.find('.big_slide_item'); */

				//스크롤 텍스트
				$(function () {
					// 문서가 준비되면 실행됩니다.
					
					// ScrollMagic 컨트롤러를 초기화합니다.
					// eslint-disable-next-line no-undef
					var controller = new ScrollMagic.Controller();
					
					// 애니메이션을 생성합니다.
					// eslint-disable-next-line no-undef
					var wipeAnimation = new TimelineMax();
					if (window.innerWidth > 640) {
						wipeAnimation
							.to('.deco_text.type1', 0, { x: 400 }) // 시작 값
							.to('.deco_text.type1', 1, { x: 0 }) // 종료 값
							.to('.deco_text.type2', 0, { x: 200 })
							.to('.deco_text.type2', 1, { x: 0 });
					}if(window.innerWidth <= 640) {
						wipeAnimation
							.to('.deco_text.type1', 0, { x: 0 }) // 시작 값
							.to('.deco_text.type2', 0, { x: 0 });
					}

						
					// 씬을 만들어서 애니메이션을 핀(pin)하고 연결합니다.
					// eslint-disable-next-line no-undef
					new ScrollMagic.Scene({
						triggerElement: '.rowgroup1', // 트리거 요소를 지정합니다.
						triggerHook: 'onLeave', // 트리거 위치를 지정합니다. (스크롤이 요소를 떠날 때)
						duration: '100%', // 씬의 지속 시간을 지정합니다. (3배로 길어짐)
						markers: false,
					})
					
						.setTween(wipeAnimation) // 애니메이션을 설정합니다.
						/* .addIndicators() // 인디케이터를 추가합니다. (플러그인 필요) */
						.addTo(controller); // 컨트롤러에 추가합니다.
					
					// 윈도우의 리사이즈 이벤트를 처리합니다.
					$(window).on('resize', function(){
						// HTML의 너비가 1001보다 작으면
						if ($('html').width() < 1001) {
							// 컨트롤러가 활성화되어 있다면
							if (controller.enabled()) {
								// 컨트롤러를 비활성화합니다.
								controller.enabled(false);
							}
						} else if (!controller.enabled()) {
							// 컨트롤러가 비활성화되어 있지 않다면
							// 컨트롤러를 활성화합니다.
							controller.enabled(true);
						}
						// 컨트롤러를 업데이트합니다.
						controller.update(true);
					});
				});
				

				//초기로딩 프로세스 애니메이션 실행
				$BigSlideList.on('init', function () {
					Loading();
				});
				$ThemaSlideList.html(BigSlideListHtml);

				$BigSlideList.slick({
					autoplay: true,
					autoplaySpeed: 2500,
					speed: 300,
					infinite: true,
					fade:true,
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: $PrevBtn,
					nextArrow: $NextBtn,
					autoArrow: $AllBtn,
					pauseText: '정지',
					playText: '재생',
					variableWidth:false,
					asNavFor: $ThemaSlideList,
					swipe: false, //터치 유무
					swipeToSlide: false, //터치로 밀었을 때 자연스럽게
					draggable: false,
					//프로세스바 일시정지 속성
					pauseOnArrowClick: true,
					pauseOnDirectionKeyPush: true,
					pauseOnSwipe: false,
					pauseOnDotsClick: true,
					responsive: [
						{
							breakpoint: 1001,
							settings: {
								swipe: true,
								swipeToSlide: true,
								draggable: true,
								pauseOnDirectionKeyPush: true,
								pauseOnSwipe: true,
								pauseOnDotsClick: true,
							},
						},
						{
							breakpoint: 641,
							settings: {
								prevArrow: false,
								nextArrow: false,
								swipe: true,
								swipeToSlide: true,
								draggable: true,
								pauseOnDirectionKeyPush: true,
								pauseOnSwipe: true,
								pauseOnDotsClick: true
							},
						},
					]
				});
				$ThemaSlideList.slick({
					autoplay: false,
					autoplaySpeed: 2500,
					speed: 1000,
					infinite: true,
					fade:false,
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					variableWidth:true,
					asNavFor: $BigSlideList
				});

				$thema_tour_box.on('scroll', function() {
					var $this = $(this);
					if ($this.is('.active')) {
						$this.find('.slick-slider').slick('slickPlay');
					} else {
						$this.find('.slick-slider').slick('slickPause');
					}
				});


				// 메인 비주얼 슬라이드 - 프로그래스바
				$BigSlideList.on('beforeChange', function () {
					var IsAutoplay = $AllBtn.is('.slick-pause');
					if (IsAutoplay) {
						Loading();
					}
					
				});

				//일시정지, 재생
				$AllBtn.on('click', function () {
					var $this = $(this),
						IsPlaying = $this.is('.slick-play');

					if (IsPlaying) {
						Loadingpause();
					} else {
						Loadingresume();
					}
				});

				//이전, 다음버튼
				$SlideBtn.on('click', function () {
					var IsPlaying = $AllBtn.is('.slick-play');
					if (IsPlaying) {
						Loadingpause();
					}
				});


				// eslint-disable-next-line no-undef
				Splitting({
					target: '[data-splitting]',
					by: 'chars',
					key: null
				});
				$LeftAniText.each(function () {
					splittingTextDelay(this, $(this).data('speed'), $(this).data('speed-delay'));
				});
				/* if (!$('html').is('.ie11')) {
					var $LastChar2 = $('.rowgroup2 .left_text_box .words.chars .word:last-child .char:last-child'),
						LastCharDelay2 = $LastChar2.css('animation-delay'), 
						SecLastCharDelay = parseFloat(LastCharDelay2) + 1; 
				} */
				

				/* 철원9경 */
				var $SceneSlickBox = $('.rowgroup2 .scene_slick_box'),
					/* $SceneBoxTitle = $SceneSlickBox.find('.box_title'), */
					$SceneControlBox = $SceneSlickBox.find('.scene_control_box'),
					$ScenePrev = $SceneControlBox.find('.prev'),
					$SceneNext = $SceneControlBox.find('.next'),
					$SceneImgList = $SceneSlickBox.find('.scene_img_list');

				/* $SceneImgList.on('init', function () {
					$ScenePrev.addClass('ch');
				}); */

				$SceneImgList.slick({
					slidesToShow: 5,
					slidesToScroll: 1,
					variableWidth: true,
					infinite: false,
					prevArrow: $ScenePrev,
					nextArrow: $SceneNext,
					speed: 1000,
					centerMode: false,  //센터모드
					centerPadding: '0',  //센터모드일때 padding
					swipe: false,
					swipeToSlide: false,
					draggable: false,
					responsive: [
						{
							breakpoint: 1601,
							settings: {
								slidesToShow: 4,
							}
						},
						{
							breakpoint: 1401,
							settings: {
								slidesToShow: 3,
							}
						},
						{
							breakpoint: 1001,
							settings: {
								slidesToShow: 3,
								variableWidth: false,
								swipe: true,
								swipeToSlide: true,
								draggable: true,
							}
						},
						{
							breakpoint: 801,
							settings: {
								slidesToShow: 2,
								variableWidth: false,
								swipe: true,
								swipeToSlide: true,
								draggable: true,
							}
						},
						{
							breakpoint: 641,
							settings: {
								slidesToShow: 3,
								centerMode: true,
								focusOnSelect: true,
								variableWidth: true,
								swipe: true,
								swipeToSlide: true,
								draggable: true,
								infinite: true,
								prevArrow: false,
								nextArrow: false,
							}
						},
					]
				});

				$SceneImgList.on('afterChange', function(event, slick, currentSlide){
					if (currentSlide + slick.options.slidesToShow === slick.slideCount) {
						$ScenePrev.addClass('ch');
						$SceneNext.addClass('ch');
					} else {
						$ScenePrev.removeClass('ch');
						$SceneNext.removeClass('ch');
					}
					if (currentSlide != 0) {
						$ScenePrev.addClass('ch');
					} else {
						$ScenePrev.removeClass('ch');
					}
				});
				
			});

			/* rowgroup3 */
			$(function () {
				var $FestivalWrap = $('.rowgroup3 .festival_wrap'),
					$FestivalRight = $FestivalWrap.find('.festival_right_box'),
					$FestivalControlBox = $FestivalRight.find('.festival_control_box'),
					$ConPrev = $FestivalControlBox.find('.prev'),
					$MoveBtn = $FestivalControlBox.find('.move_btn'),
					$ConNext = $FestivalControlBox.find('.next'),
					$ConAll = $FestivalControlBox.find('.all'),
					$FestivalList = $FestivalRight.find('.festival_list'),
					$BoxTitle = $FestivalRight.find('.text_box .box_title'),
					$FestivalMainList = $FestivalRight.find('.festival_main_list'),
					$FestivalSlickText = $FestivalRight.find('.festival_slick_text'),


					FestivalMainListHtml = $FestivalMainList.html();
					/* 적용할 요소에 가져온 아이템 넣기  */
				$FestivalList.html(FestivalMainListHtml);

				if(window.innerWidth > 1001){
					
					var $FestivalItemFirst = $FestivalList.find('.festival_main_item:first-child'),
						//서브아이템 첫번쨰 자식 클론 생성
						FestivalItemFirstClone = $FestivalItemFirst.clone();
					//서브아이템 복제한 첫번째 자식 클론 적용할 리스트 끝에 적용(append)
					$FestivalList.append(FestivalItemFirstClone);
					//첫번째 요소 삭제(복제후 첫번쨰 자식 삭제)
					$FestivalItemFirst.remove();
					
				}

				//가로 스크롤 애니메이션
				$(function () {
					// 문서가 준비되면 실행됩니다.
					
					// ScrollMagic 컨트롤러를 초기화합니다.
					// eslint-disable-next-line no-undef
					var controller2 = new ScrollMagic.Controller();
					
					// 애니메이션을 생성합니다.
					// eslint-disable-next-line no-undef
					var wipeAnimation2 = new TimelineMax();
					if (window.innerWidth > 640) {
						wipeAnimation2
							.to('.text_before .text', 0, {x: 400})  //시작 값
							.to('.text_before .text', 1, {x: 0}); //종료값
					}if(window.innerWidth <= 640) {
						wipeAnimation2
							.to('.text_before .text', 0, {x: 0});  //시작 값
					}
						
						
					// 씬을 만들어서 애니메이션을 핀(pin)하고 연결합니다.
					// eslint-disable-next-line no-undef
					new ScrollMagic.Scene({
						triggerElement: '.scene_slick_box', // 트리거 요소를 지정합니다.
						triggerHook: 'onLeave', // 트리거 위치를 지정합니다. (스크롤이 요소를 떠날 때)
						duration: '50%', //트리거 요소 범위
						markers: false,
					})
					/* .setPin(".scene_slick_wrap") // 요소를 핀(pin)합니다. */
						.setTween(wipeAnimation2) // 애니메이션을 설정합니다.
						/* .addIndicators() // 인디케이터를 추가합니다. (플러그인 필요) */
						.addTo(controller2); // 컨트롤러에 추가합니다.
					
					// 윈도우의 리사이즈 이벤트를 처리합니다.
					$(window).on('resize', function(){
						// HTML의 너비가 801보다 작으면
						if ($('html').width() < 1001) {
							// 컨트롤러가 활성화되어 있다면
							if (controller2.enabled()) {
								// 컨트롤러를 비활성화합니다.
								controller2.enabled(false);
							}
						} else if (!controller2.enabled()) {
							// 컨트롤러가 비활성화되어 있지 않다면
							// 컨트롤러를 활성화합니다.
							controller2.enabled(true);
						}
						// 컨트롤러를 업데이트합니다.
						controller2.update(true);
					});
				});

				$FestivalMainList.on('init', function (event, slick) {
					var $crtMapSlide = $(slick.$slides[0]),
						crtMapSlideData = $crtMapSlide.attr('data-map-slide');
					
			
					// .festival_text_item의 data-map-desc 속성과 currentSlideMapSlide 값이 동일한 요소에 active 클래스를 추가합니다.
					$('.festival_text_item[data-map-desc="' + crtMapSlideData + '"]').addClass('active');

					// 추가 작업 수행
					Loading2(); // Loading2 함수 호출
				});



				/* 작은슬릭 */
				$FestivalList.slick({
					autoplay: false,
					autoplaySpeed: 2500,
					speed: 500,
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: false,
					fade:false,
					variableWidth: true,
					infinite: true,
					dots: false,
					asNavFor: $FestivalMainList,
					swipe: false, //터치 유무
					swipeToSlide: false, //터치로 밀었을 때 자연스럽게
					draggable:false,
					responsive: [
						{
							breakpoint: 1501,
							settings: {
								slidesToShow: 3,
							}
						},
						{
							breakpoint: 1251,
							settings: {
								slidesToShow: 2,
							}
						},
						{
							breakpoint: 1001,
							settings: {
								slidesToShow: 4,
								speed: 800,
							}
						},
						{
							breakpoint: 801,
							settings: {
								slidesToShow: 3,
								speed: 800,
							}
						},
					]

				});

				$FestivalMainList.slick({
					autoplay:true,
					autoplaySpeed: 2500,
					speed: 1500,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					variableWidth: false,
					infinite: true,
					pauseOnFocus: true,
					pauseOnArrowClick: true,
					pauseOnDirectionKeyPush: true,
					pauseOnSwipe: false,
					pauseOnDotsClick: true,
					prevArrow: $ConPrev,
					nextArrow: $ConNext,
					autoArrow: $ConAll,
					asNavFor: $FestivalList,
					pauseText: '정지',
					playText: '재생',
					swipe: false, //터치 유무
					swipeToSlide: false, //터치로 밀었을 때 자연스럽게
					draggable:false,
					
					responsive: [
						{
							breakpoint: 1001,
							settings: {
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable:true,
							}
						},
						{
							breakpoint: 641,
							settings: {
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable:true,
								prevArrow: false,
								nextArrow: false,
							}
						},
					]
				});
				
				$(document).ready(function() {
					var lastActiveIndex2 = $('.festival_list .slick-slide.slick-active').last().index();
					$('.festival_list .slick-slide').eq(lastActiveIndex2).addClass('off');
					
					if (window.innerWidth <= 1500) {
						// 다음 슬라이드로 이동하는 경우
						$('.festival_list .slick-slide').eq(lastActiveIndex2).removeClass('off');
						$('.festival_list .slick-slide').eq(lastActiveIndex2 + 1).addClass('off');
					}
					if (window.innerWidth <= 1000) {
						// 다음 슬라이드로 이동하는 경우
						$('.festival_list .slick-slide').eq(lastActiveIndex2 + 1).removeClass('off');
					}

					$FestivalMainList.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
						// 활성화된 슬라이드 중에서 마지막 슬라이드의 인덱스
						var lastActiveIndex = $('.festival_list .slick-slide.slick-active').last().index();
						var $currentslide = $(slick.$slides[currentSlide]);

						$('.festival_list .slick-slide').removeClass('off');
						
						if (nextSlide > currentSlide && nextSlide >= 0) {
							// 다음 슬라이드로 이동하는 경우
							$currentslide.removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex).addClass('off');
						}
						if (currentSlide > nextSlide) {
							// 이전 슬라이드로 이동하는 경우
							$currentslide.removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex).addClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex + 1).addClass('off');
						}
						if (nextSlide > currentSlide && nextSlide >= 0 && window.innerWidth <= 1500) {
							// 다음 슬라이드로 이동하는 경우
							$currentslide.removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex).removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex + 1).addClass('off');
						}
						if (currentSlide > nextSlide && window.innerWidth <= 1500) {
							// 이전 슬라이드로 이동하는 경우
							$currentslide.removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex).removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex + 1).addClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex + 2).addClass('off');
						}
						if (nextSlide > currentSlide && nextSlide >= 0 && window.innerWidth <= 1000) {
							// 다음 슬라이드로 이동하는 경우
							$currentslide.removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex).removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex + 1).removeClass('off');
						}
						if (currentSlide > nextSlide && window.innerWidth <= 1000) {
							// 이전 슬라이드로 이동하는 경우
							$currentslide.removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex).removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex + 1).removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex + 2).removeClass('off');
						}
						/* if (currentSlide > nextSlide && window.innerWidth <= 1500) {
							
							$currentslide.removeClass('off');
							$('.festival_list .slick-slide').eq(lastActiveIndex).addClass('off');
						} */
					});

				});

				// 메인 비주얼 슬라이드 - 프로그래스바, 텍스트
				$FestivalMainList.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					var $nextSlide = $(slick.$slides[nextSlide]),
						nextMapSlideData = $nextSlide.attr('data-map-slide');

					$FestivalSlickText.find('.festival_text_item[data-map-desc="'+nextMapSlideData+'"]').addClass('active').siblings('.festival_text_item').removeClass('active');
					
				
					var IsAutoplay = $ConAll.is('.slick-pause');
					if (IsAutoplay) {
						Loading2();
					}
				});

				//일시정지, 재생
				$ConAll.on('click', function () {
					var $this = $(this),
						IsPlaying = $this.is('.slick-play');
					if (IsPlaying) {
						Loadingpause2();
						$ConAll.attr('title', '재생');
					} else {
						Loadingresume2();
						$ConAll.attr('title', '정지');
					}
				});

				//이전, 다음버튼
				$MoveBtn.on('click', function () {
					Loadingpause2();
				});

				$FestivalMainList.on({
					mousedown: function () {
						var IsPlaying = $ConAll.is('.slick-pause');

						if (IsPlaying) {
							$ConAll.click();
							console.log(Nowprogress2);
						}
					}
				});

				// eslint-disable-next-line no-undef
				Splitting({
					target: '[data-splitting]',
					by: 'chars',
					key: null
				});
				$BoxTitle.each(function () {
					splittingTextDelay(this, $(this).data('speed'), $(this).data('speed-delay'));
				});
				/* if (!$('html').is('.ie11')) {
					var $LastChar = $('.rowgroup3 .festival_wrap .festival_right_box .words.chars .word:last-child .char:last-child'),
						LastCharDelay = $LastChar.css('animation-delay'), 
						SecLastCharDelay = parseFloat(LastCharDelay) + 1; 
				} */
				
			});
			
			/* rowgroup4 */
			$(function(){
				/* 철원 여행도우미 */
				var $GuideInnerBox = $('.rowgroup4 .guide_inner_box'),
					$GuideBox = $GuideInnerBox.find('.guide_box'),
					$GuideList = $GuideBox.find('.guide_list'),
					$GuideControl = $GuideBox.find('.guide_control'),
					$GuidePrev = $GuideControl.find('.prev'),
					$GuideNext = $GuideControl.find('.next'),

					$TourGuideBox = $GuideInnerBox.find('.tour_guide_box'),
					$GuideBbsItem  = $TourGuideBox.find('.guide_bbs .guide_bbs_list .guide_bbs_item'),
					/* $TourTabList = $TourGuideBox.find(' .guide_bbs_tab .tab_list'),
					$TabItem = $TourTabList.find('.tab_item'),
					$TabBtn = $TabItem.find('.tab_btn'), */

					$GuideTabItem = $TourGuideBox.find('.guide_bbs_tab .tab_item'),
					$GuideTabBtn = $GuideTabItem.find('.tab_btn'),
					
					$GuideSlickList = $TourGuideBox.find('.guide_slick .guide_slick_list'),
					$GuideControlBox = $TourGuideBox.find('.guide_slick .guide_control_box'),
					$SlickCountBox = $GuideControlBox.find('.slick_count'),
					$SlickCountPage = $SlickCountBox.find('.page'),
					$SlickCountSum = $SlickCountBox.find('.sum'),
					$GuideSlickPrev = $GuideControlBox.find('.prev'),
					$GuideSlickNext = $GuideControlBox.find('.next'),
					$GuideSlickAll = $GuideControlBox.find('.all'),
					
					$BlogList = $('.blog_box .blog_list');

				/* 여행도우미 퀵메뉴 */
				$GuideList.slick({
					autoplay:false,
					speed: 500,
					slidesToShow: 9,
					slidesToScroll: 1,
					fade: false,
					variableWidth: false,
					infinite: false,
					
					prevArrow: $GuidePrev,
					nextArrow: $GuideNext,
					responsive: [
						{
							breakpoint: 1001,
							settings: {
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable:true,
								slidesToShow: 8,
							}
						},
						{
							breakpoint: 801,
							settings: {
								slidesToShow: 6,
							}
						},
						{
							breakpoint: 641,
							settings: {
								slidesToShow: 5,
								infinite: true,
							}
						},
						{
							breakpoint: 501,
							settings: {
								slidesToShow: 3,
								infinite: true,
							}
						},
					]

				});

				/* 미니 팝업창 */
				$GuideSlickList.slick({
					autoplay:true,
					autoplaySpeed:2000,
					speed: 1000,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					variableWidth: false,
					infinite: true,
					zIndex : 5,
					prevArrow: $GuideSlickPrev,
					nextArrow: $GuideSlickNext,
					autoArrow: $GuideSlickAll,
					pauseText: '정지',
					playText: '재생',
					current: $SlickCountPage,
					total: $SlickCountSum,
				});

				/* 지금철원은 */
				$BlogList.slick({
					autoplay:false,
					autoplaySpeed:2000,
					speed: 1000,
					slidesToShow: 4,
					slidesToScroll: 1,
					fade: false,
					variableWidth: true,
					infinite: false,
					arrows:false,
					responsive: [
						{
							breakpoint: 1001,
							settings: {
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable:true,
								slidesToShow: 2,
							}
						},
						{
							breakpoint: 1001,
							settings: {
								slidesToShow: 1,
							}
						},
					]
				});
				
				$GuideTabBtn.on('click',function(){
					var $ItemThis = $(this),
						TapItemIndex = $GuideTabBtn.index(this);

					$GuideTabBtn.removeAttr('title').parent().removeClass('active');
					//tap_item = 탭메뉴 버튼
					$ItemThis.parent().addClass('active').find('.tab_item').attr('title', '선택됨');
					//탭 내용

					/* $GuideBbsItem.addClass('active').attr('title', '열림'); */
					$GuideBbsItem.hide().removeClass('active').removeAttr('title').fadeOut(400); // 모든 아이템 숨기기
					//tap_text_item = 탭내용 박스, TapItemIndex = 메뉴의 index와 박스index 
					$GuideBbsItem.eq(TapItemIndex).fadeIn(400).addClass('active').attr('title', '열림')/* .siblings('.guide_bbs_item').removeClass('active').removeAttr('title') */;
				});


			});
			$(function() {
				$('.top_button').click(function() {
					$('html, body').animate({
						scrollTop : 0
					}, 500);
					return false;
				});
			});
		// eslint-disable-next-line no-undef
		})(jQuery);
	}
} catch (e) {
	console.error(e);
}
