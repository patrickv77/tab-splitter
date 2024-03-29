// placeholder file for main app functionality page

import React from 'react';
import TabItem from '../components/TabItem';

const Splitter = () => {
  const tempTabs = ['a','a','a','a','a','a','a','a','a'];

  const board = [];
  tempTabs.map((el) => board.push(<TabItem />));
  return (
    <div className="flex flex-col h-screen border-2 border-solid border-orange-400">
      <div className="flex flex-col bg-slate-500 flex-1 items-center justify-center max-h-[80px] ">
        <h1 className="text-3xl font-bold">Splitter Page</h1>
      </div>
      <div className="flex-none h-[24px] bg-purple-300 "> [ ]Checkbox (Unassigned), _____TAX%</div>
      <div className="flex flex-row bg-red-900 text-white flex-1 h-full min-h-0">
        <div className="flex flex-col flex-1 border-2 border-solid border-green-300 bg-yellow-200 text-black ">
        <div className="h-full overflow-auto scrollbar">
          {board}
        </div>
        <button className="flex bg-slate-300 border-2 border-solid border-black h-12 items-center justify-center">
          <p>+</p>
        </button>
        </div>
        <div className="flex flex-col flex-none w-32 border-2 border-solid border-blue-600 bg-orange-200 text-black h-full overflow-auto scrollbar">
          <div>circle with initials, underneath have the name</div>
        </div>
      </div>
      <div className="flex-none h-32 bg-purple-300 "> section for totals/tax/tip </div>
    </div>
  );
};

export default Splitter;

// TODO:
/*

  drag and drop?
  design bill/tab elements
  design user elements
  design totals/tax/tip section
  add filters for (unassigned/assigned etc)
  could add categories to bill/tab elements (mains, apps, drinks, desserts)?

*/
/*

  main functionality page

  two main columns:
  left column (larger) will be items
  right column (much smaller) will be users

  drag and drop users into items, items will split automatically based on the amount of users that exist on that item

  notes:
  lock items to reduce visual clutter? <-- move to a separate tab that is collapsable

  where to put tax and tip options?

  full summary page to see how much each person owes and a way to indicate who paid maybe

  code to join room? lock maneuverability of users to user and room creator?

*/
