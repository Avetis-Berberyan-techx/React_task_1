import ProfileCard from "../profileCard/profileCard";
import "./profileCards.css";

import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";

const teamMembers = [
  {
    name: "Anna Hakobyan",
    position: "Frontend Developer",
    imageUrl: p1,
  },
  {
    name: "Arman Petrosyan",
    position: "Backend Engineer",
    imageUrl: p2,
  },
  {
    name: "Mariam Sargsyan",
    position: "UI / UX Designer",
    imageUrl: p3,
  },
];

export default function ProfileCards() {
  return (
    <div className="profile-cards">
      {teamMembers.map((member) => (
        <ProfileCard
          key={member.name}
          name={member.name}
          position={member.position}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  );
}
