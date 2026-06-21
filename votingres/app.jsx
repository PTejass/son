import { useState } from "react";
import "./App.css";

function App() {
    const bjpSvg = "https://1000logos.net/wp-content/uploads/2022/02/BJP-logo.png";

    const congressSvg = "https://upload.wikimedia.org/wikipedia/commons/a/ad/INC_Logo.png";

    const jdsSvg = "https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/03/MAHALAXMI-ART-CRAFT-JDS-Logo-SDL718561882-1-470d0.jpg?fit=3508%2C2480&ssl=1";

    const [votes, setVotes] = useState({
        bjp: 0,
        congress: 0,
        jds: 0,
    });

    const handleVote = (party) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [party]: prevVotes[party] + 1,
        }));
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

                <div className="candidate-card">
                    <div className="party-info">
                        <h2>Narendra Modi</h2>
                        <p>Bharatiya Janata Party</p>

                        <div className="party-symbol">
                            <img src={bjpSvg} alt="BJP" />
                            <span>BJP</span>
                        </div>
                    </div>

                    <button onClick={() => handleVote("bjp")}>Vote</button>

                    <div className="votes">
                        {votes.bjp}
                        <span>votes</span>
                    </div>
                </div>

                <div className="candidate-card">
                    <div className="party-info">
                        <h2>Rahul Gandhi</h2>
                        <p>Indian National Congress</p>

                        <div className="party-symbol">
                            <img src={congressSvg} alt="Congress" />
                            <span>Congress</span>
                        </div>
                    </div>

                    <button onClick={() => handleVote("congress")}>Vote</button>

                    <div className="votes">
                        {votes.congress}
                        <span>votes</span>
                    </div>
                </div>

                <div className="candidate-card">
                    <div className="party-info">
                        <h2>H. D. Kumaraswamy</h2>
                        <p>Janata Dal (Secular)</p>

                        <div className="party-symbol">
                            <img src={jdsSvg} alt="JDS" />
                            <span>JDS</span>
                        </div>
                    </div>

                    <button onClick={() => handleVote("jds")}>Vote</button>

                    <div className="votes">
                        {votes.jds}
                        <span>votes</span>
                    </div>
                </div>

                <div className="footer">
                    ❤️ Your Vote. Your Future. Our India.
                </div>
            </div>
        </div>
    );
}

export default App;