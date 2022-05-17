let l = prompt("Enter the starting year");
let r = prompt("Enter the ending year");

for(let i = l; i <= r; i++) {
    if((i % 400 == 0) || ((i % 100 != 0) && (i % 4 == 0)))
        document.write(i + " ");
}