function oneDArray(arr){
    return arr.reduce((acc,val)=>{
        return acc.concat(val);
    },[])
}

function formatTime(secs){
    return secs/60+'mins, '+secs%60+' seconds';
}

module.exports={
    oneDArray,
    formatTime
}
