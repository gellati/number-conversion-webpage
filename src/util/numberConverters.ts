
interface romanNumberMap {
    [number: string]: number;
}

export const integer_to_roman = (number:number) => {
    let roman = ""

    const romanNumList:romanNumberMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XV: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    let a
    if(number < 1 || number > 3999)
        return "Enter a number between 1 and 3999"
    else{
        for(let key in romanNumList){
            a = Math.floor(number / romanNumList[key])
            if(a >= 0){
                for(let i = 0; i < a; i++){
                    roman += key
                }
            }
            number = number % romanNumList[key]
        }
    }
    return roman
}


export const roman_to_integer = (str1:string) => {
    if(str1 === null) return null
    let num = char_to_int(str1.charAt(0))
    let pre, curr

    for(var i = 1; i < str1.length; i++){
        curr = char_to_int(str1.charAt(i))
        pre = char_to_int(str1.charAt(i-1))
        if(curr <= pre) {
            num += curr
        } else {
            num = num - pre*2 + curr
        }
    }
    if(num === -1) {
        return null
    }
    return num
}

const char_to_int = (c:string) => {
    switch (c) {
    case 'I': return 1
    case 'V': return 5
    case 'X': return 10
    case 'L': return 50
    case 'C': return 100
    case 'D': return 500
    case 'M': return 1000
    default: return -1
    }
}
