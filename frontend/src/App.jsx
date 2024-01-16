import React,{ useState } from 'react'
import CreateCard from './components/CreateCard'
import './App.css'
import BusinessCard from './components/BusinessCard'

function App() {
  
  const [cards, setCards] = useState([]);
  function handleAddCard(newCard) {
    setCards([...cards, newCard]);
  }

  return <>
      
      <CreateCard onAddCard={handleAddCard}/>
      {cards.map((card, index) => (
        <BusinessCard key={index} card={card} />
      ))}
    </>

}

export default App
