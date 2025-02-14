const button = document.getElementById('button');
const dayInput = document.getElementById('number1');
const monthInput = document.getElementById('number2');
const yearInput = document.getElementById('number3');

const yearsOutput = document.getElementById('yearsout');
const monthsOutput = document.getElementById('monthsout');
const daysOutput = document.getElementById('daysout');

function calculating() {
    // Get and trim input values
    const daysValue = dayInput.value.trim();
    const monthValue = monthInput.value.trim();
    const yearValue = yearInput.value.trim();

    // Check if values are empty
    if (daysValue === "" || monthValue === "" || yearValue === "") {
        alert('Please fill out all fields!');
        return;
    }

    // Convert values to numbers
    const daysNumber = Number(daysValue);
    const monthsNumber = Number(monthValue);
    const yearsNumber = Number(yearValue);

    // Validate inputs
    if (
        isNaN(daysNumber) || isNaN(monthsNumber) || isNaN(yearsNumber) ||
        daysNumber < 1 || daysNumber > 31 ||
        monthsNumber < 1 || monthsNumber > 12 ||
        yearsNumber < 0
    ) {
        alert('Please enter valid numbers!');
        return;
    }
    // if the days is over 31 
    if(daysNumber > 31 || monthsNumber > 12 ){
        alert('please enter the right days , months!!!!!')
        return;
    }
    

    // Get today's date
    const today = new Date();
    const yearNow = today.getFullYear();
    const monthNow = today.getMonth() + 1; // Months are 0-indexed, so add 1
    const dayNow = today.getDate();


    

    // Calculate age
    let birthYears = yearNow - yearsNumber;
    let birthMonths = monthNow - monthsNumber;
    let birthDays = dayNow - daysNumber;

    // Handle negative months or days
    if (birthDays < 0) {
        // Borrow days from the previous month
        const lastMonthDays = new Date(yearNow, monthNow - 1, 0).getDate(); // Days in the previous month
        birthDays += lastMonthDays;
        birthMonths--; // Subtract 1 month
    }

    if (birthMonths < 0) {
        // Borrow months from the previous year
        birthMonths += 12;
        birthYears--; // Subtract 1 year
    }
    //check if the date is in the future
    if(yearsNumber > yearNow){
        alert('this date is in the future please enter the right one')
        return;
    }

    // Update the DOM with the calculated age
    yearsOutput.textContent = birthYears;
    monthsOutput.textContent = birthMonths;
    daysOutput.textContent = birthDays;

    yearsOutput.setAttribute('id','dateanimation')
    monthsOutput.setAttribute('id','dateanimation')
    daysOutput.setAttribute('id','dateanimation')
}

button.addEventListener('click', calculating);