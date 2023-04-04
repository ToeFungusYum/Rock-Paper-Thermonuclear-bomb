function rockFunction(){
	var botChoice = Math.floor((Math.random()*3)+1);
	
if (botChoice==1){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if (botChoice==2){
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}

if (botChoice==1){
  document.querySelector("img.img1").src="images/rock.png";
  document.querySelector("img.img2").src="images/bomb.png";
}
else if (botChoice==2){
   document.querySelector("img.img1").src="images/rock.png";
   document.querySelector("img.img2").src="images/paper.png";
  
}
else {
  document.querySelector("img.img1").src="images/rock.png";
  document.querySelector("img.img2").src="images/rock.png";
}
	
}

function paperFunction(){
	var botChoice = Math.floor((Math.random()*3)+1);
	
if (botChoice==1){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if (botChoice==2){
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}

if (botChoice==1){
  document.querySelector("img.img1").src="images/paper.png";
  document.querySelector("img.img2").src="images/rock.png";
}
else if (botChoice==2){
   document.querySelector("img.img1").src="images/paper.png";
   document.querySelector("img.img2").src="images/bomb.png";
  
}
else {
  document.querySelector("img.img1").src="images/paper.png";
  document.querySelector("img.img2").src="images/paper.png";
}
	
}


function bombFunction(){
	var botChoice = Math.floor((Math.random()*3)+1);

if (botChoice==1){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if (botChoice==2){
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}

if (botChoice==1){
  document.querySelector("img.img1").src="images/bomb.png";
  document.querySelector("img.img2").src="images/paper.png";
}
else if (botChoice==2){
   document.querySelector("img.img1").src="images/bomb.png";
   document.querySelector("img.img2").src="images/rock.png";
  
}
else {
  document.querySelector("img.img1").src="images/bomb.png";
  document.querySelector("img.img2").src="images/bomb.png";
}

}