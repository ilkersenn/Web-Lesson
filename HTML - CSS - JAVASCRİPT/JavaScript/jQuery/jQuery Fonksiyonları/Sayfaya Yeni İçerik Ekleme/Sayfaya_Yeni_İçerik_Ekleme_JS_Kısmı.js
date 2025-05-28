$(document).ready(function(){
	$("#islem1").click(function(){
		$("span").css({"backgroundColor":"tomato","color":"white"});
	}); // css() : stil eklemeye yarar.

	$("#islem2").click(function(){
		$("#kutu2").before("<span><u> Yeni <br> Kutu </u></span>");
	});// before() : seçili elemandan önce içerik ekler.

	$("#islem3").click(function(){
		$("#kutu2").after("<span><u> Yeni <br> Kutu </u></span>");
	});// after() : seçili elemandan sonra içerik ekler.

	$("#islem4").click(function(){
		$("#cerceve").prepend("<span><u> Yeni <br> Kutu </u></span>");
	});// prepend() : seçili elemanların başlarına içerik ekler.

	$("#islem5").click(function(){
		$("#cerceve").append("<span><u> Yeni <br> Kutu </u></span>");
	});// append() : seçili elemanların sonlarına içerik ekler.

	$("#islem6").click(function(){
		$("#kutu4").empty();
	});// empty() : seçili elemanların alt ögelerini kaldırır.

	$("#islem6").click(function(){
		$("#kutu4").remove();
	});// remove() : seçili elemanları ve alt ögelerini kaldırır.
})