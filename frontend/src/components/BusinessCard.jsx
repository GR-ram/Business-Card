import '../App.css';

function BusinessCard({card}) {
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="card-title">{card.name}</h1>
            </div>
            <div className="card-body">
                <p className="card-text">{card.description}</p>
            </div>
            <div className="card-footer">
                <p className="card-text">Interests</p>
                <ul>
                    {card.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>
            <div className="social-buttons">
                <button className="social-button">Twitter</button>
                <button className="social-button">LinkedIn</button>
            </div>
        </div>
    )

    
}

export default BusinessCard;