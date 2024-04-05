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
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);

    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = phone;
    cell4.textContent = date;
    cell5.textContent = time;
    cell6.textContent = service;
    cell7.textContent = comments;

    // Show table if it was hidden
    if (bookingTable.classList.contains('hidden')) {
      bookingTable.classList.remove('hidden');
    }

    // Clear form fields
    bookingForm.reset();
  });
});
