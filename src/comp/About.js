import React from 'react';
import Navbar from './Navbar';
import '../index.css';


function About() {
  return (
    <div style={{paddingLeft: "300px"}}>
      <Navbar/>
        <div  className='row'>
          <div  className='column'>
            <div className='card'> 
              <img src='https://www.w3schools.com/w3images/team1.jpg'/>
              <div class="container">
                <center><h2>Slitlana B</h2></center>
                <p>Slitlana@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='card'> 
              <img src='https://www.w3schools.com/w3images/team2.jpg'/>
              <div class="container">
                <center><h2>Vitali_W</h2></center>
                <p>Vitali_W@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='card'> 
              <img src='https://www.w3schools.com/w3images/team3.jpg'/>
              <div class="container">
                <center><h2>Jared B</h2></center>             
                <p>Jared@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default About;
// import React from 'react';

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>Welcome to the home page!</p>
//     </div>
//   );
// }

// export default About;