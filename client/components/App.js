// front page of the app

import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col h-screen border-2 border-solid border-orange-400">
      <h1 className="flex bg-slate-500 flex-1 items-center justify-center max-h-[80px]">
        TAB SPLITTER
      </h1>
      <div className="flex bg-red-900 text-white flex-1 items-center justify-center">landing page</div>
    </div>
  );
};

export default App;
/*

todo: design the UI

route to pages, store components of pages in components

or route to pages and store components of pages in [PageName]Components folder?


*/
