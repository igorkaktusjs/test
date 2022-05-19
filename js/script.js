
function getMathResult(num, times) {
    if(typeof(times)== 'number'){

        let str = '';
        
        for(let i = 1; i <= times ; ++i){
            if (i === times){
                let sum = num * i;
            console.log (sum);
            }else{
                let sum = num * i;
                console.log (sum+`---`);
            }
            
        }
    }else{
        console.log(num);
        return num;
    }
}
 getMathResult(5,7);

 let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`; 
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }