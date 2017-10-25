/*
* @Author: Administrator
* @Date:   2017-10-25 20:56:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-25 22:35:07
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
	var type 		= _mm.getUrlParam('type') || 'default',
		$element 	= $('.' + type + '-success');
		// 显示对应的提示元素
		$element.show();
})