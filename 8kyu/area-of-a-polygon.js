// ❓DESCRIPTION:
/*Write the function polygonArea(A,B,C,D) that finds the area of polygons of this type
Assume D always equals B/2.
Assume the angles formed by AB and BC are right angles.*/

// ✅SOLUTION:

function polygonArea(A,B,C,D){
    return (A*B)+(0.5*B*(C-A))
}

console.log('polygonArea: ', polygonArea(2, 4, 4, 2))
console.log('polygonArea: ', polygonArea(0, 0, 0, 0))
console.log('polygonArea: ', polygonArea(2, 5, 10, 2.5))

