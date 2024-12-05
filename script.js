function calculateDates() {
    // const date = new Date(inputDate);
    // date.setDate(date.getDate() - 75);
    // return date.toISOString().split('T')[0];

    const inputDate = new Date(document.getElementById("inputDate").value);
    const resultDate = new Date(inputDate);
    resultDate.setDate(resultDate.getDate() - 75);
    document.getElementById("Results").innerText = resultDate.toDateString();


}