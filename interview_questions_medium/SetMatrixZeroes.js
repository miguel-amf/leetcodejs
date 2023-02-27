/*Set Matrix Zeroes
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 

Follow up:
A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

*/

//  CODE //

//I got it to use O(m) space and O(m*n) complexity
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    //the lines will be dealt inside the loop, and the column will be dealt later on
    //so we need to remember which column had a zero originally.
    var columnArray = new Array(matrix[0].length);
    
    //loop for every line
    for(let i = 0; i < matrix.length; i++) {
        //loop for every item in line
        for (let j = 0; j<matrix[i].length; j++) {
            //check if number is 0
            if (matrix[i][j] === 0) {
                //set that column to be "zeroed" later
                columnArray[j] = 1;
                //zero the whole line (room for optimization)
                for(let k=0;k<matrix[i].length;k++) {
                    //just so it doesnt miss out future zeros
                    if (matrix[i][k] == 0) {
                        columnArray[k] = 1;
                    }
                    matrix[i][k] = 0;
                }
                break;
            }
        }
    }
    console.log(columnArray);
    //time to zero the columns
    for(let i = 0; i < columnArray.length; i++) {
        if(columnArray[i] === 1) {
            for(let j=0; j<matrix.length; j++) {
                matrix[j][i] = 0;
            }
        }
    }
};