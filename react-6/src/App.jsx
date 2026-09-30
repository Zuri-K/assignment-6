import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const items = ["Apples", "Bananas", "Cherries", "Pears"];
  const header = <h1>My Grocery List</h1>

  return (
    <div>
      {header}
      {items.map((item) =>{
        return <ul>
          <li>{item}</li>
        </ul>
      })}
      {items.map((item) =>{
        return <ul>
          <li>{item}</li>
        </ul>
      })}
    </div>
  );
}

export default App

/*

Try rendering the List component twice in App. What happens? 

        The items within the array are duplicated, all items are shown twice with no error.

Bonus: Add a new item to the items array. Does it show up in both lists? 

        Yes the new item does show up in both lists.


*/