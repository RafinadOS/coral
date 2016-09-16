$(document).ready(function() {
 
	$("#slider").owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		pagination: true
	});

	$(".searcher-form__input-date").mask("99/99/9999",{placeholder:"05/12/2016"});

});