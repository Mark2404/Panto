const productp = document.querySelectorAll('.productp')
const buttons = document.querySelectorAll('.fl-buttons');
const counterElement = document.getElementById('counter');
const plusBtn = document.querySelectorAll('.plus-btn')
let count = 0;


buttons.forEach(button => {
    button.addEventListener('click', () => {

        buttons.forEach(btn => btn.classList.remove('title-button-active'));
        button.classList.add('title-button-active');
    });
});

plusBtn.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
        if (count == 15) {
            alert("boymisiz bratim?)")


        }
        if (count == 20) {
            alert("bu sizga optom bozor mas")
        }
    });
});
