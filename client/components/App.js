// front page of the app

import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col h-screen border-2 border-solid border-orange-400">
      <h1 className="bg-slate-500 text-center">TAB SPLITTER</h1>
      <body className="bg-red-900 text-white">
      lorem ipsum etc asdf
      </body>
      <div>
        <p className="bg-green-400">hello world</p>
      </div>
      
    </div>
  );
};

export default App;
/*

todo: design the UI

route to pages, store components of pages in components

or route to pages and store components of pages in [PageName]Components folder?


*/