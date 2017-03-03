var yes = "<span class='supported'>YES</span> "
var no = "<span class='unsupported'>NO</span> "

function adder(id, plusValue) {
	var element = document.getElementById(id);
	element.innerHTML = plusValue + element.innerHTML;
}

if (Modernizr.canvas) {
	adder("canvas", yes);
} else {
	adder("canvas", no);
}

if (Modernizr.video) {
	adder("video", yes);
} else {
	adder("video", no);
}

if (Modernizr.video.ogg) {
	adder("ogg", yes);
} else {
	adder("ogg", no);
}

if (Modernizr.localstorage) {
	adder("local", yes);
} else {
	adder("local", no);
}

if (Modernizr.applicationcache) {
	adder("offline", yes);
} else {
	adder("offline", no);
}

if (Modernizr.geolocation) {
	adder("geo", yes);
} else {
	adder("geo", no);
}
