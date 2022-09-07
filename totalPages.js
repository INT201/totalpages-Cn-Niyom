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
  let count=0;
  for(index in arrayItems)
  {
    // console.log(index%rowsPerPage ,rowsPerPage-1)
    if(index%rowsPerPage ===(rowsPerPage-1))
    {
      // console.log(index);
      count++;
    }
  }

  if(arrayItems.length %rowsPerPage != 0)
  {
    count++;
  }
  
  return count;
}
let arr=new Array();
for(let i=1;i<=40;i++)
{
  arr.push(i);
}
// console.log(arr.length);
// console.log(totalPages(arr,10));
module.exports = totalPages
