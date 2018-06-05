var books = [
    {
        title: "Knyga 1",
        price: 10.25
    },
    {
        title: "Knyga 2",
        price: 11.25
    },
    {
        title: "Knyga 3",
        price: 12.25
    },
    {
        title: "Knyga 4",
        price: 13.25
    },
    {
        title: "Knyga 5",
        price: 14.25
    }

];


//-------------books spausdinimas -----------------
const printBooksList = function () {
    console.log("Knygu sarasas");
    books.map(function (book, index) {
        console.log(index + " Knygos pavadinimas: ", book.title);
    })
};

// spausdinimas
printBooksList();


// NUOLAIDOS, kurios brangesnes nei 10 eur i nauja masyva 
/*
const discount = 25;
let discounteBooks = [];
books.map(function(book){
    if (book.price > 10){
        let discounteBook = {title: book.title, price: book.price};
        let calculatedNewPrice = book.price * (1 - discount/100);
        discounteBook.newPrice = calculatedNewPrice.toFixed(2);
        discounteBook.discount = discount;
        discounteBooks.push(discounteBook);
    } 
});
*/

// =================== Universlaus ==========================
const printBooks = function (booksList, headline) {
    console.log(headline);
    booksList.map(function (book, index) {
        console.log(
            index+1 + " Knygos pavadinimas: " + book.title,
            "Sena kaina: " + book.price, 
            "Pardavimo kaina: "  + book.newPrice);
    })
};


//printBooks(discounteBooks, "Nukainota");


// ====================== ANTRA VERSIJA =======================

const discount = 25;
let discounteBooks = [];
books.map(function(book){
    if (book.price > 10){
        let discounteBook = Object.assign({}, book);
        let calculatedNewPrice = book.price * (1 - discount/100);
        discounteBook.newPrice = calculatedNewPrice.toFixed(2);
        discounteBook.discount = discount;
        discounteBooks.push(discounteBook);
    } 
});


printBooks(discounteBooks, "----Nukainota----");



