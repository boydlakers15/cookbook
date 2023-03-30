import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Data from './Data.js';

console.log(Data);

function About() {
    const recipeTitle = Data.data[[0]].attributes.title; 
    const recipeTime = Data.data[0].attributes.time;
    const recipeLevel = Data.data[0].attributes.level;
    const recipe = Data.data[0].attributes.ingredients[1];

   
    return (
        <div>
            <Navbar/>
            <div className="images-container section">
                
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/WLHsZm_B4rdxpmAMFrIbmCSYW08=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg" alt="Pankcakes"/>
                   <center><h2>{Data.data[0].attributes.title}</h2></center>
                    <p>Time: {Data.data[0].attributes.time}</p>
                    <p>Difficulty: {Data.data[0].attributes.level} </p>
                    <p>Ingredients: <ol>
                        <li>{Data.data[0].attributes.ingredients[1]}</li>
                        <li>{Data.data[0].attributes.ingredients[2]}</li>
                        <li>{Data.data[0].attributes.ingredients[3]}</li>
                        <li>{Data.data[0].attributes.ingredients[4]}</li>
                        <li>{Data.data[0].attributes.ingredients[5]}</li>
                        <li>{Data.data[0].attributes.ingredients[6]}</li>
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/'>Instructions</a></center>
                </div>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <div className="image-container">
                    <img src='https://www.allrecipes.com/thmb/xy_G3p4XDkuKDG4LDAivUh-hWLI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tiramisu-ii-ca809422e2244ba0a023b07b3112d4fd.jpeg' alt="Tiramisu"/>
                    <center><h2>{Data.data[1].attributes.title}</h2></center>
                    <p>Time: {Data.data[1].attributes.time}</p>
                    <p>Difficulty: {Data.data[1].attributes.level} </p> 
                    <p>Ingredients: <ol>
                        <li>{Data.data[1].attributes.ingredients[1]}</li>
                        <li>{Data.data[1].attributes.ingredients[2]}</li>
                        <li>{Data.data[1].attributes.ingredients[3]}</li>
                        <li>{Data.data[1].attributes.ingredients[4]}</li>
                        <li>{Data.data[1].attributes.ingredients[5]}</li>
                        <li>{Data.data[1].attributes.ingredients[6]}</li>
                        <li>{Data.data[1].attributes.ingredients[7]}</li>
                        <li>{Data.data[1].attributes.ingredients[8]}</li>
                        <li>{Data.data[1].attributes.ingredients[9]}</li>
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/21412/tiramisu-ii/'>Instructions</a></center>
                </div>
            </div>

            <div className="images-container section">
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/-tq1tUXxAEPYsWthU_du_EjpM54=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8792318-011ed4c9eb804a3c9fb46ec5cb59397d.jpg" alt="Beef Empanadas"/>
                    <center><h2>{Data.data[2].attributes.title}</h2></center>
                    <p>Time: {Data.data[2].attributes.time}</p>
                    <p>Difficulty: {Data.data[2].attributes.level} </p>
                    <p>Ingredients: <ol>
                        <li>{Data.data[2].attributes.ingredients[1]}</li>
                        <li>{Data.data[2].attributes.ingredients[2]}</li>
                        <li>{Data.data[2].attributes.ingredients[3]}</li>
                        <li>{Data.data[2].attributes.ingredients[4]}</li>
                        <li>{Data.data[2].attributes.ingredients[5]}</li>
                        <li>{Data.data[2].attributes.ingredients[6]}</li>
                        <li>{Data.data[2].attributes.ingredients[7]}</li>
                        <li>{Data.data[2].attributes.ingredients[8]}</li>
                        <li>{Data.data[2].attributes.ingredients[9]}</li>
                        <li>{Data.data[2].attributes.ingredients[10]}</li>
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/282433/empanadas-saltenas/'>Instructions</a></center>
                </div>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/RDWRSUeFeQC16tto1abdk1OkNZk=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7557150-003b399503054e95873262027ed0619a.jpg" alt="Chickpea Curry"/>
                    <center><h2>{Data.data[3].attributes.title}</h2></center>
                    <p>Time: {Data.data[3].attributes.time}</p>
                    <p>Difficulty: {Data.data[3].attributes.level} </p>
                    <p>Ingredients: <ol>
                        <li>{Data.data[3].attributes.ingredients[1]}</li>
                        <li>{Data.data[3].attributes.ingredients[2]}</li>
                        <li>{Data.data[3].attributes.ingredients[3]}</li>
                        <li>{Data.data[3].attributes.ingredients[4]}</li>
                        <li>{Data.data[3].attributes.ingredients[5]}</li>
                        <li>{Data.data[3].attributes.ingredients[6]}</li>
                        <li>{Data.data[3].attributes.ingredients[7]}</li>
                        <li>{Data.data[3].attributes.ingredients[8]}</li>
                        <li>{Data.data[3].attributes.ingredients[9]}</li>
                        <li>{Data.data[3].attributes.ingredients[10]}</li>
                        <li>{Data.data[3].attributes.ingredients[11]}</li>
                        <li>{Data.data[3].attributes.ingredients[12]}</li>
                        <li>{Data.data[3].attributes.ingredients[13]}</li>
                        
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/265472/vegan-sweet-potato-chickpea-curry/'>Instructions</a></center>
                </div>
            </div>

            <div className="images-container section">
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/qEptt89NcMXIR76tS2h1HRrYSA0=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6718233_original-2000-efa2c6a5a2be477ba1d8cd823ba7512c.jpg" alt="Lamb Souvlaki"/>
                    <center><h2>{Data.data[4].attributes.title}</h2></center>
                    <p>Time: {Data.data[4].attributes.time}</p>
                    <p>Difficulty: {Data.data[4].attributes.level} </p>
                    <p>Ingredients: <ol >
                        <li>{Data.data[4].attributes.ingredients[1]}</li>
                        <li>{Data.data[4].attributes.ingredients[2]}</li>
                        <li>{Data.data[4].attributes.ingredients[3]}</li>
                        <li>{Data.data[4].attributes.ingredients[4]}</li>
                        <li>{Data.data[4].attributes.ingredients[5]}</li>
                        <li>{Data.data[4].attributes.ingredients[6]}</li>
                        <li>{Data.data[4].attributes.ingredients[7]}</li>
                        <li>{Data.data[4].attributes.ingredients[8]}</li>
                       
                        
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/274173/lamb-souvlaki/'>Instructions</a></center>
                </div>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/qdcozrdbXPwl6IWXv8RnwbdX0pI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1026802-hoisin-glazed-salmon-Sherri-4x3-1-f084e0c1382041b6a48d4436831640fd.jpg" alt="Hoisin-Glazed Salmon"/>
                    <center><h2>{Data.data[5].attributes.title}</h2></center>
                    <p>Time: {Data.data[5].attributes.time}</p>
                    <p>Difficulty: {Data.data[5].attributes.level} </p>
                    <p>Ingredients: <ol>
                        <li>{Data.data[5].attributes.ingredients[1]}</li>
                        <li>{Data.data[5].attributes.ingredients[2]}</li>
                        <li>{Data.data[5].attributes.ingredients[3]}</li>
                        <li>{Data.data[5].attributes.ingredients[4]}</li>
                        <li>{Data.data[5].attributes.ingredients[5]}</li>
                        <li>{Data.data[5].attributes.ingredients[6]}</li>
                        <li>{Data.data[5].attributes.ingredients[7]}</li>
                        <li>{Data.data[5].attributes.ingredients[8]}</li>
                        
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/186685/hoisin-glazed-salmon/'>Instructions</a></center>
                </div>
            </div>
        
            <div className="images-container section">
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/pnDki5t6XQkPW7uPzniRw9j6jdo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/691817-61cfaca239174199ab1630ca38a34355.jpg" alt="Hunan Kung Pao"/>
                    <center><h2>{Data.data[6].attributes.title}</h2></center>
                    <p>Time: {Data.data[6].attributes.time}</p>
                    <p>Difficulty: {Data.data[6].attributes.level} </p>
                    <p>Ingredients: <ol>
                        <li>{Data.data[6].attributes.ingredients[1]}</li>
                        <li>{Data.data[6].attributes.ingredients[2]}</li>
                        <li>{Data.data[6].attributes.ingredients[3]}</li>
                        <li>{Data.data[6].attributes.ingredients[4]}</li>
                        <li>{Data.data[6].attributes.ingredients[5]}</li>
                        <li>{Data.data[6].attributes.ingredients[6]}</li>
                        <li>{Data.data[6].attributes.ingredients[7]}</li>
                        <li>{Data.data[6].attributes.ingredients[8]}</li>
                        <li>{Data.data[6].attributes.ingredients[9]}</li>
                        <li>{Data.data[6].attributes.ingredients[10]}</li>
                        <li>{Data.data[6].attributes.ingredients[11]}</li>
                        
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/167942/hunan-kung-pao/'>Instructions</a></center>
                </div>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/ZAMlYmDTjCbIGOWC9opVtG43es0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4523461-5ba0ee1b47244ad593372e984b104a4f.jpg" alt="Cucumber Sunomono"/>
                    <center><h2>{Data.data[7].attributes.title}</h2></center>
                    <p>Time: {Data.data[7].attributes.time}</p>
                    <p>Difficulty: {Data.data[7].attributes.level} </p>
                    <p>Ingredients: <ol>
                        <li>{Data.data[7].attributes.ingredients[1]}</li>
                        <li>{Data.data[7].attributes.ingredients[2]}</li>
                        <li>{Data.data[7].attributes.ingredients[3]}</li>
                        <li>{Data.data[7].attributes.ingredients[4]}</li>
                        <li>{Data.data[7].attributes.ingredients[5]}</li>
                        
                        
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/14050/cucumber-sunomono/'>Instructions</a></center>
                </div>
            </div>
            <div className="images-container section">
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/Hyp284Q7lSNEV602otuuxz5L6fM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9445061-4e13b989730e4fb0a6c71058741f06c7.jpg" alt="Cajun Shrimp"/>
                    <center><h2>{Data.data[8].attributes.title}</h2></center>
                    <p>Time: {Data.data[8].attributes.time}</p>
                    <p>Difficulty: {Data.data[8].attributes.level} </p>
                    <p>Ingredients: <ol>
                        <li>{Data.data[8].attributes.ingredients[1]}</li>
                        <li>{Data.data[8].attributes.ingredients[2]}</li>
                        <li>{Data.data[8].attributes.ingredients[3]}</li>
                        <li>{Data.data[8].attributes.ingredients[4]}</li>
                        <li>{Data.data[8].attributes.ingredients[5]}</li>
                        <li>{Data.data[8].attributes.ingredients[6]}</li>
                        <li>{Data.data[8].attributes.ingredients[7]}</li>
                        <li>{Data.data[8].attributes.ingredients[8]}</li>
                        <li>{Data.data[8].attributes.ingredients[9]}</li>
                        
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/229120/cajun-shrimp/'>Instructions</a></center>
                </div>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/LH-xEB-2SPL3kzT-zy1gnRb6hl4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9144816-4a124a9888ea409f897316da89c92f04.jpg" alt="Schupfnudeln"/>
                    <center><h2>{Data.data[9].attributes.title}</h2></center>
                    <p>Time: {Data.data[9].attributes.time}</p>
                    <p>Difficulty: {Data.data[9].attributes.level} </p>
                    <p>Ingredients: <ol>
                        <li>{Data.data[9].attributes.ingredients[1]}</li>
                        <li>{Data.data[9].attributes.ingredients[2]}</li>
                        <li>{Data.data[9].attributes.ingredients[3]}</li>
                        <li>{Data.data[9].attributes.ingredients[4]}</li>
                        <li>{Data.data[9].attributes.ingredients[5]}</li>
                        <li>{Data.data[9].attributes.ingredients[6]}</li>
                        
                    </ol></p>
                    <center><a href='https://www.allrecipes.com/recipe/283771/schupfnudeln-german-fried-potato-dumplings/'>Instructions</a></center>
                </div>
                
            </div>
        </div>
    );
}

export default About;