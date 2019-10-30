$(document).ready(function(){
	$("#contactBtn").click(function(){
		$("#popup").fadeIn();
	});
});

$(document).ready(function(){
	$("#openContactForm").click(function(){
		$("#popupContainer").removeAttr("style");
		$("#popup").fadeIn();
	});
});

$(document).ready(function(){
	$("#submitBtn").click(function(){
		$("#popupContainer").attr("style", "display: none");
		$("#popup").fadeOut();
	});
});

$(document).ready(function(){
	$("#close").click(function(){
		$("#popupContainer").attr("style", "display: none");
		$("#popup").fadeOut();
	});
});

