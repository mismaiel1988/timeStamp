function getDate() {
	$.ajax({
	  method: 'post',
	  url: "/getDate",
	  context: document.body
	}).done(function(res) {
	  	var p = document.getElementById("time");
		p.innerHTML = "The date is " + res;
	});
}

var interval = null;

function toggleInterval() {

	if (interval === null) {
		getDate();
		interval = setInterval(getDate, 1000);
	} else {
		clearInterval(interval);
		interval = null;
		var p = document.getElementById('time');
		p.innerHTML = 'Find out what time it is!';
	}
}