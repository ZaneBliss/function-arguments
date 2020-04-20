// Create an array that contains the words in the sentence
let sentence = ["", "The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The learning objective of this exercise is to practice defining and using function arguments. 
    Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.
*/
function addExcitement (theWordArray, character) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        if ( i % 3 === 0 && i !== 0) {
            buildMeUp+=`${theWordArray[i]}${character} `
            console.log(buildMeUp)
        } 
        else {
        // Concatenate the new word onto buildMeUp
        buildMeUp += `${theWordArray[i]} `;
        // Print buildMeUp to the console
        console.log(buildMeUp)
        }
    }

}

// Invoke the function and pass in the array and character
addExcitement(sentence,"?")