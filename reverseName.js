/* তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো */


function reverseName(nameOne, nameTwo){
    let friendOneLength = nameOne.length;
    let friendTwoLength = nameTwo.length;

    if(friendOneLength > friendTwoLength){
        return nameOne.split("").reverse().join("");
    }
    else{
        return nameTwo.split("").reverse().join("");
    }
}

let result = reverseName('john', 'abraham');
console.log(result);