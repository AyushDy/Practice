function makeArray(str){
    const arr=str.split('');
    return arr;
}

function makeString(arr){
    const str=arr.join();
    return str;
}




module.exports={
    makeArray,
    makeString
}