function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const result = document.getElementById('result');

    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    if (birthdate > today) {
        result.textContent = "Please enter a valid birthdate.";
    } else {
        let ageYears = today.getFullYear() - birthdate.getFullYear();
        let ageMonths = today.getMonth() - birthdate.getMonth();
        let ageDays = today.getDate() - birthdate.getDate();

        // Check if the birthday has occurred this year
        if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birthdate.getDate())) {
            ageYears--;
            ageMonths += 12;
        }

        // If today is earlier than the birthdate, subtract one day
        if (ageDays < 0) {
            ageDays += new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
            ageMonths--;
        }

        result.textContent = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
    }
}
