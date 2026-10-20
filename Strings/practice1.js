// Q1. Reverse the String 
// Inbuild method

function reverseString1(str){
    if(!str || typeof str != 'string'){
        return ""
    }

    return str.split('').reverse().join('')
}

// console.log(reverseString1('Saurabh'))

function reverseString2(str){
   if(!str || typeof str != 'string'){
        return ""
    }
    let result='';
    for(let i=str.length-1;i>=0;i--){
        result+= str[i]
    }
    return result;
}

// console.log(reverseString2('Saurabh'))

function reverseString3(str){
    if(typeof str !=='string'){
        return 
    }
    if(str.length===1 || str.length===0){
        return str
    }

    return reverseString3(str.substring(1)) + str[0]
}

// console.log(reverseString3('saurabh'))

function reverseString4(str){
    if(typeof str !=='string'){
        return
    }

    let left=0;
    let right =str.length -1;
    const arr = str.split('');
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }

    return arr.join('')
}

// console.log(reverseString4('saurabh'))

//Q2. Check Sring is Palindrome or not

function palindromeStr1(str){
    if(typeof str !=='string'){
        return
    }

    if(str.length<=1){
        return true;
    }
    const reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
}

console.log(palindromeStr1('madam'))

function palindromeStr2(str){
    if(typeof str !=='string'){
        return
    }
    if(str.length<=1){
        return str;
    }
    let left =0;
    let right = str.length-1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;

}

console.log(palindromeStr2('madam'))
