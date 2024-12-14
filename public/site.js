
//Function to get all events from api
const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}
const getEventId = async id => {
	const response = await fetch(`/api/v1/events/${id}`)
	return await response.json()
}
//function to load the events onto the html page 
const loadEvents = events => {
    //Gets the events and data
    events.forEach(({ _id, Name, Date, }) => {
        //Selecting the UL with the event class
		const eventsList = document.querySelector('.event');
    //clears it of any data that may be inside
    eventsList.innerHTML = '';
    //for each event create a li inside the ul, the inside the li add the name and date properties.
    events.forEach(({ _id, Name, Date, }) => {
        const eventItem = document.createElement('li')
        eventItem.innerHTML = `
            <h2>${Name}</h2>
            <p>Date: ${Date}</p>
            <button class="details" data-id="${_id}">Details</button>
        `
        //adding an event listener to all the buttons to load by id
        //document.querySelector('.details').addEventListener('click', async () => {
        //    const eventDetails = await getEventId(_id);
        //    console.log(eventDetails);
        //})
        //Add it to the ul with class of event
        eventsList.appendChild(eventItem);
	})
})}




//Load menu

//get menu items from api
const getMenu = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}


const loadMenu = menuItem => {
    menuItem.forEach(({ _id, ProductName, Price }) => {
	    const menuList = document.querySelector('.menu');
        menuList.innerHTML = '';
        menuItem.forEach(({ _id, ProductName, Price }) => {
        const menuItem = document.createElement('li')
        menuItem.innerHTML = `
            <h2>${ProductName}</h2>
            <p>Price: ${Price}</p>
            <button id="${_id}">Details</button>
        `
        menuList.appendChild(menuItem);
	    })
    })
}

const getMenuId = async id => {
	const response = await fetch(`/api/v1/menu/${id}`)
	return await response.json()
}


;(async () => {
	const events = await getEvents();
    const menu = await getMenu();
    loadMenu(menu);
    loadEvents(events);

})()