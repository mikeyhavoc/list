const listInputText = document.querySelector('.listInputText'); // data from input for list input.
const addItemButton = document.querySelector('button.addItemButton'); // button to add items to list.
const listOutputDiv = addItemButton.querySelector('.listOutputDiv');

const hideItems = document.querySelector('button.hideItems'); // hide list button event handler.

addItemButton.addEventListener('click', () => {
   

})





hideItems.addEventListener('click', () => { // hide entire list and board.
    let listInputOutput = document.querySelector('.listInputOutput'); // entire board section.
    if (listInputOutput.style.display != 'none') { // if list != none.
        listInputOutput.style.display = 'none';    // then style equals the second(block) not the first(none).
    } else {
        listInputOutput.style.display = 'block';
    }
    
});

const listmanueverButtons = (li) => {
   const up = createElement('button');
   up.setAttribute('class', 'up');
   up.textContent = 'Up';
   
   const down = createElement('button');
   down.setAttribute('class', 'down');
   down.textContent = 'Down';

   const remove = createElement('remove');
   remove.setAttribute('class', 'remove');
   remove.textContent = 'Remove';

};
