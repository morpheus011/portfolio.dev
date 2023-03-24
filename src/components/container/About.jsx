import { images } from '../../constants'
import { TbArrowLoopRight } from 'react-icons/tb'

const About = () => {
  const activity = [//
    "Coding",
    "Reading",
    "Painting",
    "Problem Solving",
    "Team Management",
    "Mentoring",
  ];

  return (
    <div id="About">
      <h1>About Me</h1>
      <section className="about-container">
        <div className="about-content">
          <p className="about-text">
            Hello! I'm Nucleus, from Kanpur, India. I am pursuing my
            Masters(M.C.A) from Kamla Nehru Institute of Science & Technology,
            in Computer Science and Engineering (2022-2024). I am a passionate
            software engineer. Currently learning and exploring more on Full
            Stack Web Development in which I am more focused toward the Frontend
            Part. My core skills are mostly based on JavaScript, which is the
            love of my programming life. I am also looking forward to
            collaborate with like minded people on projects to build some
            real-world problem solving tools. Also trying to contribute more in
            open source to serve the community by my knowledge and experience. I
            am also open to work for any Freelancing Project based on my skill
            set 😊.
          </p>

          <div className="activity">
            {activity.map((activity, key) => {
              return (
                <p key={key}>
                  <span>
                    <TbArrowLoopRight  />
                  </span>
                  {activity}
                </p>
              );
            })}
          </div>
        </div>

        <div className="about-image">
          <img src={images.aboutUser} alt="My-image" />
        </div>
      </section>
    </div>
  );
};

export default About;
