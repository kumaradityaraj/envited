import "./index.css";
import logo from "../../public/logo.png";
import envited from "../../public/envited.png";
import left from "../../public/Left.png";
import middle from "../../public/Middle.png";
import right from "../../public/Right.png";

const Landing = () => {
  return (
    <div className="background">
      <div className="navBar">
        <img className="logo" src={logo} />
        <img className="envited" src={envited} />
        <div className="Login">Log In</div>;
      </div>

      <div className="Facebook">
        <h1>
          Facebook events <br /> without Facebook.
        </h1>
      </div>

      <div className="Line">
        <h2>
          Easily host and share events with your <br />
          friends across any social media.
        </h2>
      </div>

      <div>
        <div className="Event">🎉Create my next event</div>;
      </div>

      <div className="imagess">
        <img className="left" src={left} />
        <img className="middle" src={middle} />
        <img className="right" src={right} />
      </div>
    </div>
  );
};

export default Landing;
