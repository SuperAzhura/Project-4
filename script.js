const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');
const dayDiv = document.getElementById('day');
const monthDiv = document.querySelector('.month'); 
const yearDiv = document.querySelector('year'); 

setInterval(updateClock, 1000);

function updateClock(){
	let date = new Date();
	let sec = date.getSeconds() / 60;
	let min = (date.getMinutes() + sec) / 60;
	let hour = (date.getHours() + min) / 12;

	secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
	minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
	hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";

	dayDiv.textContent = formatDate(date);
}

function formatDate(date) {
	const options = {month: 'long', day: 'numeric', year: 'numeric'};
	return date.toLocaleDateString('en-US', options);
}

updateClock();