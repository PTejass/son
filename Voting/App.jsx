import React, { useState } from 'react';
import './App.css';

function App() {
  const parties = [
    {
      id: 'option1',
      name: 'Narendra Modi',
      partyName: 'BJP',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Bharatiya_Janata_Party_logo.svg',
    },
    {
      id: 'option2',
      name: 'Rahul Gandhi',
      partyName: 'Congress',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Indian_National_Congress_hand_logo.svg',
    },
    {
      id: 'option3',
      name: 'HD Kumaraswamy',
      partyName: 'JDS',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Janata_Dal_%28Secular%29_logo.png',
    },
    {
      id: 'option4',
      name: 'Yogi Adityanath',
      partyName: 'BSP',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Janata_Dal_%28Secular%29_logo.png',
    },
    {
      id: 'option5',
      name: 'Naveen Patnaik',
      partyName: 'BJD',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Janata_Dal_%28Secular%29_logo.png',
    },

  ];

  const [votes, setVotes] = useState({
    option1: 0,
    option2: 0,
    option3: 0,
    option4: 0,
    option5: 0,
  });

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      option1: 0,
      option2: 0,
      option3: 0,
      option4: 0,
      option5: 0,
    });
  };

  return (
    <div className="App">
      <h1>Voting Application</h1>

      <div className="vote-table-card">
        <table className="vote-table" aria-label="Voting options table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Party</th>
              <th>Logo</th>
              <th>Votes</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {parties.map((party) => (
              <tr key={party.id}>
                <td>{party.name}</td>
                <td>{party.partyName}</td>
                <td>
                  <img
                    src={party.logo}
                    className="party-logo"
                  />
                </td>
                <td>{votes[party.id]}</td>
                <td>
                  <button
                    className="vote-btn"
                    onClick={() => handleVote(party.id)}
                  >
                    Vote
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="reset-btn" onClick={resetVotes}>
        Reset Votes
      </button>
    </div>
  );
}

export default App;