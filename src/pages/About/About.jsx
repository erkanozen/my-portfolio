import "./About.css";

const About = ({ dark }) => {
  return (
    <div
      style={
        dark
          ? { background: "#ffd700", color: "black" }
          : { background: "black", color: "white" }
      }
      className="about-container"
      id="about"
    >
      <h1 className="about-title">
        About{" "}
        <span style={dark ? { color: "white" } : { color: "#fdd700" }}>Me</span>
      </h1>
      <div className="about-info-container">
        <img className="about-image" src="/public/profile-avatar.webp" alt="" />
        <h2
          style={dark ? { color: "black" } : { color: "#fdd700" }}
          className="about-job"
        >
          Frontend Developer
        </h2>
        <p
          style={
            dark
              ? { background: "black", color: "white" }
              : { background: "#ffd700", color: "black" }
          }
          className="about-info"
        >
          Merhaba, Ben Erkan. 5-6 aydır Udemy ve YouTube üzerinden Frontend
          Developer olmak için gerekli kursları alıp ilerlemekteyim. Aynı
          zamanda hafta sonları ingilizce kurslarına katılarak dil becerilerimi
          geliştirmekteyim. Frontend geliştirme yolculuğum boyunca HTML, CSS ve
          JavaScript gibi temel web teknolojilerini öğrendim ve bunları çeşitli
          projelerde uyguladım. Ayrıca, React gibi modern JavaScript
          kütüphanelerini ve framework'lerini de öğrendim ve bu teknolojilerle
          basit düzeyden ileri seviyeye kadar uygulamalar geliştirdim. Hedefim,
          bu teknik becerilerimi kullanarak Frontend Developer olarak çalışmak
          ve sektördeki yeni teknolojileri öğrenerek kendimi sürekli
          geliştirmektir.
        </p>
      </div>
    </div>
  );
};

export default About;
