import React from "react";
const reactDescriptions = ['Fundamentals','Crucial','Core'];
function genRandomInt(max){
  return Math.floor(Math.random()* (max + 1));
}

export default function Header(){
    const description = reactDescriptions[genRandomInt(2)];
    return( 
    <div>
       
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
            {description} Fundamental React concepts you will need for almost any app you are
            going to build!
            </p>
        </header>
      </div>
      )
}