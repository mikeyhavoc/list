
const addItemButton = document.querySelector('.addItemButton'); // button to add items to list.
let listOutputDiv = document.querySelector('.listOutputDiv');

const hideItems = document.querySelector('button.hideItems'); // hide list button event handler.



addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
   
    
    let listInputText = document.querySelector('.listInputText'); // data from input for list input. 
    li.textContent = listInputText.value; 
   
    ul.appendChild(li);
    listmanueverButtons(li); 
    

});





hideItems.addEventListener('click', () => { // hide entire list and board.
    let listInputOutput = document.querySelector('.listInputOutput'); // entire board section.
    if (listInputOutput.style.display != 'none') { // if list != none.
        listInputOutput.style.display = 'none';    // then style equals the second(block) not the first(none).
    } else {
        listInputOutput.style.display = 'block';
    }
    
});

const listmanueverButtons = (li) => {
    const up = document.createElement('button');
    up.setAttribute('class', 'up');
    up.textContent = 'Up';
    
    const down = document.createElement('button');
    down.setAttribute('class', 'down');
    down.textContent = 'Down';
 
    const remove = document.createElement('button');
    remove.setAttribute('class', 'remove');
    remove.textContent = 'Remove';
 
 };
