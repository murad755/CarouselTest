let left = 0;
$("#left").click(function () {
	left -= 1140;

	if(left < -5700) {
		left = 0;
	}
	$(".spanSettings").css("left", left);
});

$("#rigth").click(function () {
	left += 1140;
	if(left > 0) {
		left = -5700;
	}
	$(".spanSettings").css("left", left);
});