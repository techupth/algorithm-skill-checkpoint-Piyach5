/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
Big O for findStudentById is O(n) where complexity is due to array size only (for worst case scenario), 
since the algorithm has to compare all element in the array (in worst case scenario).
*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
Big O for findProductPrice is O(log n) where complexity is due to array size and
relate to how algorithm process, which for this function, 
it reduces data size in half when executed and only compare to the mid element,
to find the result.

*/

/* 
Which function is more efficient and why?
Answer:

findProductPrice(Big O(log n)) is more efficient, because the complexity is not only up to array size,
but we can write the algorithm to reduce complexity by cut unnecessary data to running through when executed,
to find the result, unlike findStudentById(Big O(n)) which the function will run through all the elements 
for worst case scenario.
*/
