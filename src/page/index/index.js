/*
* @Author: Administrator
* @Date:   2017-10-22 12:38:17
* @Last Modified by:   daihp
* @Last Modified time: 2017-11-04 19:15:11
*/

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string');
var _mm = require('util/mm.js');

$(function() {
	// 渲染banner的html
	var bannerHtml = _mm.renderHtml(templateBanner);
	$('.banner-con').html(bannerHtml);
   	// 初始化banner
    var $slider    = $('.banner').unslider({
    	dots: true
    });
    // 前一张和后一张的操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
    	var forward = $(this).hasClass('prev') ? 'prev' : 'next';
    	$slider.data('unslider')[forward]();
    });
});