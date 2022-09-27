// Bits
function countSetBits(n)
{
    if (n == 0)
        return 0;
    else
        return (n & 1) + countSetBits(n >> 1);
}
console.log(countSetBits(9)); //2
 
// Binary
function countBinary(n)
{
 return n.toString(2);
}
console.log(countBinary(512)); //1000000000
