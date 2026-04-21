const contentDiv = document.getElementById("content");

export function loadHomePage() {
    const placeName = document.createElement("h1");
    placeName.textContent = "Elodie's Eatery";
    placeName.classList.add("block");

    // review
    const review = document.createElement("div");
    review.classList.add("item");
    const text = document.createElement("p");
    text.textContent = `Elodie's has the best pastries! The atmosphere and customer service make you feel like you 
                are at her house, eating like a weirdo on a ballerina budget! This is exactly the kind of place 
                that I like to return to again and again. Weemp womp weemp womp!`;
    const person = document.createElement("h3");
    person.textContent = "Lucy";
    review.append(text,person);

    // hours
    const when = document.createElement("div");
    when.classList.add("item");
    const hours = document.createElement("h2");
    hours.textContent = "Hours";
    const sunday = document.createElement("p");
    sunday.textContent = "Sunday: closed";
    const monday = document.createElement("p");
    monday.textContent = "Monday: 7am - 3pm";
    const tuesday = document.createElement("p");
    tuesday.textContent = "Tuesday: 8am - 5pm";
    const wednesday = document.createElement("p");
    wednesday.textContent = "Wednesday: 8am - 9pm";
    const thursday = document.createElement("p");
    thursday.textContent = "Thursday: 9am - 6pm";
    const friday = document.createElement("p");
    friday.textContent = "Friday: 8am - 7pm";
    const saturday = document.createElement("p");
    saturday.textContent = "Saturday: 9am - 7pm";
    when.append(hours,sunday,monday,tuesday,wednesday,thursday,friday,saturday);

    // location
    const place = document.createElement("div");
    place.classList.add("item","end");
    const location = document.createElement("h2");
    location.textContent = "Location";
    const address = document.createElement("p");
    address.textContent = "123 Cinnamon Ridge Dr, Homosassa FL";
    place.append(location,address);


    contentDiv.append(placeName,review,when,place);
}