
//Переменные, начинающиеся на $ это условное обозначение для указания на jQuery/JS объект
//Это рекомендация
const $selection = document.querySelector('#selection')
if ($selection) {
    $selection.addEventListener('click', event =>{
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id
            // console.log(id)

            //Дальше ajax блок
            fetch('/cont_selection/remove/' + id,{
                method: 'delete'
            }).then(res => res.json())
                .then(selection =>{
                    // console.log(selection)
                    if (selection.contacts.length){
                        const html = selection.contacts.map(c =>{
                            return `
                            <tr>
                                <td>${c.email}</td>
                                <td>${c.firstName}</td>
                                <td>${c.secondName}</td>
                                <td>${c['count']}</td>
                                <td>${c.price}</td>
                                <td>
                                    <!--Класс js-remove для удаления из корзины-->
                                    <button class="btn btn-small js-remove" data-id="{{id}}">Удалить</button>
                                </td>
                            </tr>
                            `
                        }).join('')
                        $selection.querySelector('tbody').innerHTML = html
                        $selection.querySelector('.price').textContent = selection.price
                    }else{
                        $selection.innerHTML = '<p>Список пуст</p>'
                    }
                })



        }
    })
}


// const aa = (a) => {
//     const arr = [
//         {id: 1, name: "firstNAme"},
//         {id:2, name: "SecondName"},
//         {id:3, name: "thirdName"}
//     ]
//
//     idx = arr.findIndex(i => i.id === a)
//     console.log(idx)
//     console.log(arr[-1])
//     console.log(arr[1].count)
// }
//
// aa(1)
// const ab = aa(1)
//
// if(ab){
//     console.log("Есть такой объект")
// } else {
//     console.log("Нет такого объекта")
// }









//Эта хрень почему-то полностью отказывается работать. Задал класс итд, пишет, что ошибка значения
//Потратил полчаса, больше не целесообразно
// document.querySelectorAll('.price').forEach(node =>{
//     node.textContent = new Intl.NumberFormat('ru_RU', {
//         currency: 'rub',
//         style: 'currency'
//     }).format(node.textContent)
//
// })


//Такая запись при этом отрабатывает норм
// document.querySelectorAll('.price').forEach(elem =>{
// console.log(elem)
//
// })


