
{
    // 1-masala
    function numbers(array) {
        return array.filter(n => n > 0)
    }
    // console.log( numbers([-5, 6, 3, -3]));
    // console.log( numbers([12, -4, 5, -6, 33]));
}


{
    // 2-masala
    function tenth(son){
    return Math.floor (son / 10 ) % 10
    }
    // console.log(tenth(123));
    // console.log(tenth(4568));
}


{
    // 3-masala
    function binary(son){
        if(son === 1){
            return true
        }else if (son === 0){
            return false
        }else{
            return null
        }
    }
    // console.log(binary(1));
    // console.log(binary(0));
    // console.log(binary(7));
}


{
    // 4-masala //
    function card(cards, number) {
        if (number) {
            return cards;
        } else {
            let index = cards.slice(0, 4) + " **** **** " + cards.slice(-4);
            return index;
        }
    }

    // console.log(card("9860 0121 0658 4589", true));  
    // console.log(card("8600 5464 2332 4589", false)); 
}


{
    //  5masala
    function checkPassword(str){
        return `${str === "123456hello"}`
    }
    // console.log(checkPassword(("123456")));
    // console.log(checkPassword(("123456hello")));
}
