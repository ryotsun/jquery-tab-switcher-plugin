/**
 * jQuery Tab-Switcher Plugin
 * Copyright 2011, Ryo Tsugawa
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * @package Tab-Switcher
 * @author Ryo Tsugawa <ryo.tsugawa@gmail.com>
 * @version 1.0
 *
 * Change Tab when you tap the tab on your display.
 * 
 */

$(document).ready(function(){
	$("ul.selected").css({"display":"block"});
	$(".tabs li").click(function(){
		var index = $(".tabs li").index(this) + 1;
		$(".tabs li").removeClass("selected");
		$(this).addClass("selected");
		$("#content ul").hide();
		$(".tab"+index).fadeIn("slow");
	});
});


