let eventSection = document.getElementById('eventCards')

const events = [
    {
        EventName: 'Book Drive',
        Date: 'February 12, 2023',
        location: 'to be determined',
        
    },
    {
        EventName: 'Food Drive',
        Date:'January 30, 2023',
        location: 'to be determined'
    },
    {
        EventName: 'Clothes and Shoes drive',
        Date:'February 20, 2023',
        location: 'to be determined'
    }, 
    {
        EventName: 'Free tutoring',
        Date: 'Every Thursday',
        location: 'To be detemined'
    }
]

function upcomingEvent() {
    for(let i = 0; i < events.length; i++) {
        let cardDiv = document.createElement('div')

        //event image section

        //event name section
        let Name = document.createElement('h3')
        Name.textContent = events[i].EventName

        //event date section
        let eventDate = document.createElement('h4')
        eventDate.textContent = events[i].Date

        //event location
        let eventLocation = document.createElement('h5')
        eventLocation.textContent = events[i].location

        //learn more button

        let learnMoreBtn = document.createElement('button')
        learnMoreBtn.textContent = 'Learn More'

        cardDiv.append(Name,eventDate,eventLocation,learnMoreBtn)
        

        eventSection.append(cardDiv)
    }
}

upcomingEvent()