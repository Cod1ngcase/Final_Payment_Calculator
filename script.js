function calculate() {
    const cruiseDateInput = document.getElementById('cruise-date').value;
    const cruiseLength = parseInt(document.getElementById('cruise-length').value);
    const resultElement = document.getElementById('result');

    if (!cruiseDateInput) {
        resultElement.textContent = 'Please enter a valid cruise date.';
        return;
    }

    const cruiseDate = new Date(cruiseDateInput);
    cruiseDate.setDate(cruiseDate.getDate() + cruiseLength);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const returnDate = cruiseDate.toLocaleDateString(undefined, options);

    resultElement.textContent = `Your return date is: ${returnDate}`;
}
