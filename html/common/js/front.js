if (window.console == undefined) {console={log:function(){} };}

/* pc tablet mobile device check */
(function ($, window, undefined){
	"use strict";
	/**
	 * @description pc tablet mobile device check
	 * @modify
			@20190827 추가
	*/
	var deviceCheck = {
		/** 플러그인명 */
		bindjQuery: 'deviceCheck',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			deviceCheck: 'body'
		},
		initialize: function(){
			var me = this;

			me._resize();
		},
		_resize: function (){
			var me = this,
				$items = me.selectors.deviceCheck;

			var mobile = 768,
				tablet = 1024, // 1024
				pc = 1280;

			var $dataTgGnbButton = $('[data-target="gnb-button"]'),
				$dataDeviceTabletBtnPrev = $('[data-device="tablet"] [data-button="btn-prev"]'),
				$dataDeviceMobileBtnPrev = $('[data-device="mobile"] [data-button="btn-prev"]'),
				$dataDeviceTabletHeaderh2 = $('[data-device="tablet"] [data-target="header"] h2'),
				$dataDeviceTabletHeaderh1 = $('[data-device="tablet"] [data-target="header"] h1');

			var $btnHome = $('[data-target="header"] .btn-home'),
				$mobileH1 = $('[data-device="mobile"] [data-target="header"] h1'),
				$mobileH2 = $('[data-device="mobile"] [data-target="header"] h2');

			var $btnFixed = $('.btn-fixed'), // mobile bottom btn fixed
				$footer = $('[data-target="footer"]');

			$(window).on('resize load', function(){
				if( $(this).width() < 768 ){
					$($items).attr('data-device', 'mobile');
					deviceMobile();
				}else if( $(this).width() > 768 && $(this).width() < 1024 ){ // 1024
					$($items).attr('data-device', 'tablet');
					deviceTablet();
				}else if( $(this).width() >= 1024 ){ // 1024
					$($items).attr('data-device', 'pc');
					devicePc();
				}
			});

			function deviceMobile(){
				$('[data-target="header"] .btn-home, [data-device="mobile"] [data-target="header"] h2, [data-device="mobile"] [data-target="header"] h1').show();

				$('[data-device="mobile"] [data-target="header"] h1').hide();

				if( $('body').attr('data-page') == 'main' || $('body').attr('data-page') == 'h1-logo' ){
					$('[data-device="mobile"] [data-target="header"] h1').show();
				}

				if( $('[data-target="gnb-button"]').css("display") == "none" ){
					$('[data-device="tablet"] [data-button="btn-prev"], [data-device="mobile"] [data-button="btn-prev"]').show();
				}

				// deviceMobile(), deviceTablet() 같이 수정
				if( $('[data-target="header"] .btn-signIn').length == 0 && $('[data-target="header"] .btn-home').length == 0 && $('[data-target="header"] h2').length == 0 ){
					$('[data-target="header"] h1').show();
				}

				if( $('.btn-signIn').css("display") == 'block' || $('.btn-signIn').css("display") == 'inline' ){
					$('[data-target="header"] .btn-home, [data-device="mobile"] [data-target="header"] h2').remove();
					$('[data-device="mobile"] [data-target="header"] 4').show();
				}

				// footer gap
				if( $btnFixed.length > 0 ){
					$footer.addClass('btn-gap');
				}
			}

			function deviceTablet(){
				$('[data-target="header"] .btn-home, [data-device="tablet"] [data-target="header"] h2').show();

				if( $('.btn-signIn').css("display") == 'none' && $('.btn-home').is('.none') ){
					$('[data-button="btn-prev"]').show();
				}

				$('[data-device="tablet"] [data-target="header"] h1').hide();

				// deviceMobile(), deviceTablet() 같이 수정
				if( $('[data-target="header"] .btn-signIn').length == 0 && $('[data-target="header"] .btn-home').length == 0 && $('[data-target="header"] h2').length == 0 ){
					$('[data-target="header"] h1').show();
				}

				if( $('.btn-signIn').css("display") == 'block' || $('.btn-signIn').css("display") == 'inline' ){
					$('[data-target="header"] .btn-home, [data-device="tablet"] [data-target="header"] h2').remove();
					$('[data-device="tablet"] [data-target="header"] h1').show();
				}

				// footer gap
				if( $btnFixed.length > 0 ){
					$footer.addClass('btn-gap');
				}
			}

			function devicePc(){
				$('[data-device="pc"]').find('[data-target="header"] h2').hide();

				if( $('[data-target="gnb-button"]').css("display") == "none" ){
					$('[data-device="pc"] [data-button="btn-prev"]').hide();
				}

				$('[data-target="header"] .btn-home').hide();
				$('[data-device="pc"] h1').show();

				if( $('[data-target="gnb-button"]').is('.sel') ){
					$('[data-target="gnb-button"]').click();
				}

				// footer gap
				if( $btnFixed.length > 0 ){
					$footer.removeClass('btn-gap');
				}
			}
		}
	};

	window.deviceCheck = deviceCheck;
}(jQuery, window));

/* header gnb */
(function ($, window, undefined){
	"use strict";
	/**
	 * @description header gnb
	 * @modify
			@20190826 추가
	*/
	var gnbMenu = {
		/** 플러그인명 */
		bindjQuery: 'gnbMenu',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			gnbMenu: '[data-target="header"]',
			gnbButton: '[data-target="gnb-button"]',
			boxGnb: '[data-target="box-gnb"]'
		},
		initialize: function(){
			var me = this;

			me._click();
		},
		_click: function (){
			var me = this,
				$items = me.selectors.gnbButton,
				$boxGnb = me.selectors.boxGnb;

			$($items).click(function(e){
				e.preventDefault();

				var $body = $('body');

				if( $(this).is('.sel') ){
					var topCnt = $body.css('top'),
						topCnt = topCnt.replace('-', ''),
						topCnt = topCnt.replace('px', '');

					setTimeout(function(){
						$(window).scrollTop(topCnt);
					},0);

					$body.css({"top":""});
					$(this).removeClass('sel');
					$($boxGnb).removeClass('sel');
					$('[data-target="gnb-button-dim"]').removeClass('sel');
					$body.removeClass('topFixed');
					$($boxGnb).find('.inner').scrollTop(0);

					// main header
					//$('[data-page="main"]').removeClass('scroll');
				}else{
					var scTop = $(window).scrollTop();

					$(this).addClass('sel');
					$($boxGnb).addClass('sel');
					$body.addClass('topFixed');
					$body.css({"top":-scTop});
					$('[data-target="gnb-button-dim"]').addClass('sel');

					// main header
					//$('[data-page="main"]').addClass('scroll');
				}
			});

			$($boxGnb).find('.dim').click(function(){
				$($items).click();
			});
		}
	};

	window.gnbMenu = gnbMenu;
}(jQuery, window));

/* footer family site */
(function ($, window, undefined){
	"use strict";
	/**
	 * @description footer family site
	 * @modify
			@20190826 추가
	*/
	var footerSite = {
		/** 플러그인명 */
		bindjQuery: 'footerSite',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			footerSite: '[data-target="footer"]'
		},
		initialize: function(){
			var me = this;

			me._click();
		},
		_click: function (){
			var me = this,
				$items = me.selectors.footerSite;

			$($items).find('.list-familySite > a').click(function(e){
				e.preventDefault();
				if( $(this).parents('.list-familySite').is('.on') ){
					$(this).parents('.list-familySite').removeClass('on');
				}else{
					if( $('body').attr('data-device') == "mobile" || $('body').attr('data-device') == "tablet" ){
						$('html, body').animate({scrollTop : $($items).offset().top}, 1000);
					}
					$(this).parents('.list-familySite').addClass('on');
				}
			});
		}
	};

	window.footerSite = footerSite;
}(jQuery, window));

/* tab load click */
(function ($, window, undefined){
	"use strict";
	/**
	 * @description tab load click
	 * @modify
			@20191007 추가
	*/
	var tabCommon = {
		/** 플러그인명 */
		bindjQuery: 'tabCommon',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			tabCommon: '[data-target="tab"]'
		},
		initialize: function(){
			var me = this;

			me._sel();
			me._click();
		},
		_sel: function (){
			var me = this,
				$items = me.selectors.tabCommon;

			var selText = $($items).find('ul .sel a').html();

			$($items).find('.sel-tab').html(selText);
		},
		_click: function (){
			var me = this,
				$items = me.selectors.tabCommon;

			$($items).find('.sel-tab').click(function(e){
				e.preventDefault();
				if( !$($items).is('.sel') ){
					$($items).addClass('sel');
					//$(this).next().show();
				}else{
					$($items).removeClass('sel');
					//$(this).next().hide();
				}
			});

			// body click event
			$("body").click(function(e){

				if( $(this).is('[data-device="mobile"]') ){
					var $tg = $('[data-target="tab"]');

					if( $tg.find('> ul').css('visibility') == 'visible' ){
						if( !$tg.has(e.target).length ){
							$tg.removeClass('sel');
							//$tg.find('> ul').hide();
						}
					}
				}
			});
		}
	};

	window.tabCommon = tabCommon;
}(jQuery, window));

$(function(){
	// body click event
	$("body").click(function(e){
		var $tg = $('[data-target="footer"]').find('.list-familySite');

		if( $tg.find('> ul').css('visibility') == 'visible' ){
			if( !$tg.has(e.target).length ){
				$tg.removeClass('on');
			}
		}
	});
});

// mobile header guide HeaderSplit
function HeaderSplit(button, icon){
	this.init(button, icon);
}

HeaderSplit.prototype.init = function(button, icon){
	this.$tg = button; // prev, menu, logo, mobile-none case
	this.$home = icon; // icon, mobile-none case

	if( this.$tg == 'prev' && this.$home ){
		$('[data-device="mobile"] .btn-home, [data-device="tablet"] [data-button="btn-prev"], [data-device="mobile"] [data-button="btn-prev"]').show();
		subHeader();
	}else if( this.$tg == 'menu' && this.$home ){
		subHeaderMenu();
	}else if( this.$tg == 'logo' ){
		subHeaderLogo();
	}else{
		$('[data-target="gnb-button"]').show();
		mainHeader();
	}

	if( this.$tg == 'mobile-none' && this.$home == 'mobile-none' ){
		$('[data-target="header"], [data-target="gnb-button"], [data-button="btn-prev"]').addClass('mobile-none');
	}

	function mainHeader(){
		$('[data-target="header"] h1, [data-target="header"] .btn-signIn').show();
	}

	function subHeader(){
		$('[data-target="header"] .btn-signIn').hide();
		//$('[data-target="header"] h1').show();
		$('[data-target="header"] h2, [data-device="mobile"] .btn-home, [data-device="tablet"] .btn-home').show();
		$('[data-target="header"] h2, .btn-home').addClass('none');
	}

	function subHeaderMenu(){
		$('[data-target="gnb-button"]').show();
		$('[data-target="header"] h2, [data-device="mobile"] .btn-home, [data-device="tablet"] .btn-home').show();
	}

	function subHeaderLogo(){
		$('[data-target="header"] .btn-signIn, [data-target="header"] h2, [data-button="btn-prev"], [data-target="header"] .btn-home').remove();
		$('[data-target="header"] h1').addClass('block');
	}

	// nav hover bug
	var $nav = $('[data-target="nav"]');

	$nav.find(' > ul > li > ul').mouseleave(function(){
		gnbLo();
	});

	$nav.find(' > ul > li').mouseleave(function(){
		gnbLo();
	});

	function gnbLo(){
		$nav.css({"height":"auto"});
		setTimeout(function(){
			$nav.css({"height":""});
		}, 100);
	}
}

// pc sub location menu
function SubLocation(d1, d2, d3){
	this.init(d1, d2, d3);
}

SubLocation.prototype.init = function(d1, d2, d3){
	this.$d1 = d1;
	this.$d2 = d2;
	this.$d3 = d3;

	var $nav = $('[data-target="nav"]'),
		$subLocation = $('.sub-location');

	if( this.$d1 ){
		// pc
		$subLocation.show();
		$nav.find('[data-index=' + this.$d1 + ']').addClass('sel'); // 1뎁스
		$subLocation.find('[data-d1Index=' + this.$d2 + ']').addClass('show'); // 2뎁스 활성화
		$subLocation.find('[data-d2Index=' + this.$d3 + ']').addClass('sel'); // 3뎁스

		// mobile
		$nav.find('[data-index=' + this.$d1 + ']').parents('li').find('[data-d2Index=' + this.$d3 + ']').addClass('sel');
		//$nav.find('[data-d2Index=' + this.$d3 + ']').addClass('sel'); // 3뎁스
	}

	if( !this.$d2 ){
		$subLocation.hide();
	}
}

// error focus function
function ErrorUi(tg){
	this.init(tg);
}

ErrorUi.prototype.init = function(tg){
	this.$prev = tg;

	$('[data-error="' + tg + '"]').addClass('common-errorText');
	$('[data-error="' + tg + '"]').find('#' + tg).focus();

	$('[data-error="' + tg + '"]').find('#' + tg).focusout(function(){
		$(this).parents('div').removeClass('common-errorText');
	});
}

// layer onclick show
$('.layer_open_pop').on('click', function(e){
	aira_focus = $(this);
	var target = $(this).not('.disabled').attr('href');
	openModalLayer(target, this);
	$(target).show().focus();
	scrollFixed();

	// 약관 popup 세부 기능
	$(target).find('.inner-rule').scrollTop(0); // scroll 최상단
	$(target).find('[data-button="btn-prev2"]').click(function(){ // 약관 이전 버특 click시 checked false
		$('[data-ck=' + target + ']').find('[type="checkbox"]').prop("checked", false);
	});
	$(target).find('.fix_area a').click(function(){ // 약관 동의 버특 click시 checked true
		$('[data-ck=' + target + ']').find('[type="checkbox"]').prop("checked", true);
	});
});

// 레이어 포커스 함수
// 팝업이 뜰때 openModalLayer(팝업아이디,this) 실행
function openModalLayer(layerID,origin){

	var $this = $(layerID),
		focusable = [];

	$this.find('*').each(function(i, val) {
		if(val.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim) && parseInt(val.getAttribute("tabIndex")) !== -1) {
			focusable.push(val);
		}
		if((val.getAttribute("tabIndex") !== null) && (parseInt(val.getAttribute("tabIndex")) >= 0) && (val.getAttribute("tabIndex", 2) !== 32768)) {
			focusable.push(val);
		}
	});

	var el_firstFocus = focusable[0],
		el_lastFocus = focusable[focusable.length-1];

	$(document).on({
		'keydown' : function(e){
			var keyCode = e.keyCode || e.which;
			if (keyCode == 27){
				$this.find('.close').click();
				$(document).off('keydown');
			}
		}
	})

	$(el_firstFocus).on({
	'keydown' : function(e){
		if (e.target == this){
			var keyCode = e.keyCode || e.which;
			if (keyCode == 9){
				if (e.shiftKey){
					$(el_lastFocus).focus();
					e.preventDefault();
				}
			}
		}
	}
	});

	$(el_lastFocus).on({
		'keydown' : function(e){
			var keyCode = e.keyCode || e.which;
			if (keyCode == 9){
				if (!e.shiftKey){
					$(el_firstFocus).focus();
					e.preventDefault();
				}
			}
		}
	});

}

/* scroll btn top fixed */
(function ($, window, undefined){
	"use strict";
	/**
	 * @description APPLY NOW scroll top fixed
	 * @modify
			@20191002 추가
	*/
	var scrollTopBtnFixed = {
		/** 플러그인명 */
		bindjQuery: 'scrollTopBtnFixed',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			scrollTopBtnFixed: '[data-btn="top-fixed-btn"]'
		},
		initialize: function(){
			var me = this;

			me._scroll();
		},
		_scroll: function (){
			var me = this,
				$items = me.selectors.scrollTopBtnFixed;

			var $itemsTop = $($items).offset().top - 60,
				$win = $(window),
				$boxTabFixedGap = $('.box-tab-fixedGap');

			$boxTabFixedGap.height($($items).innerHeight());

			$win.scroll(function(){
				var $scrollWinTg = $(this).scrollTop();

				$win.resize(function(){
					$itemsTop = $($items).offset().top - 60;
					fixedRemove();
				});

				if( $scrollWinTg >= $itemsTop ){
					fixedAdd();
				}else{
					fixedRemove();
				}

				function fixedAdd(){
					$($items).addClass('fixed');
					$boxTabFixedGap.show();
				}
				function fixedRemove(){
					$($items).removeClass('fixed');
					$boxTabFixedGap.hide();
				}
			});
		}
	};

	window.scrollTopBtnFixed = scrollTopBtnFixed;
}(jQuery, window));

/* main scroll header */
(function ($, window, undefined){
	"use strict";
	/**
	 * @description main scroll header
	 * @modify
			@20191021 추가
	*/
	var mainScrollHeader = {
		/** 플러그인명 */
		bindjQuery: 'mainScrollHeader',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			mainScrollHeader: '[data-page="main"]'
		},
		initialize: function(){
			var me = this;

			me._scroll();
		},
		_scroll: function (){
			var me = this,
				$items = me.selectors.mainScrollHeader,
				$tg = $($items).find('[data-target="header"]');

			$(window).on('scroll load', function(){
				if( $(this).scrollTop() > 0 ){
					$($items).addClass('scroll');
				}else{
					$($items).removeClass('scroll');
				}
			});
		}
	};

	window.mainScrollHeader = mainScrollHeader;
}(jQuery, window));

//공통 SCROLL add fixed
function scrollFixed(){
	var scTop = $(window).scrollTop();
	setTimeout(function(){
		$('body').addClass('topFixed');
		$('body').css({"top":-scTop});
	}, 200);
}

$('.popup_wrap .btn-close').on('click', function(){
	$(this).parents('.popup_wrap').hide();
	$('body').removeClass('topFixed');

	var topCnt = $('body').css('top'),
		topCnt = topCnt.replace('-', ''),
		topCnt = topCnt.replace('px', '');

	$(window).scrollTop(topCnt);
});

// layerpopup dim click hide
$('.popup_wrap').click(function(e){
	if( $(e.target).attr('class') == 'pop_dim' || $(e.target).attr('class') == 'popup_wrap' ){
		$(this).find('.btn-close').click();
	}
});

// list-step end 체크
var $listStep = $('.list-step');
$listStep.find('.ing').prevAll('li').addClass('end');

// validation button motion
function ValidationButton(tg){
	this.init(tg);
}

ValidationButton.prototype.init = function(tg){
	this.$tg = tg;

	if( this.$tg ){
		$('[data-btn="motion"]').addClass('btnSel-bg');
	}else{
		$('[data-btn="motion"]').removeClass('btnSel-bg');
	}
}

// header title
function HeaderTitle(title){
	this.init(title);
}

HeaderTitle.prototype.init = function(title){
	this.$tg = title;

	var $headerTitle = $('[data-target="header"] h2');

	$headerTitle.html(this.$tg);
}

// btn-bottomFixed-padding
if( $('.btn-fixed').length > 0 ){
	$('#wrap').addClass('btn-bottomFixed-padding');
}

/* commonTab-1 */
(function ($, window, undefined){
	"use strict";
	/**
	 * @description commonTab-1
	 * @modify
			@20200108 추가
	*/
	var tabClick = {
		/** 플러그인명 */
		bindjQuery: 'tabClick',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			tg: '[data-event="commonTab-1"]'
		},
		initialize: function(){
			var me = this,
				$items = me.selectors.tg;

			$($items).find('li a').click(function(){
				if( !$(this).is('.sel') ){
					$($items).find('li a').removeClass('sel');
					$(this).addClass('sel');
				}
			});
		}
	};

	window.tabClick = tabClick;
}(jQuery, window));

/* commonTab */
(function ($, window, undefined){
	"use strict";
	/**
	 * @description commonTab
	 * @modify
			@20200129 추가
	*/
	var commonTab = {
		/** 플러그인명 */
		bindjQuery: 'commonTab',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			tg: '[data-slick-vs="commonTab"]'
		},
		initialize: function(){
			var me = this,
				$items = me.selectors.tg;

			$(window).on('load on resize', function(event) {
				if($(this).width() <= 768) {// mobile script
					$($items).not('.slick-initialized').slick({
						/*dots: true,
						infinite: true,
						speed: 600,
						slidesToShow: 1,
						adaptiveHeight: true,
						autoplay: false,
						autoplaySpeed: 4000,
						arrows: false*/
						dots: false,
						infinite: true,
						arrows: false,
						infinite: false,
						variableWidth: true
					});
				}else {// pc script
					$('[data-slick-vs="commonTab"]').slick('unslick');
				}
			})
		}
	};

	window.commonTab = commonTab;
}(jQuery, window));

/* newsBlog */
(function ($, window, undefined){
	"use strict";
	/**
	 * @description newsBlog
	 * @modify
			@20200414 추가
	*/
	var newsBlog = {
		/** 플러그인명 */
		bindjQuery: 'newsBlog',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			tg: '[data-slick-vs="newsBlog"]'
		},
		initialize: function(){
			var me = this,
				$items = me.selectors.tg;

			$(window).on('load on resize scroll', function(event) {
				console.log(event);
				if($(this).width() <= 768) {// mobile script
					$($items).not('.slick-initialized').slick({
						/*dots: true,
						infinite: true,
						speed: 600,
						slidesToShow: 1,
						adaptiveHeight: true,
						autoplay: false,
						autoplaySpeed: 4000,
						arrows: false*/
						dots: true,
						infinite: true,
						arrows: false,
						infinite: false,
						variableWidth: true
					});
				}else {// pc script
					$('[data-slick-vs="newsBlog"]').slick('unslick');
				}
			})
		}
	};

	window.newsBlog = newsBlog;
}(jQuery, window));

(function ($, window, undefined){
	"use strict";
	/**
		* @description 디자인 fileBox
		* @modify 20191118 추가
	*/
	var fileBox = {
		/** 플러그인명 */
		bindjQuery: 'fileBox',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			dataFileBox: '[data-control="fileBox"]'
		},
		initialize: function(){
			var me = this;

			me._change();
		},
		_change: function (){
			var me = this,
			$items = me.selectors.dataFileBox,
			$fileBox = $($items).find('.ipt-file');

			var cnt = 0;

			$fileBox.on('change',function(){
				var fileTmp = $(this).val(),
				fileSize = Math.round((this.files[0].size/1024)); //KB

				cnt ++;

				// 10개 제한
				if( $('.common-file-box').length > 9 ){ // 10개 이하로만..
					alert('The number of files that can be selected is 10 or less.');
					return;
				}

				// html 생성
				$('[data-control="fileBox"]').prepend('<div class="common-file-box" data-fileIndex="' + cnt + '"><p class="file-name"></p><span class="file-size"></span><div class="common-btn-file-wrap"><a href="#none" class="btnFileDel"></a></div></div>');

				// 확장자 체크
				var ext = fileTmp.split('.').pop().toLowerCase();
				if($.inArray(ext, ['gif','jpg','jpeg','png','bmp','pdf']) == -1) {
					alert('The file must be in one of the following formats : jpg, jpeg, gif, png, bmp, pdf');
					return;
				}

				// size 체크
				if (fileSize < 5000) { // 5MB = 5000KB
					//fileTmp = fileTmp + " (" + fileSize + "KB)";
					fileTmp = fileTmp.replace("C:\\fakepath\\", "");
					$(this).parents('.txt-ct').find('[data-fileIndex=' + cnt + ']').show().find('.file-name').html(fileTmp);
					$(this).parents('.txt-ct').find('[data-fileIndex=' + cnt + '] .file-size').html("(" + fileSize + "KB)");
				}else{
					fileTmp = '';
					fileSize = '';
					alert('The file has exceeded 5000KB');
				};

			});

			// remove
			$('.btnFileDel').live('click', function(){
				$(this).parents('.common-file-box').remove();
			});
		}
	};

window.fileBox = fileBox;
}(jQuery, window));

(function ($, window, undefined){
	"use strict";
	/**
		* @description 공통 계산기
		* @modify 20200409 추가
	*/
	var cl = {
		/** 플러그인명 */
		bindjQuery: 'cl',
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			datacl: '[data-control="cl"]'
		},
		initialize: function(){
			var me = this;

			me._click();
		},
		_click: function (){
			var me = this,
			$items = me.selectors.datacl;

			$($items).find('.btn-cl').click(function(){
				if( !$(this).is('.show') ){
					$('#loanCalculator').addClass('show');
					$(this).addClass('show');
				}else{
					$('#loanCalculator').removeClass('show');
					$(this).removeClass('show');
				}
			});

			$('[data-control="cl-close"]').click(function(){
				$('#loanCalculator').removeClass('show');
				$($items).find('.btn-cl').removeClass('show');
			});

			$('#loanCalculator [data-control="cl"] a').click(function(){
				$('#loanCalculator').removeClass('show');
				$($items).find('.btn-cl').removeClass('show');
			});
		}
	};

window.cl = cl;
}(jQuery, window));

// footer sub page
$('body').attr('data-page', 'main');

// sub hader design 변경
$('body').attr('data-pageSub', 'sub-header');

// footer hide
function FooterHide(e, gap){
	this.init(e, gap);
}

FooterHide.prototype.init = function(e, gap){
	this.$tg = e;
	this.$bottomGapNone = gap;

	var $footer = $('#box-footer'),
		$wrap = $('#wrap');

	// footer hide
	if( this.$tg == "none" ){
		$footer.remove();
	}

	// footer gap remove
	if( this.$bottomGapNone == 'bottomGapNone' ){
		$wrap.addClass('footer-noneGap');
	}
}