const sidebar = document.getElementById('sidebar');
const button = document.getElementById('toggle');

button.addEventListener('click', _ => {
  sidebar.classList.toggle('collapsed');
});

function connectToAPI()
{
	var request = new XMLHttpRequest();
	request.open('POST', 'https://api.thetvdb.com/login', true);
	
	var data = JSON.stringify({"apikey":"e0d3db753cb646c843d39d6767c9cc21"});
	request.send(data);
	
	console.log(request.responseText);
}
