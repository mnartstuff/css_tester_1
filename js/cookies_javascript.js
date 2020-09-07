
function welcome(){

}

function setDate(){
  document.getElementById('date').innerHTML=Date();
}

function cannedham(){
	document.getElementById('inner').innerHTML="Canned Ham!";
}

function openMe(){
	x=document.getElementById('pp');
	x.style.display="inline-block";
	x=document.getElementById('close');
	x.style.display="inline-block";
	x=document.getElementById('open');
	x.style.display="none";
	
}

function closeMe(){
	x=document.getElementById('pp');
	x.style.display="none";
	x=document.getElementById('close');
	x.style.display="none";
	x=document.getElementById('open');
	x.style.display="inline-block";
}
