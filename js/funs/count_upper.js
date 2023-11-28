function countUpper(st) {
    let count = 0

    for (let i = 0; i < st.length; i++) {
        let code = st.charCodeAt(i)  // get ascii code 
        if (code >= 65 && code <= 90)
            count++;
    }

    return count;
}

console.log(countUpper("AbcXyz"))