import { useState } from 'react';
import contactsJson from "./../contacts.json";
import ContactCard from './ContactCard';

function ContactList() {
  const numCelebrities = 5;

  const [contacts, setContacts] = useState(contactsJson.slice(0, numCelebrities));

  const addRandom = () => {
    const notListed = [...contactsJson].splice(numCelebrities);
    const randomCelebrity = notListed[Math.floor(Math.random() * notListed.length)];

    setContacts(contacts.concat(randomCelebrity))
  }

  const sortByName = () => {
    const arrByName = [...contacts].sort((a,b) => (a.name) > b.name ? 1 : -1)
    //console.log(arrByName)

    setContacts(arrByName)
  }

  const sortByPopularity = () => {
    const arrByPopularity = [...contacts].sort((a,b) => (a.popularity) > b.popularity ? 1 : ((b.popularity > a.popularity) ? -1 : 0))
    //console.log(arrByPopularity)
    
    setContacts(arrByPopularity)
  }

  const deleteCelebrity = (celebrityId) => {

    const filteredCelebrities = contacts.filter((celebrity) => {
      return celebrity.id !== celebrityId;
    })

    setContacts(filteredCelebrities);
  }

  return (
    <>
    
    <div className="btn-row">
    <button className="btn" onClick={addRandom}>Add a Random Contact</button>
    
    <button className="btn" onClick={sortByName}>Sort By Name</button>
    
    <button className="btn" onClick={sortByPopularity}>Sort By Popularity</button>
    </div>

    <table className="celebritiesTable">
      <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>      
        {contacts.map((celebrity) => {
          return (
            <ContactCard key={celebrity.id} celebrityObj={celebrity} deleteCelebrity={deleteCelebrity} />
          )
      })}
      </tbody>
    </table>
    </>
  );
}

export default ContactList;
