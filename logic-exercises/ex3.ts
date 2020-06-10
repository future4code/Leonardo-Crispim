function ex3A(stringSent1: string, stringSent2: string){
    if(stringSent1 === stringSent2){
        return true
    }
    return false
}

function ex3B(stringSent1: string, stringSent2: string){
    if(stringSent1.toLocaleLowerCase === stringSent2.toLocaleLowerCase){
        return true
    }
    return false
}