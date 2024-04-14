const addButton=document.querySelector('button');
const container=document.querySelector('.container');
const limit= 2000;



let time=setInterval(() => {
        addButton.click();
    },  0);
    
    //throttling using Date.now();
    function throttled(func, limit){
        let lastcall=0;
        return function(...args){
            const now=Date.now();
            if(now-lastcall>=limit){
                func(...args);
                lastcall=now;
            }
        }
    }



    //throttling using Waiting boolean
    function throttle(func,limit){
        let waiting=false;
        return function(...args){
            if(!waiting){
                func(...args);
                waiting=true;
                setTimeout(function(){
                    waiting=false;
                },limit);
            }
        }
    }

    
    addButton.addEventListener('click',throttle(appendItem,limit))
    
    
    function appendItem(){
        container.appendChild(createItem());
    }

    function createItem(){
        const item= document.createElement('div');
        item.className='item';
        return item;
    }