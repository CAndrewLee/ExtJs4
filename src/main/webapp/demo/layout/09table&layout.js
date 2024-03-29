Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'Ext.layout.container.Table布局示例',
		layout : {
			type : 'table',//表格布局
			columns : 4 //设置表格布局默认列数为4列
		},
		frame:true,//渲染面板
		height : 350,
		width : 410,
		renderTo: Ext.getBody(),
		defaults : {//设置默认属性
			bodyStyle:'background-color:#FFFFFF;',//设置面板体的背景色
			frame : true,
			width : 50,
			height : 50
		},
		items: [{
			title:'子面板一',
			width : 150,
			colspan : 3//设置跨列
		},{
			title:'子面板二',
			rowspan : 2,//设置跨行
			height : 100
		},
		{title:'子面板三'},
		{title:'子面板四'},
		{title:'子面板五'},
		{title:'子面板六'}]
	});
});