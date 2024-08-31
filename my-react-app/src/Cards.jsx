
import profilePicture from './assets/react.svg'
function Cards(){
    return(
        <div className="card">
            <img className="img" src={profilePicture} alt="profile picture" ></img>
            <h2 className="heading">Riyan</h2>
            <p className="text">I'm learning React js</p>
        </div>
    );
}

export default Cards;