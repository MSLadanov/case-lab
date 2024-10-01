var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(str) {
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()
        if (this.tries < 1) {
            console.log('Игра окончена');
            return alert('Игра окончена');
        }

        if (str.toLowerCase().includes(this.correctAnswer)) {
            alert('Правильный ответ!Использовано попыток: ' + (3 - this.tries));
            console.log('Правильный ответ!Использовано попыток: ' + this.tries);
        } else {
            this.tries--;
            alert('Неправильный ответ!Осталось попыток: ' + this.tries);
            console.log('Неправильный ответ!Осталось попыток: ' + this.tries);
            const hint = this.hints[this.tries === 2 ? 0 : 1];

            if (this.tries) {
                alert('Подсказка: ' + hint);
            }
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);
    }
}