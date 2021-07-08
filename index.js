function countDown(number){
while (number >= 0)
{
    console.log(number--);
}
}

countDown(10);





------------------------------------






const cards = [];

function writeCards(guests,event){
    for (let count = 0; count < guests.length; count++){
        cards.unshift(`Thank you ${guests[count]}, for the wonderful ${event} gift...\n\n`)
    }
    
}

writeCards([`bill`,`bob`,`dave`,`jill`],`easter`);


console.log(`${cards}`);