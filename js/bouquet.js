// Дано:
// розы (маленькие - 4 расцветки, большие - 7 расцветок)
// трава (5 видов)
// лилии - 3 цвета
// тюльпаны - 3 цвета
// пионы - 2 цвета
// герберы - 5 цветов

// Функция-конструктор цветка
function Flower(name, size, color)
{
    // properties
    this.name = name;
    this.size = size;
    this.color = color;
    
    // getters and setters

    // methods
    this.info = function info()
    {
        //alert("Мои данные: " + name + size + color);
    };
}


let rose = new Flower("rose", "small", "red");
rose.info();

let rosesAmmount = 4;

let roses = [];
for (let flower = 0; flower < rosesAmmount; flower++)
{
    roses[flower] = new Flower("rose", "small", "red");
}

let grassAmmount = 0;
let grass = [];
for (let grass = 0; grass < array.length; grass++)
{
    const element = array[grass];
}


// Функция для открытия конструктора сайта
function createBouquet()
{
    // Сделать блок на сайте видимым
    alert("Букет создан!");
}


