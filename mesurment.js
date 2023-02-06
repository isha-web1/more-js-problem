/* এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে। */


function milliLiter(ml){
    const liter = ml * 0.001;
    
    return liter;
}

const watervolume = 10000;
const totalLiter = milliLiter(watervolume);
console.log(totalLiter)

/* const name='john'.toUpperCase() */
