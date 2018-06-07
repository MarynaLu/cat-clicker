//counter variable for counting cat clicks
var counters = [0, 0, 0, 0, 0];

//the function responsible for counting clicks on the cat image
function countClicks(){

	function increaseClicks(updateText, theCounter){
		console.log("Image click works!");
		counters[theCounter] += 1;
		updateText.innerHTML = counters[theCounter] + " clicks";
	};

	if(event.target === document.getElementsByClassName("theCat")[0]){
		increaseClicks(document.getElementById("counter1"), 0);
	} else if (event.target === document.getElementsByClassName("theCat")[1]){
		increaseClicks(document.getElementById("counter2"), 1);
	} else if (event.target === document.getElementsByClassName("theCat")[2]){
		increaseClicks(document.getElementById("counter3"), 2);
	} else if (event.target === document.getElementsByClassName("theCat")[3]){
		increaseClicks(document.getElementById("counter4"), 3);
	} else if (event.target === document.getElementsByClassName("theCat")[4]){
		increaseClicks(document.getElementById("counter5"), 4);
	};
};


//calling countClicks() function on the click off the image
document.getElementsByClassName("theCat")[0].addEventListener("click", countClicks);
document.getElementsByClassName("theCat")[1].addEventListener("click", countClicks);
document.getElementsByClassName("theCat")[2].addEventListener("click", countClicks);
document.getElementsByClassName("theCat")[3].addEventListener("click", countClicks);
document.getElementsByClassName("theCat")[4].addEventListener("click", countClicks);

//dynamically generating cat names
document.getElementsByClassName("catName")[0].innerHTML = "Jonny";
document.getElementsByClassName("catName")[1].innerHTML = "Franky";
document.getElementsByClassName("catName")[2].innerHTML = "Freddie";
document.getElementsByClassName("catName")[3].innerHTML = "Jackie";
document.getElementsByClassName("catName")[4].innerHTML = "Donald";



//invoke displayClick() on a click
document.getElementsByClassName("chooseCat")[0].addEventListener("click", displayCat);
document.getElementsByClassName("chooseCat")[1].addEventListener("click", displayCat);
document.getElementsByClassName("chooseCat")[2].addEventListener("click", displayCat);
document.getElementsByClassName("chooseCat")[3].addEventListener("click", displayCat);
document.getElementsByClassName("chooseCat")[4].addEventListener("click", displayCat);

//display the image on a click on of a list element
function displayCat(){
	if(event.target === document.getElementsByClassName("chooseCat")[0]){
		checkCat();
		document.getElementsByClassName("mainContainer")[0].classList.remove("hidden");
		addCat(0);
	};

	if(event.target === document.getElementsByClassName("chooseCat")[1]){
		checkCat();
		document.getElementsByClassName("mainContainer")[1].classList.remove("hidden");
		addCat(1);
	};

	if(event.target === document.getElementsByClassName("chooseCat")[2]){
		checkCat();
		document.getElementsByClassName("mainContainer")[2].classList.remove("hidden");
		addCat(2);
	};

	if(event.target === document.getElementsByClassName("chooseCat")[3]){
		checkCat();
		document.getElementsByClassName("mainContainer")[3].classList.remove("hidden");
		addCat(3);
	};

	if(event.target === document.getElementsByClassName("chooseCat")[4]){
		checkCat();
		document.getElementsByClassName("mainContainer")[4].classList.remove("hidden");
		addCat(4);
	};
};

//loop throught the cats and check whether the cat is being displayed
var displayedCats = [];

function addCat(catNumber){
	displayedCats.push(document.getElementsByClassName("mainContainer")[catNumber]);
};


function checkCat(number){
		if(displayedCats.length > 0){
			displayedCats[0].classList.add('hidden');
			displayedCats.splice(0, displayedCats.length);
			console.log(displayedCats);
	};
};