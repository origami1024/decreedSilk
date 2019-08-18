homeCarouL.addEventListener("click", carouL);
homeCarouR.addEventListener("click", carouR);

function carouL(e) {
	let c1 = document.getElementsByClassName("hCDot");
	let toggler = -1;
	[].forEach.call(c1, function(val, index) {
		if (val.classList.contains("hCDCurr")) {
			val.classList.toggle("hCDCurr");
			toggler = index;
			document.getElementById('homeMT3' + (index + 1)).style.display = "none";
		}
	});
	
	if (toggler>0) {
		c1[toggler - 1].classList.toggle("hCDCurr");
		document.getElementById('homeMT3' + (toggler)).style.display = "block";
	} else {
		c1[2].classList.toggle("hCDCurr");
		document.getElementById('homeMT3' + (3)).style.display = "block";
	}		
}
function carouR(e) {
	let c1 = document.getElementsByClassName("hCDot");
	let toggler = false;
	[].forEach.call(c1, function(val, index) {
		if (val.classList.contains("hCDCurr")) {
			val.classList.toggle("hCDCurr");
			document.getElementById('homeMT3' + (index + 1)).style.display = "none";
			toggler = true;
		} else
		if (toggler) {
			val.classList.toggle("hCDCurr");
			document.getElementById('homeMT3' + (index + 1)).style.display = "block";
			toggler = false;
		}
	});
	if (toggler) {
			c1[0].classList.toggle("hCDCurr");
			document.getElementById('homeMT3' + 1).style.display = "block";
		}
}


///ANIMATE THE CAROUSEL!!!