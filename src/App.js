import "./App.css";
import logo from "./assets/images/logo without white bg.png";

function App() {
  return (
    <div>
      <div className="bgImage">
        <div style={{ display: "flex" }}>
          <div className="logo">
            <img src={logo} alt="pakjapan.co" className="logosize" />
          </div>
          <div class="topleft">
            <p>
              <p>
                <b>Pak Japan Foundation</b> {" "}
                it's all about Japan
              </p>
            </p>
          </div>
        </div>
        <div class="bottomleft">
          <p>
            We are sorry, the site is under maintenance. You are requested to
            contact us on WhatsApp No.
            <b>+92-322-945-1000</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
