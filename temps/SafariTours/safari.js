const carouLinksRight = [1,2,0];
const carouLinksLeft = [2,0,1];
let curCarou = 0;
let inTransit = false;

function mAreaClick(e) {
	let tmp = e.target.id;
	//alert(tmp);
	mapPopupWrap.style.display = "block";
	document.getElementsByClassName("simplebar-content")[0].scrollTop = 0;
	switch (tmp) {
		case "mAfrica":
			p2Map.style.background = "url('assets/mapBGAfrica.png') no-repeat center";
			mapPopupWrap.style.left = "160px";
			mapPopupWrap.style.top = "200px";
			mPArr.classList.add("triangleRight");
			mPArr.classList.remove("triangleLeft");
			popupTourTypeHeader.textContent = "Africa Tourism";
			//mapOffersWrapper.scrollTop = 0;
			//console.log('mov: ', document.getElementsByClassName("simplebar-content")[0].scrollTop);
			break;
		case "mSA":
			p2Map.style.background = "url('assets/mapBGSA.png') no-repeat center";
			mapPopupWrap.style.left = "420px";
			mapPopupWrap.style.top = "250px";
			mPArr.classList.add("triangleLeft");
			mPArr.classList.remove("triangleRight");
			popupTourTypeHeader.textContent = "South America Tourism";
			break;
		case "mNA":
			p2Map.style.background = "url('assets/mapBGNA.png') no-repeat center";
			mapPopupWrap.style.left = "340px";
			mapPopupWrap.style.top = "110px";
			mPArr.classList.add("triangleLeft");
			mPArr.classList.remove("triangleRight");
			popupTourTypeHeader.textContent = "North America Tourism";
			break;
		case "mAustralia":
			p2Map.style.background = "url('assets/mapBGAustralia.png') no-repeat center";
			mapPopupWrap.style.left = "510px";
			mapPopupWrap.style.top = "300px";
			mPArr.classList.add("triangleRight");
			mPArr.classList.remove("triangleLeft");
			popupTourTypeHeader.textContent = "Australia Tourism";
			break;
		case "mEurope":
			p2Map.style.background = "url('assets/mapBGEU.png') no-repeat center";
			mapPopupWrap.style.left = "210px";
			mapPopupWrap.style.top = "80px";
			mPArr.classList.add("triangleRight");
			mPArr.classList.remove("triangleLeft");
			popupTourTypeHeader.textContent = "Europe Tourism";
			break;
		case "mAsia":
			p2Map.style.background = "url('assets/mapBGAsia.png') no-repeat center";
			mapPopupWrap.style.left = "800px";
			mapPopupWrap.style.top = "110px";
			mPArr.classList.add("triangleLeft");
			mPArr.classList.remove("triangleRight");
			popupTourTypeHeader.textContent = "Asia Tourism";
			break;
		case "mEastAsia":
			p2Map.style.background = "url('assets/mapBGMiddleEast.png') no-repeat center";
			mapPopupWrap.style.left = "660px";
			mapPopupWrap.style.top = "150px";
			mPArr.classList.add("triangleLeft");
			mPArr.classList.remove("triangleRight");
			popupTourTypeHeader.textContent = "Middle East Tourism";
			break;
	}
}

let res = document.getElementsByClassName("mArea");
for(var i = 0; i < res.length; i++) {
	res[i].addEventListener("click", mAreaClick);
}
function carouX(e,dir){
	if (!inTransit) {
		inTransit = true;
		document.getElementById("bannerPack" + (curCarou + 1)).classList.remove("packVis");		
		document.getElementById("bannerPack" + (curCarou + 1)).classList.add("packInvis");
		setTimeout(function (cur) {
			document.getElementById("bannerPack" + (cur + 1)).style.display = "none";
			document.getElementById("bannerPack" + (cur + 1)).classList.remove("packInvis");
			inTransit = false;
		}, 600, curCarou);
		curCarou = dir[curCarou];
		document.getElementById("bannerPack" + (curCarou + 1)).classList.add("packVis");
		document.getElementById("bannerPack" + (curCarou + 1)).style.display = "block";
	}
}


bannerBtnRight.addEventListener("click", function(e){carouX(e,carouLinksLeft)});
bannerBtnLeft.addEventListener("click", function(e){carouX(e,carouLinksRight)});
//mArea
