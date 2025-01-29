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
    
    resultDiv.innerHTML = "<strong>Final Payment Due:</strong> " + date.toISOString().split('T')[0];
    resultDiv.style.display = "block";
}
