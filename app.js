const caesarShift = (text, shiftDirection, numShifts) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const index = alphabet.indexOf(text[i].toLowerCase());
        
        let newIndex;
        if (shiftDirection === 'left') {
            newIndex = (index - numShifts) % alphabet.length;
            if (newIndex < 0) {
                newIndex += alphabet.length
            }
        } else {
            newIndex = (index + numShifts) % alphabet.length;
        }
        
        result += alphabet.charAt(newIndex);
    }

    return result;
}

console.log(caesarShift('hello', 'left', 5))