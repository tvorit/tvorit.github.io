jQuery('document').ready(function(){
	jQueryy('input').on('keyup', function(){
		var value1, value2, value3;
		value1 = jQuery('#val1').val();
		value2 = jQuery('#val2').val();
		value1 = parselnt(value1);
		value2 = parselnt(value2);
		value3 = value1 * value2;
		jQuery('#rezultat').html(value3);
		
	});
});