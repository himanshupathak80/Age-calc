document.getElementById('ageCalcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();

    const ageYears = now.getFullYear() - dob.getFullYear();
    const ageMonths = now.getMonth() - dob.getMonth() + (ageYears * 12);
    const ageDays = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
    const ageHours = Math.floor((now - dob) / (1000 * 60 * 60));
    const ageMinutes = Math.floor((now - dob) / (1000 * 60));
    const ageSeconds = Math.floor((now - dob) / 1000);

    let years = ageYears;
    if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
        years--;
    }

    const months = (now.getMonth() >= dob.getMonth()) ? now.getMonth() - dob.getMonth() : 12 + now.getMonth() - dob.getMonth();
    const days = (now.getDate() >= dob.getDate()) ? now.getDate() - dob.getDate() : new Date(now.getFullYear(), now.getMonth(), 0).getDate() + now.getDate() - dob.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const result = `
        You are:<br>
        ${years} years<br>
        ${months} months<br>
        ${days} days<br>
        ${hours} hours<br>
        ${minutes} minutes<br>
        ${seconds} seconds old.
    `;

    document.getElementById('result').innerHTML = result;
});
