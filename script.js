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

    let formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + "/" +
                        date.getDate().toString().padStart(2, '0') + "/" +
                        date.getFullYear();
    
    resultDiv.innerHTML = "<strong>Final Payment Due on:</strong> " + formattedDate;
    resultDiv.style.display = "block";
}
