const hideElement = (element) => {
  element.classList.add('Hide');
  element.children[0].classList.add('Hide');
};

const showElement = (element) => {
  element.classList.remove('Hide');
  element.children[0].classList.remove('Hide');
};


const searching = (charaListRef, searchRef) => {
  if (charaListRef.current && searchRef.current && searchRef.current.value.length > 2) {
    for (let i = 0; i < charaListRef.current.children.length; i++) {
      const listItem = charaListRef.current.children[i];
      const listItemText = listItem.children[0].textContent.toLowerCase();
      const searchTerm = searchRef.current.value.toLowerCase();

      if (!listItemText.startsWith(searchTerm)) {
        hideElement(listItem);
      } else {
        showElement(listItem);
      }
    }
  } else if (charaListRef.current && searchRef.current) {
    for (let i = 0; i < charaListRef.current.children.length; i++) {
      const listItem = charaListRef.current.children[i];
      showElement(listItem);
    }
  }
};

export default searching