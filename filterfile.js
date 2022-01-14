// filter - elements that pass a test provided by a function.

const initialArray = [-1,-9,1,2,3,4,5]
const mappedArray = []

const filterfunction = (arr,anyfunction) => {
for(let i=0; i < arr.length; i++){
    let eachValue = anyfunction(arr[i])
    if(eachValue != undefined){
        mappedArray.push(eachValue)
    }
}
    return mappedArray
}

const callbackAction = (number) =>{ //positive numbers
    if(number>=3){
        return number
    }
}

const finalArray = filterfunction(initialArray,callbackAction);

console.log(finalArray)