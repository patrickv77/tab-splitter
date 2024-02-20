// bare bones file for tab items

import React from 'react';

const TabItem = () => {
  return (
    <div className="flex flex-col h-screen border-2 border-solid border-orange-400">
      <div className="flex flex-col bg-slate-500 flex-1 items-center justify-center max-h-[80px] ">
        <h1 className="text-3xl font-bold">TAB SPLITTER</h1>
      </div>
      <div className="flex bg-red-900 text-white flex-1 items-center justify-center italic">landing page</div>
    </div>
  );
};

export default TabItem;