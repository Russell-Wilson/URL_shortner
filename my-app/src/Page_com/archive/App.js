import React, { Component, useRef} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create_route from './Page_com/Create.js'

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Create_route />
      </div>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <div className='content'>
//         <Routes> 
//           <Route path="/home" element={<Create_route />} />    
//           <Route path="/home2" element={<CustomPaginationActionsTable />} />        
//         </Routes>
//       </div>
//     </div>
//     </Router>
//   );
// }