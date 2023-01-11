let eventSection = document.getElementById("eventCardsDiv");

const events = [
  {
    EventName: "Book Drive",
    Date: "February 12, 2023",
    location: "to be determined",
  },
  {
    EventName: "Food Drive",
    Date: "January 30, 2023",
    location: "to be determined",
  },
  {
    EventName: "Clothes and Shoes drive",
    Date: "February 20, 2023",
    location: "to be determined",
  },
  {
    EventName: "Free tutoring",
    Date: "Every Thursday",
    location: "To be detemined",
  },
];

function upcomingEvent() {
  for (let i = 0; i < events.length; i++) {
    let eventImg = document.createElement("img");
    if(events[i].EventName === 'Book Drive') {
        eventImg.classList = 'book card-img'
    } else if(events[i].EventName === 'Food Drive') {
        eventImg.classList = 'foodDrive card-img'
    } else if(events[i].EventName === 'Clothes and Shoes drive') {
        eventImg.classList = 'clothes card-img'
    } else {
        eventImg.classList = 'tutoring card-img'
    }
   

    let outerSection = document.createElement('section');
   

    let cardDiv = document.createElement("div");
   
   

    //event image section

    //event name section
    let Name = document.createElement("h3");
    Name.textContent = events[i].EventName;
    Name.classList = 'card-title'
 

    //event date section
    let eventDate = document.createElement("h4");
    eventDate.textContent = events[i].Date
   
 

    //event location
    let eventLocation = document.createElement("h5");
    eventLocation.textContent = events[i].location;
    eventLocation.classList = 'card-text';
 

    //learn more button

    let learnMoreBtn = document.createElement("button");
    learnMoreBtn.textContent = "Learn More";
   

    cardDiv.append(eventImg, Name, eventDate, eventLocation, learnMoreBtn);

    outerSection.append(cardDiv)

    eventSection.append(outerSection);
  }
}

upcomingEvent();
