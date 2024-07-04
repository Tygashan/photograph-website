import "./Service.css";
import indian from "./indian.webp"
import outwin from "./outwin.jfif"
import toa from "./toa.jpg"
import Footer from "./Footer";




const Service = () => {
  return (
    <div>
      <div className="Service">
        <div className="first">
          <div className="pic">
            <img src={indian} alt="ceo" id="kichwa" />
          </div>
          <div className="Offered">
            <h1>We take pride on tadition </h1>
            <p>we go to differents ceremonies and offer our assistance is mostly appreciated</p>
          </div>
        </div>
        <div className="second">
          <div className="pic">
            <img src={outwin} alt="ceo" id="head" />
          </div>
          <div className="Offered">
            <h1>portraits</h1>
            <p>no matter the circumstances of gender or color</p>
          </div>
        </div>
        <div id="third">
          <div className="pic">
            <img src={toa} alt="ceo" id="head" />
          </div>
          <div className="Offered">
            <h1>events</h1>
            <p>Business deals cant pass us by we still offer the services</p>
          </div>
        </div>
        <div className="reviews">
          <h2>wedding review:</h2>
          <p>the photographers were good they offer quality pictures i give them a four star</p>
          <h3>portraits:</h3>
          <p>never thought in portraitsi would look a little bit better than in person</p>
          <h4>Events:</h4>
          <p> during the meeting no sound disturbamce they didnt just offer cameras but instruments to be used in the meeting</p>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Service;
