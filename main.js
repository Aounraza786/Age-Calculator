function goToStep2() {
    const currentStep = document.getElementById('step1');
    const nextStep = document.getElementById('step2');

    currentStep.classList.add('fadeOut');
    currentStep.addEventListener('animationend', function() {
        currentStep.classList.remove('step-active', 'fadeOut');
        nextStep.classList.add('step-active', 'fadeIn');
    }, { once: true });
}

function goToStep3() {
    const currentStep = document.getElementById('step2');
    const nextStep = document.getElementById('step3');

    currentStep.classList.add('fadeOut');
    currentStep.addEventListener('animationend', function() {
        currentStep.classList.remove('step-active', 'fadeOut');
        nextStep.classList.add('step-active', 'fadeIn');
    }, { once: true });
}

function calculateAge() {
    const day = parseInt(document.getElementById('dob-day').value);
    const month = parseInt(document.getElementById('dob-month').value);
    const year = parseInt(document.getElementById('dob-year').value);

    const dob = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    const currentStep = document.getElementById('step3');
    const resultElement = document.getElementById('result');

    currentStep.classList.add('fadeOut');
    currentStep.addEventListener('animationend', function() {
        currentStep.classList.remove('step-active', 'fadeOut');
        resultElement.innerText = `You are ${age} years old.`;
        resultElement.classList.add('step-active', 'fadeIn');
        resultElement.style.display = 'block';
    }, { once: true });
}