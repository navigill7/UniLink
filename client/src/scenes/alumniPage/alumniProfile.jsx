
import "./alumniProfile.css";

const AlumniProfile = () => {
    return <div className = "profile-image-container">
        <img className="image" src="https://img.freepik.com/premium-photo/handsome-man-with-glasses-smiling-looking-t-1720967623-1_979520-126729.jpg?w=740" alt="profile Image" />
        <div className = "profile-container">
            <div className = "profile-details">
                <p>Name:</p>
                <h1>Siddu Nihar Y</h1>
                <p>Pass Out:</p>
                <h1>2026</h1>
                <p>Work Domain:</p>
                <h1>Ariticial Intellegence</h1>
                <p>Experience:</p>
                <h1>4+ years</h1>
                <p>Organization:</p>
                <h1>Google</h1>
            </div>
            <button>Connect</button>
        </div>
        
    </div>
}

export default AlumniProfile;