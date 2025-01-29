function calculateDate() {
    let cruiseDate = document.getElementById("cruiseDate").value;
    let cruiseLength = document.getElementById("cruiseLength").value;
    let resultDiv = document.getElementById("result");
    
    if (!cruiseDate || !cruiseLength) {
        alert("Please select both cruise date and length.");
        return;
    }
    
    let date = new Date(cruiseDate);
    let daysToSubtract = 0;

    // Determine the number of days to subtract based on cruise length
    if (cruiseLength >= 2 && cruiseLength <= 5) {
        daysToSubtract = 76;
    } else if (cruiseLength >= 6 && cruiseLength <= 7) {
        daysToSubtract = 91;
    } else if (cruiseLength == 10) {
        daysToSubtract = 121;
    } else {
        alert("Invalid cruise length selected.");
        return;
    }

    // Subtract the determined days from the cruise date
    date.setDate(date.getDate() - daysToSubtract);

    // Array of abbreviated month names
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Format date as MMM/DD/YYYY
    let formattedDate = monthNames[date.getMonth()] + "/" +
                        date.getDate().toString().padStart(2, '0') + "/" +
                        date.getFullYear();
    
    resultDiv.innerHTML = "<strong>Final Payment Due:</strong> " + formattedDate;
    resultDiv.style.display = "block";
}
