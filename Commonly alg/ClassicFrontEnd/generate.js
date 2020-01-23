var generate = function(numRows){
    let triangle = [];
    //if triangle length more than 0 add one line
    if(numRows > 0) triangle.push([1]);
    //if triangle length more than 1
    if(numRows > 1) triangle.push([1, 1]);
    for(let i = 1; i < numRows - 1;i++){
        //add the first value 1
        triangle.push([1]);
        for(let j = 0; j < triangle[1].length - 1; j++){
            //push the sum of two numbers in previous raw into current row 
            triangle[i + 1].push(triangle[i][j] + triangle[i][j+1]);

        }
        //add the ended value 1
        triangle[i + 1].push(1)
    }
    return triangle;

}

//method 2
var generate = function(numRows) {
    let result = [];
    for(let i = 1; i <= numRows; ++i) {
        let arr = [];
        for(let j = 0; j < i; ++j) {
            if(j == 0 || j == i - 1) {
                arr.push(1);
            } else {
                arr.push((result[i - 2][j - 1] + result[i - 2][j]));
            }
        }
        result.push(arr);
    }
    return result;
    
};