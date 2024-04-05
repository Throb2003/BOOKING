// script.js

// Event scheduler functionality
const eventForm = document.getElementById('create-event-form');
const eventList = document.getElementById('event-list-items');

// Function to create new event item
function createEventItem(eventName, eventDate) {
  const eventItem = document.createElement('li');
  eventItem.innerHTML = `
    <strong>${eventName}</strong> - ${eventDate}
  `;
  return eventItem;
}

// Function to add event to the list
function addEventToList(eventItem) {
  eventList.appendChild(eventItem);
}

// Event listener for form submission
eventForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const eventName = document.getElementById('event-name').value;
  const eventDate = document.getElementById('event-date').value;
  const newEventItem = createEventItem(eventName, eventDate);
  addEventToList(newEventItem);
  eventForm.reset();
});

