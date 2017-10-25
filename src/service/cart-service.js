/*
* @Author: Administrator
* @Date:   2017-10-24 13:22:27
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-24 13:24:15
*/
/*
* @Author: Administrator
* @Date:   2017-10-24 13:08:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-24 13:20:13
*/

var _mm = require('util/mm.js');

var _cart = {
	// 获取购物车数量
	logout : function(resolve, reject){
		_mm.request({
			url		: _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success : resolve,
			error   : reject
		});
	}
}

module.exports = _cart;