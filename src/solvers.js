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

window.findAnySolution = function(board, row, n, check, cb) {

  if (row === n) {
    return cb(board);
  }

  //iterate over each row
  for(var i = 0; i < n; i++){

    board.togglePiece(row, i);

    if(!board[check]()) {
      var result = findAnySolution(board, row+1, n, check, cb);
      if (result) return result;
    }

    board.togglePiece(row, i);
    //is this a valid board?
      //if yes, call lookup (col+1)

    //untoggle
  }
};

window.findNRooksSolution = function(n) {

  var board = new Board({n: n});

  return findAnySolution(board, 0, n, 'hasAnyRooksConflicts', function(board) {
    return board.rows();
  });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 

  var board = new Board({n:n});

  var lookup = function(col){

    //base case
      //col === n increase solutionCount
    if (col === n) {
      solutionCount++;
    }

    //iterate over each row
    for(var i = 0; i < n; i++){

      board.togglePiece(i, col);

      if(!board.hasAnyRooksConflicts()) {
        lookup(col + 1);
      }

      board.togglePiece(i, col);
      //is this a valid board?
        //if yes, call lookup (col+1)

      //untoggle
    }

  };

  lookup(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  
  var board = new Board({n: n});

  return findAnySolution(board, 0, n, 'hasAnyQueensConflicts', function(board) {
    return board.rows();
  }) || board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  var board = new Board({n:n});

  var lookup = function(col){
 
    if(col === n){
      solutionCount++;
    }

    for(var i = 0; i < n; i++){

      board.togglePiece(i, col);

      if(!board.hasAnyQueensConflicts()){
        lookup(col + 1);
      }
      
      board.togglePiece(i, col);
    }

  };

  lookup(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};




