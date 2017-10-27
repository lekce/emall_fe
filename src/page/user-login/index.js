/*
* @Author: Administrator
* @Date:   2017-10-22 12:29:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-27 12:37:24
*/
'use strict';

require('./index.css');
require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var _mm   = require('util/mm.js');

// 表单里的错误提示
var formError = {
	show : function(errMsg){
		$('.error-item').show().find('.err-msg').text(errMsg);
	},
	hide : function(){
		$('.error-item').hide().find('.err-msg').text('');
	}
};

// page逻辑部分
var page = {
	init : function(){
		this.bindEvent();
	},
	bindEvent : function(){
		var _this = this;
		// 登录按钮的点击
		$('#submit').click(function(){
			_this.submit();
		});
		// 按下回车也进行提交
		$('.user-content').keyup(function(e){
			if (e.keyCode === 13) {
				_this.submit();
			}
		})
	},
	// 提交表单
	submit : function(){
		var formData = {
			username : $.trim($('#username').val()),
			password : $.trim($('#password').val())
		},
		formValidateResult = this.formValidate(formData);
		// 验证成功
		if (formValidateResult.status) {
			_user.login(formData, function(res){
				window.location.href = _mm.getUrlParam('redirect') || './index.html';
			}, function(errMsg){
				formError.show(errMsg);
			});
		}
		else{
			formError.show(formValidateResult.msg);
		}
	},
	// 表单字段的验证
	formValidate : function(formData){
		var result = {
			status : false,
			msg    : ''
		};
		if (!_mm.validate(formData.username, 'require')) {
			result.msg = '用户名不能为空';
			return result;
		}
		if (!_mm.validate(formData.password, 'require')) {
			result.msg = '密码不能为空';
			return result;
		}
		// 通过验证，返回正确提示
		result.status = true;
		result.msg = '验证通过';
		return result;
	}
}

$(function(){
	page.init();
});