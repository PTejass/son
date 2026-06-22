import React, { useState } from 'react';
import './App.css';

function App() {
  const parties = [
    {
      id: 'option1',
      name: 'Narendra Modi',
      partyName: 'BJP',
      logo: 'https://1000logos.net/wp-content/uploads/2022/02/BJP-logo.png',
    },
    {
      id: 'option2',
      name: 'Rahul Gandhi',
      partyName: 'Congress',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/INC_Logo.png',
    },
    {
      id: 'option3',
      name: 'HD Kumaraswamy',
      partyName: 'JDS',
      logo: 'https://jds.ind.in/en/imgs/downloads/jds_logo.png',
    },
    {
      id: 'option4',
      name: 'Yogi Adityanath',
      partyName: 'BSP',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/BSP_Flag.png',
    },
    {
      id: 'option5',
      name: 'Naveen Patnaik',
      partyName: 'BJD',
      logo: 'https://votersverdict.com/party_img/1143030_biju_janata_dal_logo.webp',
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