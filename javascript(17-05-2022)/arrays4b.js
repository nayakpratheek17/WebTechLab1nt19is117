let n = prompt("Enter the number of terms");

let t1 = 0;
let t2 = 1;

document.write(t1 + " " + t2);
let nextTerm = t1 + t2;
for(let i = 3; i <= n; i++) {
    document.write(nextTerm + " ");
    t1 = t2;
    t2 = nextTerm;
    nextTerm = t1 + t2;
}