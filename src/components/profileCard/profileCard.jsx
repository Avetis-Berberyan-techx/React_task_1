import "./profileCard.css";

function ProfileCard({ name, position, imageUrl }) {
  return (
    <div className="profile-card">
      <div className="profile-card__image">
        <img
          src={imageUrl}
          alt={`${name} profile`}
          className="profile-card__image--img"
        />
      </div>

      <div className="profile-card__name">
        <h2 className="profile-card__name--text">{name}</h2>
      </div>

      <div className="profile-card__position">
        <h2 className="profile-card__position--text">{position}</h2>
      </div>
    </div>
  );
}

export default ProfileCard;
