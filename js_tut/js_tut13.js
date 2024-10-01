function EditableSentence(str) {
    var sentence = str + ' you'
    console.log(sentence)
    var sentence = str + ' me sideways'
    console.log(sentence)
}

EditableSentence('frick')

// function EditableSentence(str) {
//     const SENTENCE = str + 'you'
//     console.log(SENTENCE)
//     SENTENCE = str + 'me sideways' // wont work cuz const is read only
//     console.log(SENTENCE)
// }

// EditableSentence('frick')

// MUTATING AN ARRAY DECLARED WITH CONST

const arr = [1,2,3]

// arr = [3,2,1] //not gonna work

arr[0]=3
arr[1]=2
arr[2]=1

console.log(arr)