// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function substring(first, second)
{
    const s1 = [...first];
    const s2 = [...second];
    
    const arrayOfString = Array(s1.length + 1).fill().map(() => {
        return Array(s2.length + 1).fill(0);;
    })
    
    
    for(let i = 0; i <= s1.length; i++){
        arrayOfString[0][i] = 0;
    }
    for(let j = 0; j <= s2.length; j++){
        arrayOfString[j][0]=0;
    }
    
    let result = '';
    let length = 0;
    let column = 0;
    let row = 0;
    for(let i = 1; i<= s1.length; i++){
        for(let j = 1; j <= s2.length; j++){
            if(s1[i-1] === s2[j-1]){
                arrayOfString[i][j] = arrayOfString[i-1][j-1]+1;
            }else if(i == 0 || j == 0){
                arrayOfString[i][j] = 0
            }else{
                arrayOfString[i][j] = 0;
            }
            if(arrayOfString[i][j] > length){
                len = arrayOfString[i][j];
                col = j;
                row = i;
            }
        }
    }
    if(len === 0){
        return result;
    }
    while(arrayOfString[row][col] > 0){
        result = s1[col - 1] + result;
        row = row - 1;
        column = column - 1;
    }
    return result;
}

var response = substring('ABABC', 'BABCA');

console.log('longest common substring',response);
