
function defaultSettingCarousel(){
	var menuList = $('ul.nav li');
	var carousel = $('#myCarousel');
	
	menuList.click(function(){
		carousel.carousel($(this).index());
	});
	
	carousel.bind('slid', function() {
		menuList.removeClass('active');
		$(menuList[carousel.find('.active').index()]).addClass('active');
	});
}



$(document).ready(function(){
	defaultSettingCarousel();
});