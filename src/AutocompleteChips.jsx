import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const AutocompleteChips = () => {
  const [inputValue, setInputValue] = useState('');
  const [initialItems] = useState(['Pranav Raj', 'Aman Mishra', 'Sameer Ranjan', 'Vedant']);
  const [availableItems, setAvailableItems] = useState([...initialItems]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showItemList, setShowItemList] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    
    const filteredItems = initialItems.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    setAvailableItems(filteredItems);

   
    setShowItemList(true);
  };

  const handleItemClick = (item) => {
    
    if (!selectedItems.includes(item)) {
     
      setSelectedItems([...selectedItems, item]);

      
      const updatedAvailableItems = availableItems.filter(i => i !== item);
      setAvailableItems(updatedAvailableItems);

      setInputValue('');

     
      setShowItemList(true);
    }
  };

  const handleChipRemove = (item) => {
    
    const updatedSelectedItems = selectedItems.filter(i => i !== item);
    setSelectedItems(updatedSelectedItems);

   
    setAvailableItems([...availableItems, item]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      if (inputValue === '' && selectedItems.length > 0) {
        // Highlight and delete the last inserted chip
        const lastInsertedChip = selectedItems[selectedItems.length - 1];
        const updatedSelectedItems = selectedItems.slice(0, selectedItems.length - 1);
        setSelectedItems(updatedSelectedItems);
        console.log('Highlighted and removed chip:', lastInsertedChip);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 relative">
      <div className="flex flex-wrap">
        {selectedItems.map(item => (
          <div key={item} className="bg-blue-500 text-white px-4 py-2 rounded-md m-2 flex items-center">
            <span>{item}</span>
            <FaTimes onClick={() => handleChipRemove(item)} className="ml-2 cursor-pointer" />
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type to search..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 mt-4"
        onClick={() => setShowItemList(true)}
      />
      {showItemList && (
        <ul className="mt-2 absolute z-10 w-full bg-white border rounded-md shadow-md">
          {availableItems.map(item => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className="cursor-pointer px-4 py-2 border-t hover:bg-gray-100 flex items-center"
            >
              <span>{item}</span> <FaTimes className="ml-2" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteChips;
