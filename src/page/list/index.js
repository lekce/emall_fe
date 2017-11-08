/*
* @Author: daihp
* @Date:   2017-10-28 15:09:45
* @Last Modified by:   daihp
* @Last Modified time: 2017-11-08 21:40:31
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm 				= require('util/mm.js');
var _product 			= require('service/product-service.js');
var templateIndex		= require('./index.string');
// page逻辑部分
var page = {
	data : {
		listParam : {
			keyword 		: _mm.getUrlParam('keyword') 	|| '',
			categoryId  	: _mm.getUrlParam('categoryId') || '',
			orderBy			: _mm.getUrlParam('orderBy') 	|| 'default',
			pageNum			: _mm.getUrlParam('pageNum') 	|| 1,
			pageSize		: _mm.getUrlParam('pageSize')   || 20
		}
	},
	init : function(){
		this.onLoad();
		this.bindEvent();
	},
	onLoad : function(){
		this.loadList();
	},
	bindEvent : function(){
		var _this = this;
		_this.data.listParam.pageNum = 1;
		// 排序点击事件
		$('.sort-item').click(function(){
			var $this = $(this);

			if ($this.data('type') === 'default') {
				if ($this.hasClass('active')) {
					return;
				}
				else{
					$this.addClass('active').siblings('.sort-item')
						.removeClass('active asc desc');
					_this.data.listParam.orderBy = 'default';
				}
			}
			else if($this.data('type') === 'price'){
				$this.addClass('active').siblings('.sort-item')
						.removeClass('active asc desc');;
				// 升序、降序的处理
				if (!$this.hasClass('asc')) {
					$this.addClass('asc').removeClass('desc');
					_this.data.listParam.orderBy = 'price_asc';
				}else{
					$this.addClass('desc').removeClass('asc');
					_this.data.listParam.orderBy = 'price_desc';
				}
			}
			// 重新加载列表
			_this.loadList();
		});
	},
	// 加载list数据
	loadList : function(){
		var _this 		= this, 
			listHtml 	= '',
			listParam   = this.data.listParam,
			$pListCon   = $('.p-list-con');
		$pListCon.html('<div class="loading"></div>');
		// 删除不必要的字段
		listParam.categoryId ? 
			(delete listParam.keyword) : 
			(delete listParam.categoryId);
		// 请求接口
		_product.getProductList(listParam, function(res){
			listHtml = _mm.renderHtml(templateIndex, {
				list : res.list
			});
			$pListCon.html(listHtml);
			_this.loadPagination(res.pageNum, res.pages);
		},function(errMsg){
			_mm.errorTips(errMsg);
		});
	},
	// 加载分页信息
	loadPagination : function(pageNum, pages){

	}
};

$(function(){
	page.init();
});
