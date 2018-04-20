// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let dp = [0,1];
//   while (dp.length <= n) {
//     dp.push(dp[dp.length-1] + dp[dp.length-2]);
//   }
//   return dp[n];
// }

function fib(n,dp=[0,1]) {
  if (dp[n] !== undefined) {
    return dp[n];
  }
  if (n === 0) { return 0;}
  if (n === 1) { return 1;}
  dp[n-1] = fib(n-1,dp);
  dp[n-2] =  fib(n-2,dp);
  return dp[n-1] + dp[n-2];
}

module.exports = fib;
