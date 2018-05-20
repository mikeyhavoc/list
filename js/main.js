
const addItemButton = document.querySelector('button.addItemButton'); // button to add items to list.
const hideItems = document.querySelector('button.hideItems'); // hide list button event handler.
const listUl = document.querySelector('ul'); 


addItemButton.addEventListener('click', () => { // add items to list button.
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.classList.add('move-items-js', 'text-center'); // add js drag class.

    // mark done button..
    const markDone = document.createElement('button');
    markDone.setAttribute('class', 'complete btn');
    markDone.textContent = 'Check';
    
    // data input value placement before placing in list item.
    let listInputText = document.querySelector('.listInputText'); // data from input for list input. 
    li.textContent = listInputText.value; 
   
    ul.append(li);
    li.append(markDone);
    listInputText.value = '';  
});
listUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
       if (event.target.className === 'complete btn') { // remove items
           const listItem = document.querySelector('.move-items-js');
           let b = listItem.textContent;

           const button = document.querySelector('button.complete');
           if(button) {
          
           let c = button.textContent;
           console.log(c); // button only console test.
           } 
        } 
        if (event.target.className === 'move-items-js') {
          let i = document.querySelector('li');
          let text = i.textContent;
          console.log(text);
        }
       
       
    }
});

 hideItems.addEventListener('click', () => { // hide entire list and board.
    let listInputOutput = document.querySelector('.listInputOutput'); // entire board section.
    if (listInputOutput.style.display != 'none') { // if list != none.
        listInputOutput.style.display = 'none';    // then style equals the second(block) not the first(none).
    } else {
        listInputOutput.style.display = 'block';
    }    
});


Element.prototype.appendBefore = (element) => {
    element.parentNode.insertBefore(this, element);
  },false;

  Element.prototype.appendAfter = (element) => {
    element.parentNode.insertBefore(this, element.nextSibling);
  },false;