/*
* @Author: Administrator
* @Date:   2017-10-24 13:08:28
* @Last Modified by:   daihp
* @Last Modified time: 2017-11-09 18:20:19
*/

var _mm = require('util/mm.js');

var _product = {
	// 获取商品列表
	getProductList : function(listParam,resolve, reject){
		_mm.request({
			url		: _mm.getServerUrl('/product/list.do'),
			data	: listParam,
			method  : 'POST',
			success : resolve,
			error   : reject
		});
	},
	 // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}

module.exports = _product;