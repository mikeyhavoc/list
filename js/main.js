const listInputText = document.querySelector('.listInputText'); // data from input for list input.
const addItemButton = document.querySelector('.addItemButton'); // button to add items to list.
const listOutput = addItemButton.querySelector('button.listOutput');



addItemButton.addEventListener('click', () => {
   console.log(listOutput.nextElementSibling);

})



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
