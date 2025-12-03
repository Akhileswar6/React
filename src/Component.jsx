import profile from './assets/github-readme.gif';

function Card () {
    return (
        <div className="card">
            <img className="card-image" src={profile} alt="profile picture"></img>
            <h2 className='card-title'>Akhileswar</h2>
            <p className='card-desc'>Realistic Artist and Cyber Security</p>
            
        </div>
    );
    
}
export default Card;