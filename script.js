function calculateDate() {
    let cruiseDate = document.getElementById("cruiseDate").value;
    let cruiseLength = document.getElementById("cruiseLength").value;
    let resultDiv = document.getElementById("result");
    
    if (!cruiseDate || !cruiseLength) {
        alert("Please select both cruise date and length.");
        return;
    }
    
    let date = new Date(cruiseDate);
    date.setDate(date.getDate() - parseInt(cruiseLength));

    // Array of abbreviated month names
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Format date as MMM/DD/YYYY
    let formattedDate = monthNames[date.getMonth()] + "/" +
                        date.getDate().toString().padStart(2, '0') + "/" +
                        date.getFullYear();
    
    resultDiv.innerHTML = "<strong>Final Payment Due:</strong> " + formattedDate;
    resultDiv.style.display = "block";
}

