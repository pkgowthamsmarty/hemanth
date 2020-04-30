function print(b:number[]):void{
   let sum:number = 0;
   let avg:number
	for (let i = 0; i<b.length; i++) {
    sum = sum + b[i];
    avg = sum/b.length;
		
	}
  console.log(Math.round(avg));
}
let a:number[]=[24,57,59,39,98,97,79,69,88]
print(a);