// Добавить img и путь к файлу
// Это позволит Использовать мои картинки, а не импортированные иконки

// // Дано:
// // розы (маленькие - 4 расцветки, большие - 7 расцветок)
// // трава (5 видов)
// // лилии - 3 цвета
// // тюльпаны - 3 цвета
// // пионы - 2 цвета
// // герберы - 5 цветов


// Цветы, что есть в наличии

let flowers = [
    {name: "Lilies", color: "red", price: 150, img: "./Images/flowers/Lilies.png"},
    {name: "Lilies", color: "white", price: 150, img: "./Images/flowers/Lilies.png"},
    {name: "Lilies", color: "yellow", price: 150, img: "./Images/flowers/Lilies.png"},
    {name: "Lilies", color: "pink", price: 150, img: "./Images/flowers/Lilies.png"},
    {name: "Lilies", color: "violent", price: 150, img: "./Images/flowers/Lilies.png"},

    {name: "Gerbera", color: "red", price: 200, img: "./Images/flowers/Gerberas.png"},
    {name: "Gerbera", color: "blueviolent", price: 200, img: "./Images/flowers/Gerberas.png"},
    {name: "Gerbera", color: "orange", price: 200, img: "./Images/flowers/Gerberas.png"},
    {name: "Gerbera", color: "magenta", price: 200, img: "./Images/flowers/Gerberas.png"},
    {name: "Gerbera", color: "pink", price: 200, img: "./Images/flowers/Gerberas.png"},

    {name: "Rose", color: "red", price: 300, img: ""},
    {name: "Rose", color: "white", price: 300, img: ""},

    {name: "Grass", color: "green", price: 102.49, img: ""},
];

/*
Дано:
1 розы (маленькие - 4 расцветки, большие - 7 расцветок)
2 лилии - 3 цвета
3 тюльпаны - 3 цвета
4 пионы - 2 цвета
5 герберы - 5 цветов
трава (5 видов)
*/

// 6 в ряд 

let block = document.querySelector(".container");

let flowersHtml = "";

flowers.forEach(fl => {
    flowersHtml += `
    <div class="flower ${fl.name}"
        style="background-color: ${fl.color}">
        <h3>${fl.name}</h3>
        <img src="${fl.img}" alt="${fl.name}" width="50px" height="50px">
        <p>${fl.price}</p>
    </div>       
    `
});

// Вставляем в элемент данные из массива объектов, чтобы отобразить их
block.innerHTML = flowersHtml;

