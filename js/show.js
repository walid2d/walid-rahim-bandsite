"use strict";

const showsArr = [
  {
    date: "Wed Jun 08 2022",
    venue: "Gleneagle Arena",
    location: "Dublin, ireland",
  },
  {
    date: "Fri Jun 10 2022",
    venue: "St Annes Park",
    location: "Dublin, ireland",
  },
  {
    date: "Sat Jun 11 2022",
    venue: "St Annes Park",
    location: "Dublin, ireland",
  },
  {
    date: "Sun Jun 19 2022",
    venue: "Megaland",
    location: "Landgraaf, Netherlands",
  },
  {
    date: "Thu Jun 23 2022",
    venue: "Ormeau Park",
    location: "Belfast, England",
  },
  {
    date: "Fri Jun 24 2022",
    venue: "Malahid Castle",
    location: "Dublin, ireland",
  },
];

const tableTicketWrapper = document.querySelector(".table__ticket-wrapper");
const createTickets = function (arr) {
  arr.forEach(function (k, i) {
    // ticket container
    const ticket = document.createElement("div");
    ticket.classList.add("ticket");
    ticket.addEventListener("click", function (e) {
      e.target.classList.toggle("ticket__active");
    });
    //label
    const dateLabel = document.createElement("p");
    dateLabel.classList.add("ticket__label", "label");
    const labelText = Object.keys(k);
    dateLabel.textContent = labelText[0];
    // ticket date
    const ticketDate = document.createElement("h3");
    ticketDate.textContent = arr[i].date;
    ticketDate.classList.add("ticket__date");
    //label
    const venueLabel = document.createElement("p");
    venueLabel.classList.add("ticket__label", "label");
    venueLabel.textContent = labelText[1];
    // ticket__name
    const ticketName = document.createElement("h3");
    ticketName.textContent = arr[i].venue;
    ticketName.classList.add("ticket__name");
    //label
    const locationLabel = document.createElement("p");
    locationLabel.classList.add("ticket__label", "label");
    locationLabel.textContent = labelText[2];
    //ticket place
    const ticketPlace = document.createElement("h3");
    ticketPlace.textContent = arr[i].location;
    ticketPlace.classList.add("ticket__place");
    // ticket button
    const ticketBtn = document.createElement("a");
    ticketBtn.textContent = "Buy Ticket";
    ticketBtn.classList.add("ticket__btn", "btn");
    ticketBtn.setAttribute(
      "href",
      "https://www.ticketmaster.ca/dermot-kennedy-tickets/artist/2089473"
    );
    ticket.appendChild(dateLabel);
    ticket.appendChild(ticketDate);
    ticket.appendChild(venueLabel);
    ticket.appendChild(ticketName);
    ticket.appendChild(locationLabel);
    ticket.appendChild(ticketPlace);
    ticket.appendChild(ticketBtn);
    tableTicketWrapper.appendChild(ticket);
  });
};
createTickets(showsArr);
