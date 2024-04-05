// script.js
document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('bookingForm');
  const bookingInfo = document.getElementById('bookingInfo');
  const bookingDetails = document.getElementById('bookingDetails');
  const bookingTable = document.getElementById('bookingTable');
  const bookingTableBody = document.getElementById('bookingTableBody');

  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;
    const comments = document.getElementById('comments').value;

    // Display booking information
    bookingDetails.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Comments:</strong> ${comments}</p>
    `;
    bookingInfo.classList.remove('hidden');

    // Add booking to table
    const newRow = bookingTableBody.insertRow();
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${phone}</td>
      <td>${date}</td>
      <td>${time}</td>
      <td>${service}</td>
      <td>${comments}</td>
    `;

    // Show table if it was hidden
    if (bookingTable.classList.contains('hidden')) {
      bookingTable.classList.remove('hidden');
    }

    // Clear form fields
    bookingForm.reset();
  });
});
