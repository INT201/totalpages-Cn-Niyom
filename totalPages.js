const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(arrayItems === undefined || arrayItems ===null)
  {
    return undefined;
  }
  if(rowsPerPage === 0 || rowsPerPage === undefined || rowsPerPage === null)
  {
    return 1;
  }
  return Math.ceil(arrayItems.length / rowsPerPage)
}
module.exports = totalPages
