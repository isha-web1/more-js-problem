function bestFriend(names){
    let max;
    let maxNumber = names[0].length;
    for(let i = 0; i < names.length; i++){
        if(names[i].length>maxNumber){
            maxNumber = names[i].length;
            max = names[i];
        }
        
    }
    return max;
}

const bestFriendNames =['rabbi', 'shahadat', 'shahadat', 'nazim', 'ahsanhabib', 'hasib', 'rifat', 'shakib'];
console.log(bestFriend(bestFriendNames));d