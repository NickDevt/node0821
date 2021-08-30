/*В данном уроке создается JS сервер на http пакете
 Данный пример иллюстрирует упрощенное содержание популярных фреймворков типа express итд
 Хронологии видео соответствует движение кода снизу вверх.
 Так, последний пример окажется наверху
 Примеры будут комментироваться полностью и переписываться с нуля
 Примеры также будут пронумерованы и иметь короткое описание
*/



//Действие 3
const http = require('http')

//В качестве заголовков мы можем передавать всякое разное, но только на латинице. Скорее всего ASCII
const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        response.writeHead(200, {
            "Content-Type": "text/html",
            "Sobaka": "pes"
        })
        response.end(`
            <h1>Form</h1>
            <form method="post" action="/">
            <input name="title" type="text" />
            <button type="submit">Send</button>
            </form>
        `)
    }

    else if (request.method === "POST"){
        const body = []
        //Далее идёт блок обработки поступающей инфы. Слова на будущее: буфер, чанк.Здесь надо повторить хэндлеры
        //По мере поступления данных, прослушивая их через on - добавляем данные в массив body
         request.on('data', data => {
             body.push(Buffer.from(data))
         })

        request.on('end', () => {
            const message = body.toString()
        })


        response.end(`
        <h1>Your message is ${message} </h1>
        `)
    }
    console.log(request.url)
    // response.write('<h1>Lalalalalal</h1>')

})

server.listen(3000, () => {
    console.log('Server is running')
})




/*
//Действие 2. Создание скрипта для подключения nodemon
//Скриптs мы регистрируем в package.json в паре "scripts": {"name":"start_command file_name"}
//В нашем случае регаем 2 скрипта для обычного запуска сервера и запуска через nodemon
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//         "start": "node 2_14_simple_server.js",
//         "dev": "nodemon 2_14_simple_server.js"
// }
//Теперь мы можем запустить их соответствующей командой пример nodemon lesson1.json
//Если nodemon не распознается - надо установить его глобально npm install -g nodemon
//К сожалению, если скрипты в системе отключены - нужны дополнительные танцы с бубном - https://ru.stackoverflow.com/questions/935212/powershell-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B2-%D0%BE%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%BE-%D0%B2-%D1%8D%D1%82%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B5

*/

/*
    //Действие 1. Простейший сервер запрос - ответ
const http = require('http')
 //Примечательно, что без response.end() ответ отдается некорректный
 //response.end() может иметь сожержимое и выводить его по окончании загрузки документа
 const server = http.createServer((request, response) => {
      console.log(request.url)
      response.write('<h1>Lalalalalal</h1>')
      response.end()
 })

 server.listen(3000, () => {
  console.log('Server is running')
 })
 */
