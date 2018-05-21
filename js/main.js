
/**
 * appendBefore
 * Element prototype function.
 * @param {this} element
 * insertsBefore the element Called. 
 */
Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
  },false;

/**
 * appendAfter
 * Element Prototype function.
 * @param {this} element 
 * inserts Before element.NextSibling.
 */
Element.prototype.appendAfter = function (element) {
element.parentNode.insertBefore(this, element.nextSibling);
},false;

///-------------------- event listener names.------------------------------------------------
const addItemButton = document.querySelector('button.addItemButton'); // button to add items to list.
const hideItems = document.querySelector('button.hideItems'); // hide list button event handler.
const listUl = document.querySelector('ul'); 
//-------------------------------------------------------------------------------------------

addItemButton.addEventListener('click', () => { // add items to list button.

    // the div around the ul->li->check(button).
    const div = document.createElement('div');
    div.classList.add('container');


    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.classList.add('move-items-js', 'text-center'); // add js drag class.

    // mark done button..
    const markDone = document.createElement('button');
    markDone.classList.add('btn', 'markdown', 'mark-down-js');
    markDone.textContent = 'Check';
    
    // data input value placement before placing in list item.
    let listInputText = document.querySelector('.listInputText'); // data from input for list input. 
    li.textContent = listInputText.value; 
   
    // the append section using appendBefore and appendAfter.
    div.appendBefore(ul);
    ul.append(li);
    markDone.appendAfter(li);
    div.appendAfter(markDone);

    listInputText.value = '';  
});
listUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
       if (event.target.className === 'btn markdown mark-down-js') { // remove items
        let text = event.target.li;
          
          
           let c = text.textContent;
           console.log(c); // button only console test.
           
        } 
        if (event.target.className === 'move-items-js') {
          let i = document.querySelector('li');
          let text = i.textContent;
          console.log(text);
        }
       
       
    }
});

/**
 * hideItem.addEventListener
 * @param {click} Event
 * let listInputOutput -> pulled frrom same named class.
 * if not equals style display of none;
 * then show none of the boards.
 * Other than the show and tell button.
 * ELSE
 * display -> block -> all data that has been entered. * 
 */
 hideItems.addEventListener('click', () => { // hide entire list and board.
    let listInputOutput = document.querySelector('.listInputOutput'); // entire board section.
    if (listInputOutput.style.display != 'none') { // if list != none.
        listInputOutput.style.display = 'none';    // then style equals the second(block) not the first(none).
    } else {
        listInputOutput.style.display = 'block';
    }    
});


