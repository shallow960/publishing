

(function($) {
    'use strict';

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head'),
		$screen = $.screen,
        $inArray = $.inArray;

    $(function() {
        var $window = $(window),
			$html = $('html'),
			$container = $('#container'),
			$footer = $('#footer');

		//여기서부터 코드 작성해주세요

        /* breadcrumbs */
        var $tabMenu = $container.find('.breadcrumbs_item'),
            $tabSelect = $tabMenu.find('.breadcrumbs_anchor.pc');

        $tabSelect.click(function () {
            var $this = $(this),
                $ParentTabmenu = $this.parent('.breadcrumbs_item'),
                IsActive = $ParentTabmenu.is('.active');
            if(!IsActive){
                $ParentTabmenu.siblings().removeClass('active').find('.tab_panel').stop().slideUp('250', 'easeOutExpo');
                $ParentTabmenu.find('.tab_panel').stop().slideDown('250', 'easeOutExpo');
                $ParentTabmenu.addClass('active');
                $tabSelect.attr('title','메뉴 열림');
            } else{
                $ParentTabmenu.find('.tab_panel').stop().slideUp('250', 'easeOutExpo');
                $ParentTabmenu.removeClass('active');
                $tabSelect.attr('title','메뉴 닫힘');
            };
        });

        /*비주얼 온*/
        $('.sub_visual .sub_bg').addClass('on');



        $window.on('screen:tablet screen:phone', function(event) {

        });
    });
})(jQuery);
