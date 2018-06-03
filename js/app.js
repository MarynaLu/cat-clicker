var counter1 = 0;
var counter2 = 0;

function countClicks(){

	function increaseClicks(updateText, theCounter){
		console.log("Image click works!");
		theCounter += 1;
		updateText.innerHTML = theCounter + " clicks";
	};

	if(event.target === document.getElementsByClassName("theCat")[0]){
		increaseClicks(document.getElementById("counter1"), counter1);
	} else if (event.target === document.getElementsByClassName("theCat")[1]){
		increaseClicks(document.getElementById("counter2"), counter2);
	};
};

document.getElementsByClassName("theCat")[0].addEventListener("click", countClicks);
document.getElementsByClassName("theCat")[1].addEventListener("click", countClicks);

document.getElementsByClassName("catName")[0].innerHTML = "Jonny";
document.getElementsByClassName("catName")[1].innerHTML = "Franky";