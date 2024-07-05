(function ($) {
	'use strict';
    
	var $window = $(window),
		$document = $(document),
		$html = $('html'),
		$head = $('head'),
		$screen = $.screen,
		$inArray = $.inArray;
    
	$(function () {
		$(document).ready(function () {
			$('.waypoint').waypoint(function (direction) {
				$(this.element)[(direction === 'down') ? 'addClass' : 'removeClass']('active');
			}, {
				offset: '90%'
			});
		});
		/* rowgroup1 */
		$(function () {
			var $Rowgroup1 = $('.rowgroup1'),
				$VisualList = $Rowgroup1.find('.main_visual_wrap .main_visual_list'),
				$ControlBox = $Rowgroup1.find('.control_box'),
				$Move = $ControlBox.find('.move'),
				$All = $ControlBox.find('.all'),
				$ControlText = $ControlBox.find('.control_text'),
				$VisualTextBox = $Rowgroup1.find('.visual_text_box'),
				$MinCount = $ControlText.find('.min'),
				$MaxCount = $ControlText.find('.max'),
				$Progress = $ControlText.find('.progress'),
				$ProgressBar = $Progress.find('.bar');
            
			// 페이지 넘버 업데이트 함수
			function updatePageNumber(slick) {
				var _num = (slick.currentSlide || 0) + 1;
				var _slidesToShow = slick.slickGetOption('slidesToShow');
				var _curPage = ('0' + Math.ceil(_num / _slidesToShow)).slice(-2); // 2자리 숫자로 표시
				var _totalPage = ('0' + Math.ceil(slick.slideCount / _slidesToShow)).slice(-2); // 2자리 숫자로 표시
				$MinCount.text(_curPage);
				$MaxCount.text(_totalPage);
			}

			$VisualList.slick({
				slidesToShow: 1, //화면에 출력할 개수
				slidesToScroll: 1, //넘어갈 때 넘어갈 개 수
				autoplay: false, //자동재생
				autoplaySpeed: 3000, //자동재생
				prevArrow: $ControlBox.find('.prev'),
				nextArrow: $ControlBox.find('.next'),
				autoArrow: $ControlBox.find('.all'),
				pauseText: '정지',
				playText: '재생',
				asNavFor: $VisualTextBox,
				focusOnSelect: true,
				centerMode: false,  //센터모드
				Dragg: false,
				fade: true,
				speed: 1500, //속도
				rows:1,
				infinite: true,
			});
			$VisualTextBox.slick({
				slidesToShow: 1, //화면에 출력할 개수
				slidesToScroll: 1, //넘어갈 때 넘어갈 개 수
				autoplay: false, //자동재생
				autoplaySpeed: 3000, //자동재생
				arrows: false,
				speed: 1500, //속도
				fade: true,
			});
			
			// 페이지 로딩 시 한 번 호출하여 초기화
			updatePageNumber($VisualList.slick('getSlick'));
			// 넘길시 페이지 넘버 업데이트 이벤트
			$VisualList.on('init reInit afterChange', function (event, slick) {
				updatePageNumber(slick);
			});

			$(function() {
				var caseby = false,
					slideCount = 0,
					progressInterval,
					increment = 1, // 1%씩 증가
					currentProgress = 0, // 현재 프로그래스 바의 너비
					isAllPaused = false; // All 버튼으로 일시 정지 여부
			
				// 슬릭 슬라이더 초기화
				$VisualList.slick({
					autoplay: true,
					autoplaySpeed: 2000,
					arrows: true,
					dots: true
				});
			
				// 슬라이더 초기화 시
				$VisualList.on('init', function(event, slick) {
					slideCount = slick.slideCount;
					startProgressBar(slick.options.autoplaySpeed, currentProgress);
				});
			
				// 슬라이드 변경 전
				$VisualList.on('beforeChange', function(event) {
					if (isAllPaused) {
						event.preventDefault(); // 슬릭 넘김을 막음
						resetProgressBar(); 
					}
				});
			
				// 슬라이드 변경 후
				$VisualList.on('afterChange', function (event, slick) {
					if (!isAllPaused && !$Move.data('resetInProgress')) { // 진행 바가 중복 실행되지 않도록 조건 추가
						startProgressBar(slick.options.autoplaySpeed, 0); // 새로운 슬라이드에서 0부터 시작
					}
				});
			
				// 프로그래스 바 시작
				function startProgressBar(duration, startWidth) {
					clearInterval(progressInterval); // 이전 인터벌 초기화
					var width = startWidth;
					var intervalTime = duration / 100; // 각 1%를 증가시킬 시간 간격 계산
					progressInterval = setInterval(function() {
						width += increment;
						currentProgress = width; // 현재 진행 상황 저장
						$ProgressBar.css('width', width + '%');
						if (width >= 100) {
							clearInterval(progressInterval);
						}
					}, intervalTime);
				}
			
				// 프로그래스 바 리셋
				function resetProgressBar() {
					clearInterval(progressInterval);
					currentProgress = 0;
					$ProgressBar.css('width', '0%');
				}
			
				// 슬라이더 재생 이벤트 핸들러
				$VisualList.on('play', function() {
					startProgressBar($VisualList.slick('slickGetOption', 'autoplaySpeed'), currentProgress);
				});
			
				// 슬라이더 일시 정지 이벤트 핸들러
				$VisualList.on('pause', function () {
					clearInterval(progressInterval); // 슬라이더가 멈출 때 진행 바도 멈춤
				});
			
				// $All 버튼 클릭 이벤트 핸들러
				$All.on('click', function () {
					if (caseby) {
						$VisualList.slick('slickPlay');
						caseby = false;
						isAllPaused = false;
						startProgressBar($VisualList.slick('slickGetOption', 'autoplaySpeed'), currentProgress);
					} else {
						$VisualList.slick('slickPause');
						caseby = true;
						isAllPaused = true;
						clearInterval(progressInterval); // 진행 바 인터벌 정지
					}
				});
				$Move.on('click', function () {
					resetProgressBar(); // bar 초기화
					$Move.data('resetInProgress', true); // resetInProgress 플래그 설정
					setTimeout(function () {
						if ($All.hasClass('slick-play')) { // $All 버튼이 slick-play 클래스를 가지고 있는지 확인
							$VisualList.slick('slickPause'); // 슬릭 일시 정지
						} else {
							startProgressBar(2000, 0); // 2초 후에 프로그래스 바 시작
						}
						$Move.data('resetInProgress', false); // resetInProgress 플래그 해제
					}, 2000);
				});
				
				// 페이지 로딩 시 프로그래스 바 시작
				$(window).on('load', function() {
					startProgressBar(2000, 0); // 첫 슬라이드 시간과 같은 2000ms에서 시작
				});
				updatePageNumber($VisualList.slick('getSlick'));
				$VisualList.on('afterChange', function (event, slick) {
					updatePageNumber(slick);
				});
			});
		});

		/* rowgroup2 */
		$(function(){
			var $ListTabBox = $('.rowgroup2 .list_tab_box'),
				$TabItem = $ListTabBox.find('.tab_list .tab_item'),
				$TabBtn = $TabItem.find('.tab_btn'),
				$TabBoxItem = $ListTabBox.find('.tab_textbox_list .tab_box_item');
			$TabBtn.on('click',function(){
				var $this = $(this),
					index = $TabBtn.index(this);

				$this.parent('.tab_item').addClass('active').find('.tab_btn').attr('title','선택됨');
				$this.parent('.tab_item').siblings('.tab_item').removeClass('active').find('.tab_btn').removeAttr('title','');
				$TabBoxItem.removeClass('active').removeAttr('title','');
				$TabBoxItem.eq(index).addClass('active').attr('title','선택됨');
			});
			$TabBoxItem.each(function(){
				var $this = $(this),
					$TabTextList = $this.find('.tab_text_list');
					
				$TabTextList.slick({
					arrows: false,   //컨트롤러 사용 유무
					autoplay: false,
					speed: 1000,
					slidesToShow: 4, //화면에 출력할 개수
					slidesToScroll: 1, //넘어갈 때 넘어갈 개수
					swipe: false, //터치 유무
					swipeToSlide: false, //터치로 밀었을 때 자연스럽게
					draggable: false,    //마우스로 드레그
					variableWidth: true, //width를 css로 제어
					infinite: false,
					responsive: [
						{
							breakpoint: 1201,
							settings: {
								slidesToShow: 3,
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable: true,    //마우스로 드레그
							},
						},
						{
							breakpoint: 901,
							settings: {
								slidesToShow: 2,
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable: true,    //마우스로 드레그
							},
						},
						{
							breakpoint: 471,
							settings: {
								slidesToShow: 1,
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable: true,    //마우스로 드레그
							},
						},
					],  //반응형
				}).resize();
			});
		});
		/* rowgroup3 */
		$(function(){
			var $SnsTabItem = $('.rowgroup3 .sns_tab_list .sns_tab_item'),
				$SnsBtn = $SnsTabItem.find('.sns_btn'),
				$SnsTextList = $('.rowgroup3 .sns_text_list'),
				$SnsTextItem = $SnsTextList.find('.sns_text_item');
			$SnsBtn.on('click',function(){
				var $this = $(this),
					index = $SnsBtn.index(this);

				$this.parent('.sns_tab_item').addClass('active').find('.sns_btn').attr('title','선택됨');
				$this.parent('.sns_tab_item').siblings('.sns_tab_item').removeClass('active').find('.sns_btn').removeAttr('title','');
				$SnsTextItem.removeClass('active').removeAttr('title','');
				$SnsTextItem.eq(index).addClass('active').attr('title','선택됨');
			});
			$SnsTextItem.each(function(){
				var $this = $(this),
					$TabSlide = $this.find('.tap_slide');
					
				$TabSlide.slick({
					arrows: false,   //컨트롤러 사용 유무
					autoplay: false,
					speed: 1000,
					slidesToShow: 4, //화면에 출력할 개수
					slidesToScroll: 1, //넘어갈 때 넘어갈 개수
					swipe: false, //터치 유무
					swipeToSlide: false, //터치로 밀었을 때 자연스럽게
					draggable: false,    //마우스로 드레그
					variableWidth: true, //width를 css로 제어
					infinite: false,
					responsive: [
						{
							breakpoint: 961,
							settings: {
								slidesToShow: 3,
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable: true,    //마우스로 드레그
							},
						},
						{
							breakpoint: 721,
							settings: {
								slidesToShow: 2,
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable: true,    //마우스로 드레그
							},
						},
						{
							breakpoint: 641,
							settings: {
								slidesToShow: 2,
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable: true,    //마우스로 드레그
							},
						},
						{
							breakpoint: 421,
							settings: {
								slidesToShow: 1,
								swipe: true, //터치 유무
								swipeToSlide: true, //터치로 밀었을 때 자연스럽게
								draggable: true,    //마우스로 드레그
							},
						},
					],  //반응형
				}).resize();
			});
			
		});
		


		
		/*  progressbar 예시

var popupProgressInterval;

$popupList.on('init',function(event, slick, currentSlide, nextSlide){
    $popupTotal.text(slick.$slides.length);
    if(slick.$slides.length < 2){
        $popupAuto.text('재생').addClass('slick-play');
    }else{
        $popupAuto.text('정지').addClass('slick-pause');
    }
}).on('beforeChange',function(){
    $popupAuto.off('click');
    clearInterval(popupProgressInterval);
    $popupProgressbar.removeAttr('style');
    $popupProgress = 0;
}).on('init reInit afterChange',function(event, slick, currentSlide, nextSlide){
    var current = (currentSlide?currentSlide:0) + 1;
    $popupCurrent.text(current);
    clearInterval(popupProgressInterval);
    $popupProgressbar.removeAttr('style');
    $popupProgress = 0;
    if(slick.$slides.length < 2) return false;
    popupProgressInterval = setInterval(popupProgress, 10);
    $popupAuto.on('click',function(){
        $popupPause = !$popupPause;
        if($popupPause){
            $(this).text('재생').removeClass('slick-pause').addClass('slick-play');
        }else{
            $(this).text('정지').removeClass('slick-play').addClass('slick-pause');
        };
    });
});
$popupList.slick($popupSlkOtp);

function popupProgress(){
    if($popupPause) return false;
    $popupProgress = $popupProgress + 1/$popupSlkTime;
    $popupProgressbar.css('width',$popupProgress+'%');
    if($popupProgress >= 100){
        clearInterval(popupProgressInterval);
        $popupProgressbar.removeAttr('style');
        $popupList.slick('slickNext');
        return $popupProgress = 0;
    };
};*/
	});
})(jQuery); 
