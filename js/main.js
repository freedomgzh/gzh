console.log("载入成功");

// 配置路径
require.config({
	paths: {
		jquery: "jquery-1.10.1.min",
		"jquery-cookie": "jquery.cookie",
		index : "index1",
		"btnTop_move": "btnTop_move",
		"parabola": "parabola"
	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		/*
			js文件，声明不遵从AMD规范的js文件
		*/
		"parabola": {
			exports: "_"
		}
	}
})
define(["index1"],function(index){
	var main = function(){
		
		index.index();
	}
	return{
		main:main
	}
})






























