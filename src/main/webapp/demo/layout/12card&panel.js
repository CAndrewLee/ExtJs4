Ext.onReady(function() {
	var panel = Ext.create('Ext.panel.Panel', {
		layout : 'card',
		activeItem : 0,// 设置默认显示第一个子面板
		title : 'Ext.layout.container.Card布局示例',
		frame : true,// 渲染面板
		height : 150,
		width : 250,
		renderTo : Ext.getBody(),
		bodyPadding : 5,
		defaults : {// 设置默认属性
			bodyStyle : 'background-color:#FFFFFF;padding:15px'// 设置面板体的背景色
		},
		items : [{
					title : '嵌套面板一',
					html : '说明一',
					id : 'p1'
				}, {
					title : '嵌套面板二',
					html : '说明二',
					id : 'p2'
				}, {
					title : '嵌套面板三',
					html : '说明三',
					id : 'p3'
				}],
		buttons : [{
					text : '上一页',
					handler : changePage
				}, {
					text : '下一页',
					handler : changePage
				}]
					});
			// 切换子面板
	function changePage(btn) {
		var index = Number(panel.layout.activeItem.id.substring(1));
		if (btn.text == '上一页') 
		{
			index -= 1;
			if (index < 1) 
			{
				index = 1;
			}
		} 
		else 
		{
			index += 1;
			if (index > 3) 
			{
				index = 3;
			}
		}
		panel.layout.setActiveItem('p' + index);
	}
});