let n = Number(prompt("Hãy nhập n"));
let dayFibonacci = [0,1];
while (dayFibonacci.length<n) {
    let x = dayFibonacci.length
    dayFibonacci.push(dayFibonacci[x-1]+dayFibonacci[x-2])
}
console.log(dayFibonacci)
console.log('Số thứ '+String(n)+' của dãy Fibonacci là '+String(dayFibonacci[dayFibonacci.length-1]))