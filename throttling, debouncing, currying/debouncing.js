const addButton=document.querySelector('button');
const container=document.querySelector('.container');
const limit= 2000;

// let time=setInterval(() => {
//     addButton.click();
// },  );



function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            func(...args);
        },delay);
    };
}

addButton.addEventListener('click',debounce(appendItem,limit))
    
function appendItem(){
    container.appendChild(createItem());
}

function createItem(){
    const item= document.createElement('div');
    item.className='item';
    return item;
}