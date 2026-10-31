//Write your code here
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00,
};


//function that logs the name of the attendee
function logAttendeeName() {
  console.log(attendee.name);
};


//function to log ticket
 function logTicketPrice() {
  console.log(attendee.ticketPrice);
}


//function that updates ticket
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
};


//function that updates the ticket price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
};
 

function removeEventProperty(attendee) {
  delete attendee.event;
};


function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
};

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};