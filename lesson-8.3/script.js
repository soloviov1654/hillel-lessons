for (let i = 0; i <=10 ; i++) {
    const userNum = prompt("Enter your number (min 100)")

    if (userNum < 100) {
        console.log("minimum 100")
        i--
    } else if (i === 10) {
        console.log(userNum)
    }
}

