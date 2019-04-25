/**
 * @param {number} n
 * @return {number}
 */
var numTrees = (n, memo = {}) => {
    if (n <= 1) { return 1; }
    let output = 0;

	// recursive fn that calcs the # of unique binary tree arrangements with n numbers and index i as the head
    const recurse = (i, n) => {
        const leftNums = i - 1;
        const rightNums = n - i;

		// treat the numbers to the left and right of i each as their own binary tree
		// get the # of unique arrangements of the left tree and right tree
		// check memo object first to see if the calculation's already been done
        const leftTrees = memo[leftNums] || numTrees(leftNums, memo);
        const rightTrees = memo[rightNums] || numTrees(rightNums, memo);
        
		// if not in memo, add
        if (!memo[leftNums]) { memo[leftNums] = leftTrees; }
        if (!memo[rightNums]) { memo[rightNums] = rightTrees; }

		// Total arrangements = unique arrangements of left tree x unique arrangements of right tree
		// add product to the output
        output += leftTrees * rightTrees;
    };

	// repeat function treating every index as a potential head of the tree
    for (let i = 1; i <= n; i += 1) { recurse(i, n); }

    return output;
};