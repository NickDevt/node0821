// Мы можем работать с консолью, добавляя и извлекая из нее аргументы

function cons() {
    const c = {}
    for (let i = 2; i < process.argv.length; i++){
        const arg = process.argv[i].split('=')
        c[arg[0]] = arg[1] ? arg[1] : true
    }
    return c
}

console.log(cons())


// console.log(process.argv)
// Пропишем в консоль node 2_17_console.js message=hello spec=false и увидим, что всё работает исправно

