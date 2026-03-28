const dataGroup = [
    {
        question: "Сколько часов <br>в день вы спите?",
        answers: [
            {
                answer: 'Менее семи',
                points: 1,
            },
            {
                answer: 'Семь-девять',
                points: 2,
            },
            {
                answer: 'Более девяти',
                points: 3,
            }
        ]
    },
    {
        question: "Во сколько <br>вы ложитесь спать?",
        answers: [
            {
                answer: 'После 23.00',
                points: 1,
            },
            {
                answer: 'В 22.00-23.00',
                points: 2,
            },
            {
                answer: 'В 21.00-22.00',
                points: 3,
            }
        ]
    },
    {
        question: "Вы пользуетесь смартфоном <br>непосредственно перед отходом ко сну?",
        answers: [
            {
                answer: 'Да',
                points: 1,
            },
            {
                answer: 'Время от времени',
                points: 2,
            },
            {
                answer: 'Нет',
                points: 3,
            }
        ]
    },
    {
        question: "Вы засыпаете <br>в абсолютной темноте?",
        answers: [
            {
                answer: 'Нет',
                points: 1,
            },
            {
                answer: 'Да',
                points: 3,
            }
        ]
    },
    {
        question: "Окна вашей спальни <br>выходят на освещенную улицу?",
        answers: [
            {
                answer: 'Да',
                points: 1,
            },
            {
                answer: 'Нет',
                points: 3,
            }
        ]
    },
    {
        question: "Какая температура <br>в вашей спальне?",
        answers: [
            {
                answer: 'Выше 22 °С',
                points: 1,
            },
            {
                answer: 'Ниже 22 °С',
                points: 3,
            }
        ]
    }
];

const dataResult = [
    {
        start: 0,
        finish: 6,
        link: '/link1.html',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit neque alias adipisci dolorem, reiciendis laboriosam inventore beatae, ipsam distinctio repellat quod voluptatibus repellendus eaque soluta quaerat saepe aliquam at quibusdam!'
    },
    {
        start: 7,
        finish: 12,
        link: '/link2.html',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit neque alias adipisci dolorem, reiciendis laboriosam inventore beatae, ipsam distinctio repellat quod voluptatibus repellendus eaque soluta quaerat saepe aliquam at quibusdam! 1'
    },
    {
        start: 13,
        finish: 18,
        link: '/link3.html',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit neque alias adipisci dolorem, reiciendis laboriosam inventore beatae, ipsam distinctio repellat quod voluptatibus repellendus eaque soluta quaerat saepe aliquam at quibusdam! 2'
    }
];

let questionStep = 1;
let pointsUser = [];
const textContainer = document.querySelector('.test');
const textCount = document.querySelector('.test-count');
const textTitle = document.querySelector('.test-title');
const textAnswers = document.querySelector('.test-answers');
const textActions = document.querySelector('.test-actions');

//Вариант теста с генерацией результат в HTML
function publicQuestion() {
    textAnswers.innerHTML = '';
    textActions.innerHTML = '';
    const questionNow = dataGroup[questionStep - 1];

    //Рендер заголовка вопроса и количество вопросов
    textCount.innerText = `Вопрос ${questionStep} / ${dataGroup.length}`;
    textTitle.innerHTML = questionNow.question;

    //Рендер вариантов ответов
    questionNow['answers'].forEach((answerItem, answerIndex) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'test-answer';
        answerDiv.innerText = answerItem.answer;
        textAnswers.append(answerDiv);

        //Проверка на то, что вопрос был ранее пройден
        if ((questionStep - 1) in pointsUser) {
            if (pointsUser[(questionStep - 1)] == answerIndex) {
                answerDiv.classList.add('active');
            }
        }

        answerDiv.addEventListener('click', () => {
            const answerButtons = document.querySelectorAll('.test-answer');
            answerButtons.forEach((buttonItem) => {
                buttonItem.classList.remove('active');
            })
            answerDiv.classList.add('active');
        });
    });

    //Рендер кнопки назад
    if (questionStep > 1) {
        const buttonBack = document.createElement('div');
        buttonBack.className = 'secondary-button';
        buttonBack.innerText = 'Назад';
        textActions.append(buttonBack);
        buttonBack.addEventListener('click', () => {
            questionStep--;
            publicQuestion();
        });
    }

    //Рендер кнопки вперед
    const buttonForward = document.createElement('div');
    buttonForward.className = 'primary-button';
    buttonForward.innerText = 'Вперед';
    textActions.append(buttonForward);

    buttonForward.addEventListener('click', () => {
        const answerButtons = document.querySelectorAll('.test-answer');
        answerButtons.forEach((buttonItem, buttonIndex) => {
            if (buttonItem.classList.contains('active')) {

                //Записываем текущий ответ
                pointsUser[(questionStep - 1)] = buttonIndex

                //Проверка на существование следующего вопроса
                questionStep++;
                if (questionStep > dataGroup.length) {

                    //Подсчет полученных баллов
                    let resultFinish = 0;
                    //pointsUserItem - индекс ответа
                    //pointsUserIndex - индекс вопроса
                    pointsUser.forEach((pointsUserItem, pointsUserIndex) => {
                        let pointItem = dataGroup[pointsUserIndex]['answers'][pointsUserItem].points;
                        resultFinish = resultFinish + pointItem;
                    });

                    //Тест закончен и считаем баллы
                    dataResult.forEach((resultItem) => {
                        if (
                            resultFinish >= resultItem.start &&
                            resultFinish <= resultItem.finish
                        ) {
                            //Рендерим контент результата прохождения теста
                            textContainer.innerHTML = '';

                            const resultDiv = document.createElement('div');
                            resultDiv.className = 'test-result';
                            textContainer.append(resultDiv);

                            const resultTitleDiv = document.createElement('div');
                            resultTitleDiv.className = 'test-result-title';
                            resultTitleDiv.innerText = `Ваш результат: ${resultFinish}`;
                            resultDiv.append(resultTitleDiv);
                            
                            const resultDescriptionDiv = document.createElement('div');
                            resultDescriptionDiv.className = 'test-result-descr';
                            resultDescriptionDiv.innerHTML = resultItem.description;
                            resultDiv.append(resultDescriptionDiv);
                        }
                    })
                }
                else {
                    publicQuestion();
                }
            }
        });
    });
}

publicQuestion();