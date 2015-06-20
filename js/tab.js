// 选项卡切换	
function fnTab( oNav, aCon, sEvent ) {
	var aElem = oNav.children();
	aCon.hide().eq(0).show(); //初始设置tab所对应的内容为第一个，其他隐藏。
	
	aElem.each(function (index){
		
		$(this).on(sEvent, function (){
			
			aElem.find('a').attr('class', 'tabA'); //先将所有a标签class值为tabA
			$(this).find('a').attr('class', 'active'); //再将当前的a标签class值为active
			
			aCon.hide().eq( index ).show();  // 索引匹配，显示对应内容
		});
		
	});
}

fnTab( $('.tabNav'), $('.tabCon'), 'click' ); // 函数调用