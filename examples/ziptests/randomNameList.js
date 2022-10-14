const api_url_list10 = "https://randomuser.me/api/?results=10, inc=name";

async function get10Users() {

	// Making an API call (request)
	// and getting the response back
	const response = await fetch(api_url);

	// Parsing it to JSON format
	const data = await response.json();
	console.log(data.results);

	// Retrieving data from JSON
	const user = data.results[0];
	let { title, first, last } = user.name;
	let fullName = title + ". " + first + " " + last;
	document.title = fullName;

	// Accessing the div container and modify/add
	// elements to the containers
	document.getElementById("head").innerHTML = fullName;
	
}

// Calling the function
get10Users();