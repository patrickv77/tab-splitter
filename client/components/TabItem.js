// bare bones file for tab items

import React from 'react';

const TabItem = () => {
  return (
    <div className="flex flex-none h-24 border-2 border-solid border-red-600 rounded-xl my-[1px]">
      <div className="flex items-center justify-center grow-1 w-1/6">[item name]</div>
      <div className="flex items-center justify-center grow-1 w-1/6">[item price]</div>
      <div className="flex grow-1 w-2/3 justify-between">
        <div>Users:</div>
        <div className="flex">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 border-1 border-solid border-blue-800 mr-1">EDIT</button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 border-1 border-solid border-blue-800">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default TabItem;

// TODO:
/*

  edit button:
    pull up an overlay screen to input name of item, price etc.
    change the edit icon to the classic pen icon

  delete button

 */