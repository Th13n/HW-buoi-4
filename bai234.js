const numbers = [1,4,632,36,12,4,56,1,16,1,529,67,3,4,6,41,6161,100,25,36,7,343,51,5,1,4,3,661,2,4,6,2,5,1,256,24]
const soNguyenTos = []
for (let x =0; x<numbers.length; x++) {
    let z = numbers[x]
    let dk = 0
    if (z<2) {
        continue
    } else {
        for (let y=2; y<=Math.sqrt(z); y++) {
            if (z%y==0) {
                dk=1
                break
            }
        }
    }
    if (dk==0) {
        soNguyenTos.push(z)
    }
}
console.log('Danh sách số nguyên tố là :'+String(soNguyenTos))

const soChinhPhuong = [];
for (let x=0; x<numbers.length; x++) {
    let z = numbers[x]
    let dk=0
    for (let y=0; y<=Math.sqrt(z); y++) {
        if (y*y==z) {
            dk=1
        }
    }
    if (dk==1) {
        soChinhPhuong.push(z)
    }
}
console.log('Danh sách số chính phương là :'+String(soChinhPhuong))

let soCanTim = Number(prompt('Hãy nhập số bạn cần tìm'))
let count = 0
for (let x = 0; x<numbers.length; x++) {
    if (numbers[x]==soCanTim) {
        count++
    }
}
console.log('Số '+String(soCanTim)+' xuất hiện '+String(count)+' lần.')