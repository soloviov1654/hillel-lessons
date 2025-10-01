let userYear = prompt("Enter your year of births");
let userCity = prompt("In which city do you live?");
let userSport = prompt("What sport do you like?");
let currYear = new Date().getFullYear();
let cityOption ;
let sportOption ;

if (userCity === null ) {
    cityOption = "Жаль ты решил не отвечать("
}  else if (userCity === "Київ") {
    cityOption = "Ти живеш у столиці...UA"
} else if (userCity === "Вашингтон") {
    cityOption = "Ти живеш у столиці...USA"
}
else if (userCity === "Лондон") {
    cityOption = "Ти живеш у столиці...UK"
} else {
    cityOption = `ти живеш у місті ${userCity}`
}

if (userSport === null) {
    cityOption = "Жаль ты решил не отвечать("
} else if (userSport === "football") {
    sportOption = "You like a A.Shevchenko!"
} else if (userSport === "tennis") {
    sportOption = "You like a A.Medvedev!"
} else if (userSport === "running") {
    sportOption = "You like a V.Borzov!"
} else {
    sportOption = `Wish you good luck in ${userSport}`
}


alert(`Что имеем:
    Ваш возраст- ${currYear - userYear} 
    ${cityOption}
    ${sportOption}
    `);