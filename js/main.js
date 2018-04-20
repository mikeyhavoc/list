
const addItemButton = document.querySelector('button.addItemButton'); // button to add items to list.
let listOutputDiv = document.querySelector('.listOutputDiv');

const hideItems = document.querySelector('button.hideItems'); // hide list button event handler.
const listUl = listOutputDiv.querySelector('ul');
list = listUl.children;


addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');

    
    let listInputText = document.querySelector('.listInputText'); // data from input for list input. 
    li.textContent = listInputText.value; 
    listmanueverButtons(li);
    ul.appendChild(li);
    listInputText.value = '';
  
});

listUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
       if (event.target.className === 'up btn') {
           
       } 
       if (event.target.className === 'down btn') { // moves item down list.
          let listItem = event.target.parentNode;
          let nextItem = listItem.nextElementSibling;
          if (nextItem) {
            listUl.insertBefore(nextItem, listItem);
          }
          
       }
       if (event.target.className === 'remove btn') { // remove items
           let listItem = event.target.parentNode;
           listUl.removeChild(listItem);    
       }
    }
});




const listmanueverButtons = (li) => {
    const up = document.createElement('button');
    up.setAttribute('class', 'up btn');
    up.textContent = 'Up';
    li.append(up);
    
    const down = document.createElement('button');
    down.setAttribute('class', 'down btn');
    down.textContent = 'Down';
    li.append(down);
 
    const remove = document.createElement('button');
    remove.setAttribute('class', 'remove btn');
    remove.textContent = 'Remove';
    li.append(remove);
 
 };

 hideItems.addEventListener('click', () => { // hide entire list and board.
    let listInputOutput = document.querySelector('.listInputOutput'); // entire board section.
    if (listInputOutput.style.display != 'none') { // if list != none.
        listInputOutput.style.display = 'none';    // then style equals the second(block) not the first(none).
    } else {
        listInputOutput.style.display = 'block';
    }
    
});