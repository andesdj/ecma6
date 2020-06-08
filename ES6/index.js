// Parametros por defecto 
//antes
function antigua1(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'COL';
    console.log(name, age, country)
}

//NUEVA Forma ES6
function nueva1(name = 'oscar', age = 32, country = 'COL') {
    console.log(name, age, country)
}
antigua1();
nueva1();
nueva1('ANDES', 34, 'BOG')

/////////////////////////////////////////////////////////////////////
//TEmplate Literals `` Comillas francesas
let hello = 'hello';
let world = 'world';
let epica = hello + ' ' + world
console.log(epica)
let epica2 = `${hello} ${world}`
console.log(epica2)


// TEXTO MULTILINEA

let lorem = "Sube a la montaña lo más temprano que puedas y recibirás primero \n " +
    "la bendición del sol ";
console.log(lorem)
let lorem2 = `Sube a la montaña lo más temprano que puedas y recibirás primero 
la bendición del sol`;
console.log(lorem2);

/// Acceder a OBJ

let person = {
    'name': 'Andres',
    'age': 34,
    'country': 'COL'
}

console.log(person.age, person.name)

let = { name, age } = person
console.log(name, age)

//////////// UNIR Arrays////////////////

let team1 = ['Andres', 'Oscar', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

// let solo esta disponible en el scope o bloque de codigo
{
    var globalvar = "GLOBAL VAR"
}

{
    let globallet = 'Global let';
    console.log(globallet);
}

console.log(globalvar);


// CONSTANTES
const a = 'b'
a = 'a'
console.log(a)


///////////////////////ASIGNACION DE OBJETOS//////////
let name = 'Andres';
let age = 34;

//Antigua forma
obj = { name: name, age: age }
    //ES6
obj2 = { name, age }
console.log(obj2)




// ARROW FUNCTIONS

const names = [
        { name: 'Andres', age: 34 },
        { name: 'Kate', age: 25 },
        { name: 'Sol', age: 52 },
        { name: 'Luisa', age: 28 },
        { name: 'Fercho', age: 50 },
    ]
    // ECS4 ANTIGUA
let lista = names.map(function(item) {
    console.log(item.name)
})

const names = [
    { name: 'Andres', age: 34 },
    { name: 'Kate', age: 25 },
    { name: 'Sol', age: 52 },
    { name: 'Luisa', age: 28 },
    { name: 'Fercho', age: 50 },
]
let lista2 = names.map(item => console.log(item.name, item.age))

const lista3 = (name, age, country) => {
    ...
}

const lista4 = name => {
    ...
}

square = num1 => num1 * num1;
console.log(square(3));

/// PROMESAS
// la p´romesa resuelve o rechazada

const hello = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey Resolved');
        } else {
            reject('Ups Rejected');
        }
    });
}

hello()
    .then(response => console.log(response))
    .then(console.log('hola'))
    .catch(error => console.log(error))


hello2 = function() {
    return "Hello World!";
}
console.log(hello2())

hello3 = (v1, v2) => `Hello ${v1}, Buenas ${v2}! `;
console.log(hello3('ANDES', 'noches'))


//////////////////GENERATOR/ yield////
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);