/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {

  var board = new Board({'n': n});
  var solution = board.rows();

  for (var i = 0; i < solution.length; i++){
    for (var j = 0; j < solution.length; j++){
      if (solution[i][j] === 1) {
        continue;
      } else {
        board.togglePiece(i, j);
        if(board.hasRowConflictAt(i) || board.hasColConflictAt(j)) {
          board.togglePiece(i, j);
        }
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  //make square a 1
  for (var i=0; i<n; i++) {

    var board = new Board({'n': n});
    var solution = board.rows();
    
    board.togglePiece(0, i);

    for (var j=0; j < solution.length; j++) {

    }
  }
    //find next possible rook
      //put rook there
        //recurse on this version of the board
    //keep looping
      //find next possible
        //recurse on this version of the board
        //... 

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //var solution = undefined; //fixme

  var board = new Board({'n': n});
  var solution = board.rows();
  var positionArray = [];
  var newIndex;

 for (var i = 0; i < solution.length; i++){

    var qPlaced = false;

    for (var j = 0; j < solution.length; j++){

      if (solution[i][j] !== 1) {
        board.togglePiece(i, j);
        positionArray.push([i,j]);
        qPlaced = true;
      }

      if (board.hasAnyQueenConflictsOn(i,j)) {
        board.togglePiece(i,j);
        positionArray.slice([i,j]);
        qPlaced = false;
      }

      if (j === n-1 && !qPlaced) {
        newIndex = positionArray.pop();
        board.togglePiece(newIndex[i], newIndex[j]);
        board.togglePiece(newIndex[i], newIndex[j] + 1);
        i = newIndex;
        j = newIndex;
      }
    }
  }

  console.log(solution);


  //go down first row
    //place queen at first available spot
    //go down next row
      //place queen at first available spot
        //go down next row
          //place at first
          //if no available, move last queen down one and try again
          //if last queen is moved out-of-bounds, move the one before it...

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
