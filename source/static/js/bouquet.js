// Добавить img и путь к файлу
// Это позволит Использовать мои картинки, а не импортированные иконки

// Цветы, что есть в наличии
// Где указывается количество, что есть в наличии?
// Число, что есть в наличии должно храниться в БД!
// Также, как и цена, цвет, и название!

let flowers = [
    {name: "Gerbera", color: "white", count: 10, price: 200, img: "./Images/flowers/Gerberas.png"},
    {name: "Gerbera", color: "yellow", count: 10, price: 200, img: "./Images/flowers/Gerberas.png"},
    {name: "Gerbera", color: "pink", count: 10, price: 200, img: "./Images/flowers/Gerberas.png"},
    {name: "Gerbera", color: "red", count: 10, price: 200, img: "./Images/flowers/Gerberas.png"},
    {name: "Gerbera", color: "blue", count: 10, price: 200, img: "./Images/flowers/Gerberas.png"},

    {name: "Lilies", color: "white", count: 10, price: 150, img: "./Images/flowers/Lilies.png"},
    {name: "Lilies", color: "yellow", count: 10, price: 150, img: "./Images/flowers/Lilies.png"},
    {name: "Lilies", color: "red", count: 10, price: 150, img: "./Images/flowers/Lilies.png"},

    {name: "Piones", color: "white", count: 10, price: 150, img: "./Images/flowers/Piones.png"},
    {name: "Piones", color: "yellow", count: 10, price: 150, img: "./Images/flowers/Piones.png"},
    {name: "Piones", color: "red", count: 10, price: 150, img: "./Images/flowers/Piones.png"},

    {name: "Rose", color: "white", count: 10, price: 300, img: "./Images/flowers/Roses.png"},
    {name: "Rose", color: "yellow", count: 10, price: 300, img: "./Images/flowers/Roses.png"},
    {name: "Rose", color: "pink", count: 10, price: 300, img: "./Images/flowers/Roses.png"},
    {name: "Rose", color: "red", count: 10, price: 300, img: "./Images/flowers/Roses.png"},

    {name: "Grass", color: "green", count: 10, price: 102.49, img: "./Images/flowers/Grass_1.png"},
    {name: "Grass", color: "green", count: 10, price: 102.49, img: "./Images/flowers/Grass_2.png"},
    {name: "Grass", color: "green", count: 10, price: 102.49, img: "./Images/flowers/Grass_3.png"},
    {name: "Grass", color: "green", count: 10, price: 102.49, img: "./Images/flowers/Grass_4.png"},
];

let block = document.querySelector(".container");

let flowersHtml = "";

flowers.forEach(fl => {
    flowersHtml += `
    <div class="flower ${fl.name}"
        style="background-color: ${fl.color}">
        <h3>${fl.name}</h3>
        <img src="${fl.img}" alt="${fl.name}" width="50px" height="50px">
        <p>Цена: ${fl.price}</p>
        <p>В наличии: ${fl.count}</p>
    </div>       
    `
});

// Вставляем в элемент данные из массива объектов, чтобы отобразить их
block.innerHTML = flowersHtml;

