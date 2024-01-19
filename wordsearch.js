const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let rowStr = [];
    for (let c =  0; c < letters[0].length; c++)
    {
        let vertWord = "";
        for(let r = 0; r < letters.length; r++)
        {
            vertWord += letters[r][c];
        }
        rowStr.push(vertWord);
    }
    for(const value of rowStr)
    {
        if(value.includes(word))
        {
            return true;
        }
    }
    return false;
}

wordSearch([['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
], 'FRANK');

module.exports = wordSearch