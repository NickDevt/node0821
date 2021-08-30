// В данном файле базовое понимание асинхронности, попытка понять промисы
// Про промисы детальней в файле 2_11_3promise.js


//Примитивный пример асинхронности
console.log(1)
console.log(2)
setTimeout(()=>{
    console.log('3-1')
}, 2000)
console.log(4)


//ВАЖНО
//ПЕРЕДАЧА ФУНКЦИИ В КАЧЕСТВЕ АРГУМЕНТА В АСИНХРОННОМ КОДЕ ДОЖНА БЫТЬ БЕЗ СКОБОЧЕК, ИНАЧЕ КОД ВЫПОЛНИТСЯ МОМЕНТАЛЬНО
// function timeout2sec(){
//     console.log(3)
// }
// console.log(1)
// console.log(2)
//В данном примере нам даже не позволяют это сделать  'ERR_INVALID_CALLBACK'
// setTimeout(timeout2sec(), 2000)
// console.log(4)


//http://latentflip.com/loupe/
//На данном сайте можно достаточно наглядно увидеть, как работает асинхронность


//Интересен следующий пример:
console.log(1)
console.log(2)
setTimeout(()=>{
    console.log('3-2')
}, 0)
console.log(4)
//Несмотря на то, что таймаут 0 и по идее 3 должно идти перед 4, выполнение происходит иначе
//Связано это с тем, что при таймауте действие попадает в очередь и выполнение отсрочивается
//Подробнее тут https://www.youtube.com/watch?v=vIZs5tH-HGQ
//http://latentflip.com/loupe/

//PROMISE
//Промисы были придуманы для того, чтобы решить проблему с многовложенными функциями

const promis = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const backData = {
            server: 'some',
            port: 2000,
            status: 200
        }
        resolve(backData)
    }, 2000)
})

promis.then((data) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
}).then(clientData =>{
    console.log('DataRecieved', clientData)
})


// Насколько я понял на данном этапе, промисы это вид записи для функционала ожидание -> действие
// То есть, через promise мы объявляем функцию, которая будет ждать
// Будет ждать и выдавать один из вариантов: успех или ошибка
// Когда Промис наконец должался события - происходит Promise.then
// В предыдущем примере всё записано сложно, вот более простой пример:
// С НУЛЯ О ПРОМИСАХ В ФАЙЛЕ 2_11_3promise.js

// Создаётся объект promise
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("result");
    }, 1000);

});
// promise.then навешивает обработчики на успешный результат или ошибку
promise
    .then(
        result => {
            // первая функция-обработчик - запустится при вызове resolve
            alert("Fulfilled: " + result); // result - аргумент resolve
        },
        error => {
            // вторая функция - запустится при вызове reject
            alert("Rejected: " + error); // error - аргумент reject
        }
    );
// Очень любопытно, что тут нет if else ветвления. Значит, это подразумевает сам метод .then()
// Заметим, что после вызова resolve/reject промис уже не может «передумать».
// Когда промис переходит в состояние «выполнен» – с результатом (resolve) или ошибкой (reject) – это навсегда.
// Дополнительная инфа https://learn.javascript.ru/promise


/*«Чейнинг» (chaining), то есть возможность строить асинхронные цепочки из промисов –
пожалуй, основная причина, из-за которой существуют и активно используются промисы.

    Например, мы хотим по очереди:

    Загрузить данные посетителя с сервера (асинхронно).
    Затем отправить запрос о нём на github (асинхронно).
    Когда это будет готово, вывести его github-аватар на экран (асинхронно).
    …И сделать код расширяемым, чтобы цепочку можно было легко продолжить.
    Вот код для этого, использующий функцию httpGet, описанную выше:*/

// сделать запрос
httpGet('/article/promise/user.json')
    // 1. Получить данные о пользователе в JSON и передать дальше
    .then(response => {
        console.log(response);
        let user = JSON.parse(response);
        return user;
    })
    // 2. Получить информацию с github
    .then(user => {
        console.log(user);
        return httpGet(`https://api.github.com/users/${user.name}`);
    })
    // 3. Вывести аватар на 3 секунды (можно с анимацией)
    .then(githubUser => {
        console.log(githubUser);
        githubUser = JSON.parse(githubUser);

        let img = new Image();
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.appendChild(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });
