function calculateDates() {
  const cruiseDateInput = document.getElementById('cruiseDate').value;
  const cruiseLength = parseInt(document.getElementById('cruiseLength').value, 10);
  if (!cruiseDateInput) {
    alert("Please select a cruise date!");
    return;
  }
 
  // Convert the input date to a Date object
  const cruiseDate = new Date(cruiseDateInput);
 
  let result1 = '';
  let result2 = '';
  let result3 = '';
 
  // Check the cruise length and calculate the appropriate result
  if (cruiseLength >= 2 && cruiseLength <= 5) {
    // Show only the 76-day calculation
    result1 = new Date(cruiseDate);
    result1.setDate(result1.getDate() - 76);
    document.getElementById('result1').textContent = `76 days before: ${result1.toDateString()}`;
    document.getElementById('result2').textContent = '';
    document.getElementById('result3').textContent = '';
  } else if (cruiseLength >= 6 && cruiseLength <= 7) {
    // Show only the 91-day calculation
    result2 = new Date(cruiseDate);
    result2.setDate(result2.getDate() - 91);
    document.getElementById('result1').textContent = '';
    document.getElementById('result2').textContent = `91 days before: ${result2.toDateString()}`;
    document.getElementById('result3').textContent = '';
  } else if (cruiseLength === 10) {
    // Show only the 121-day calculation
    result3 = new Date(cruiseDate);
    result3.setDate(result3.getDate() - 121);
    document.getElementById('result1').textContent = '';
    document.getElementById('result2').textContent = '';
    document.getElementById('result3').textContent = `121 days before: ${result3.toDateString()}`;
  }
}
