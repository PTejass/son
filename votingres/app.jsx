import React, { useState } from "react";
import "./App.css";

function App() {
    const parties = [
        {
            id: "option1",
            name: "Narendra Modi",
            partyName: "BJP",
            logo: "https://1000logos.net/wp-content/uploads/2022/02/BJP-logo.png",
        },
        {
            id: "option2",
            name: "Rahul Gandhi",
            partyName: "Congress",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/INC_Logo.png",
        },
        {
            id: "option3",
            name: "H. D. Kumaraswamy",
            partyName: "JDS",
            logo: "https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/03/MAHALAXMI-ART-CRAFT-JDS-Logo-SDL718561882-1-470d0.jpg?fit=3508%2C2480&ssl=1",
        },
        {
            id: "option4",
            name: "Yogi Adityanath",
            partyName: "BSP",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bahujan_Samaj_Party_flag.svg/640px-Bahujan_Samaj_Party_flag.svg.png",
        },
        {
            id: "option5",
            name: "Naveen Patnaik",
            partyName: "BJD",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Biju_Janata_Dal.svg/640px-Biju_Janata_Dal.svg.png",
        },
    ];

    const [votes, setVotes] = useState({
        option1: 0,
        option2: 0,
        option3: 0,
    });

    const handleVote = (id) => {
        setVotes({
            ...votes,
            [id]: votes[id] + 1,
        });
    };

    return (
        <div className="container">
            <div className="voting-card">
                <h1>🗳️ Voting Application</h1>

                <p className="subtitle">
                    Choose Your Leader. Build a Better India.
                </p>

                <div className="flag-line">
                    <span className="orange"></span>
                    <span className="chakra">⚙️</span>
                    <span className="green"></span>
                </div>

                {parties.map((party) => (
                    <div className="candidate-card" key={party.id}>
                        <div className="party-info">
                            <h2>{party.name}</h2>
                            <p>{party.partyName}</p>

                            <div className="party-symbol">
                                <img src={party.logo} alt={party.partyName} />
                                <span>{party.partyName}</span>
                            </div>
                        </div>

                        <button onClick={() => handleVote(party.id)}>
                            Vote
                        </button>

                        <div className="votes">
                            {votes[party.id]}
                            <span>votes</span>
                        </div>
                    </div>
                ))}

                <div className="reset-container">
                    <button className="reset-btn" onClick={() => setVotes({
                        option1: 0,
                        option2: 0,
                        option3: 0,
                    })}>
                        Reset Votes
                    </button>
                </div>

                <div className="footer">
                    ❤️ Your Vote. Your Future. Our India.
                </div>
            </div>
        </div>
    );
}

export default App;