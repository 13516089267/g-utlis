module.exports={
	//随机指定范围内的值
	randomRange:function(range) {
		return Math.floor(Math.random()*range);
	},
	//数组逆置
	inverseArray:function(array){
		if (!Array.isArray(array)) {
			throw new TypeError('g-utlis.inverseArray() expects an array.');
		}
		var result=[];
		for(var i=array.length-1;i>=0;i--){
			result.push(array[i]);
		}
		return result;
	},
	//跳转页面
	redirect:function(url){
		window.location.href=url;
	},
	//循环指定次数(从1开始)
	forRange:function(range, func){
		for (var i = 1; i <= range; i++) {
			func && func(i);
		}
	},
	//检测邮箱
	checkMail:function(email){
		var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (filter.test(email)) {
			return true;
		}
		return false;
	},
	//检测IP
	checkIP:function (ipaddr) {
		var filter= /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
		if (filter.test(ipaddr)) return false;
		var parts = ipaddr.split(".");
		if (parseInt(parseFloat(parts[0])) == 0) return false;
		if (parseInt(parseFloat(parts[3])) == 0) return false;
		//if any part is greater than 255
		for (var i=0; i<parts.length; i++) {
			if (parseInt(parseFloat(parts[i])) > 254) return false;
		}
		return true;
	},
	//清空数组
	clearEmpty:function(array){
		array.length=0;
		return array;
	},
	//获取地址传递的参数
	getPathParam:function (variable){
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++){
			var pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
		}
		return(false);
	},
	//返回所有非false的值
	compact:function(array) {
		if (!Array.isArray(array)) {
			throw new TypeError('g-utlis.compact() expects an array.');
		}
		return arr.filter(Boolean);
	}

};


/**
验证mac地址
function fnValidateMacAddress(macaddr) {
   var reg1 = /^[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}$/;
   var reg2 = /^[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}$/;
   if (reg1.test(macaddr)) {
      return true;
   }else if (reg2.test(macaddr)) {
      return true;
   } else {
      return false;
   }
}

*/


/**
//重置表单
function reset_form(el){
	el.find('input[type=text],input[type=tel],input[type=email],input[type=date],input[type=password],textarea').val('');
	el.find('select option').removeAttr('selected');
	el.find('input[type=radio],input[type=checkbox]').removeAttr('checked');   		
};
Tool.reset_form=reset_form;










*/