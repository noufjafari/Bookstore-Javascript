//-------------HW-------------
console.log(`\n`);
console.log("________________HW: Book Store________________");






// ----------   The array -------------

    let books = [
        {
            title:"The Summer I Turned Pretty",
            author:" Jenny Han",
            number_of_pages:304 ,
            available_for_borrowing: false,
        },
        {
            title:"Demon Slayer kimetsu no yaiba",
            author:"Gotōge Koyoharu",
            number_of_pages:192 ,
            available_for_borrowing: true,
        },
        {
            title:"Harry Potter and the Philosophers Stone",
            author:"Joanne Rowling",
            number_of_pages: 223,
            available_for_borrowing: true,
        },
        {
            title:"Attack on Titan",
            author:"Hajime Isayama",
            number_of_pages:208 ,
            available_for_borrowing: true,
        },
        {
            title:"Stranger Things: Suspicious Minds",
            author:"Adam Christopher",
            number_of_pages: 336,
            available_for_borrowing: false,
        },
      ];

console.log(`\n`);







// --------------1-  Use a for loop------------------

console.log(`1- For loop to iterate through \n the books array and print out:`);
console.log(`\n`);

for(let i=0; i<books.length; i++){
    console.log(books[i]);
}
console.log(`\n`);
console.log("_________________________________________________");
console.log(`\n`);       





// --------------2-  Create a function borrowBook  ------------------

console.log(`2- The function (borrowBook) check if the book is available \nfor borrowing and add borrower Name if so:`);
console.log(`\n`);

        function borrowBook(title, borrowerName) {

            let availability = books.find(function(x) {
                return x.title == title
            })

             if (availability.available_for_borrowing == true){
                availability.available_for_borrowing = false
                availability.borrower=borrowerName;
                console.log(availability);
            }else{
                console.log(title + " is not available");
          }
        }
    borrowBook("Harry Potter and the Philosophers Stone", "Nouf");
    console.log(`\n`);         
    console.log("_________________________________________________");
    console.log(`\n`);       





// --------------3-  Create a function returnBook  ------------------

console.log(`3- The function (returnBook) check if book has borrower \n and remove the (borrower) property :`);
console.log(`\n`);

        function returnBook(title) {

            let availability = books.find(function(x) {
                return x.title == title
            })

             if (availability.borrower != undefined ){
                availability.available_for_borrowing = true
                delete availability.borrower; 
                console.log(availability);

            }
            else{
                console.log(`${title} was never borrowed `);
          }
        }
        returnBook("Harry Potter and the Philosophers Stone");
    console.log(`\n`);         
    console.log("_________________________________________________");
    console.log(`\n`);         






// --------------4-  Test functions by borrowing and returning a few books from the books array. ------------------

console.log(`4- Test your functions by borrowing and returning a few books:`);
console.log(`\n`);

console.log(`Test1 for borrowing and returning:`);
console.log("-----------");

borrowBook("The Summer I Turned Pretty", "shatha");
returnBook("The Summer I Turned Pretty");

console.log(`\n`);         

console.log(`Test2 for borrowing and returning:`);
console.log("-----------");
borrowBook("Demon Slayer kimetsu no yaiba", "Deema");
returnBook("Demon Slayer kimetsu no yaiba");

    console.log(`\n`);         
    console.log("_________________________________________________");
    console.log(`\n`);    






// --------------5- for loop to iterate through the books array print out the title, author, number of pages, and borrower  ------------------

console.log(`5- for loop to print out the title, author, number of pages,\n and borrower (if any) for each book:`);
console.log(`\n`);
for(let i=0; i<books.length; i++){

    title= books[i].title
    author= books[i].author
    number_of_pages= books[i].number_of_pages
    borrower= books[i].borrower

    console.log(`title: ${title}`);
    console.log(`author: ${author}`);
    console.log(`number_of_pages: ${number_of_pages}`);
    console.log(`\n`);

    if(books[i].borrower != undefined ){
        console.log(` Borower: ${borrower}`);

    }
}
    console.log(`\n`);         
    console.log("_________________________________________________");
    console.log(`\n`);    






// --------------6- Create a function  "addBook" that takes  an object new book and adds it to the books array.  ------------------

console.log(`6- The function (addBook) adds new book to the books array.:`);
console.log(`\n`);

let AddNewBook ={
   
    title: "Little Women",
    author: "Louisa May Alcott",
    number_of_pages: "759",
    available_for_borrowing: true,

} 
function addBook(AddNewBook){
    books.push(AddNewBook);

}
console.log(AddNewBook);

    console.log(`\n`);         
    console.log("_________________________________________________");
    console.log(`\n`);    

  


// --------------7- Create a function called "searchBook" that returns an array of all books in the books array ------------------

console.log(`7- The function (searchBook) returns an array of all books in the books array that contain the search term :`);
console.log(`\n`);

function searchBook(number_of_pages){
    let largerPages = books.filter(function(x) {
        return x.number_of_pages <= 230;
    })
    
    console.log(largerPages);
}
console.log("The function (searchBook) is ready check the code");     
console.log(`\n`);         
console.log("_________________________________________________");
console.log(`\n`);    
    





// --------------8-Test your searchBook function by calling it and print out the results.   ------------------

console.log(`8- Test (searchBook) function by calling it with different search terms :`);
     console.log(`\n`);
    
searchBook(240)

console.log(`\n`);

searchBook(300)

       console.log(`\n`);         
        console.log("_________________________________________________");
        console.log(`\n`);    


