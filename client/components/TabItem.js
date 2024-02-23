// bare bones file for tab items

import React from 'react';

const TabItem = () => {
  return (
    <div className="flex flex-none h-24 border-2 border-solid border-red-600 rounded-xl my-[1px]">
      this is where the bill elements will live, should be able to add, remove,
      edit, etc
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">EDIT</button>
    </div>
  );
};

export default TabItem;

// TODO:
/*

  edit button:
    pull up an overlay screen to input name of item, price etc.

  delete button

 */