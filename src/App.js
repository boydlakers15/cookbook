import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './comp/Home';
import About from './comp/About';
import Contact from './comp/Contact';
import Recipes from './comp/Recipes';


function App() {
  return (
    <div>
      {/* <nav>
        <NavLink to={"/Home"}>
            Home
        </NavLink>
      </nav> */}
    
    <BrowserRouter>
      <div>       
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Recipes" element={<Recipes/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
// import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Home from './comp/Home';
// import About from './comp/About';
// import Contact from './comp/Contact';
// import Navbar from './comp/Navbar';

// function App() {
//   return (
//     <div>
//       {/* <nav>
//         <NavLink to={"/Home"}>
//             Home
//         </NavLink>
//       </nav> */}
    
//     <BrowserRouter>
//       <div>
//         <Navbar />

//         <Routes>
//           <Route exact path="/Home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;