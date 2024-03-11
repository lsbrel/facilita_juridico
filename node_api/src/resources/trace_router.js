module.exports.traceRouter = (grid, startX, startY) => {

};

const isValidCoordinate = (x, y, grid) => {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
};
