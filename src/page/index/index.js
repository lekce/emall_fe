/*
* @Author: Administrator
* @Date:   2017-10-22 12:38:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-23 21:06:59
*/

'use strict';

var _mm = require('util/mm.js');

var html = '<div>{{data}}</div>'

var data = {
	data : 'das'
}

console.log(_mm.renderHtml(html, data));
