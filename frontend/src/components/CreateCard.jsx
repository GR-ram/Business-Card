import React, {useState} from 'react';
import '../App.css';

function CreateCard({ onAddCard }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [interests, setInterests] = useState([]);
    const [twitterLink, setTwitterLink] = useState('');
    const [linkedinLink, setLinkedinLink] = useState('');
    
    function handleChange(e, setter) {
      setter(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
  
      const newCard = {
        name: name,
        description: description,
        interests: interests,
        socialMedia: {
          twitter: twitterLink,
          linkedin: linkedinLink,
        },
      };
  
      // Pass the new card to the parent component
      onAddCard(newCard);
  
      // Reset the form fields
      setName('');
      setDescription('');
      setInterests([]);
      setTwitterLink('');
      setLinkedinLink('');
    }

    return (
      <div>
      <h2>Enter your details for Business Card</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => handleChange(e, setName)} /> <br />
        <input type="text" placeholder="Description" value={description} onChange={(e) => handleChange(e, setDescription)} /> <br />
        <input type="text" placeholder="Interests (comma-separated)" value={interests} onChange={(e) => setInterests(e.target.value.split(','))} />{' '}
        <br />
        <input type="text" placeholder="Twitter URL" value={twitterLink} onChange={(e) => setTwitterLink(e.target.value)} /> <br />
        <input type="text" placeholder="LinkedIn URL" value={linkedinLink} onChange={(e) => setLinkedinLink(e.target.value)} /> <br />
        <button type="submit">Create Card</button>
      </form>
    </div>
      );
    }


export default CreateCard;