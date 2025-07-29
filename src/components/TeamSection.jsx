const teamMembers = [
  {
    name: 'Kavith',
    role: 'Team Head',
    image: '/Team/Kavith.jpeg',
  },
  {
    name: 'Shashika',
    role: 'APP Developer',
    image: '/Team/Sashika.jpeg',
  },
  {
    name: 'Roshan',
    role: 'Frontend Developer',
    image: '/Team/Roshan.jpeg',
  },
  {
    name: 'Imalka',
    role: 'Backend Developer',
    image: '/Team/Imalka.jpeg',
  },
  {
    name: 'Naduni',
    role: 'Documentation Specialist',
    image: '/Team/Naduni.jpeg',
  },
  {
    name: 'Yohan',
    role: 'Database Administrator',
    image: '/Team/Yohan.jpeg',
  },
  {
    name: 'Chrishen',
    role: 'UI/UX Designer',
    image: '/Team/Chrishen.jpeg',
  },
];

function TeamSection() {
  return (
    <section id="Team-Section" className="team-section">
      <h2 className="section-title">The Minds Behind the Mission</h2>
      <div className="carousel">
        <div className="carousel-track">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div className="team-member" key={index}>
              <div className="profile-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-image"
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
