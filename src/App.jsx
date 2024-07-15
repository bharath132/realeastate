import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolour] = useState("active");
  const [color1, setcolour1] = useState("");
  function HndleColor() {
    setcolour1("");
    setcolour("active");
  }
  function HndleColor1() {
    setcolour("");
    setcolour1("active");
  }
  return (
    <>
      <nav>
        <img className="logo" src="src/Vasantha_Maaligai_CO.png" alt="" />
        <ul>
          <li className={color} onClick={HndleColor}>
            HOME
          </li>
          <li className={color1} onClick={HndleColor1}>
            BOOK A HOME
          </li>
        </ul>
      </nav>
      <div className="book">
        <i class="fa-solid fa-house"></i>
        <a
          href="https://docs.google.com/forms/d/1GAqasg_Qdp1j5nYy5SZelo4qc_HMR5xyR1rh1Z1EMfY/edit?usp=drivesdk"
          target="_blank"
        >
          Book
        </a>
      </div>
      <div className="banner_container">
        <div className="overlay"></div>
        <div className="banner_title">
          <h1>VASANTHA MAALIGAI & CO</h1>
          <h2>REALESTATE</h2>
        </div>
        <p>
          At X-Life RP Realestate, we specialize in providing secure and
          reliable storage solutions tailored to the unique needs of GTA V
          Roleplay characters. Whether you're a small-time entrepreneur looking
          to store valuable inventory or a seasoned criminal seeking a discreet
          hideout for your ill-gotten gains, our range of storage containers
          offers the perfect solution.
        </p>
      </div>
      <div className="About_Container">
        <h1>
          About <span>Us</span>{" "}
        </h1>
        <div className="About_container-content">
          <p>
            Welcome to <span>X-Life RP Realestate!</span> <br />
          </p>
          <p>
            At X-Life RP Realestate, we specialize in providing secure and
            reliable storage solutions tailored to the unique needs of GTA V
            Roleplay characters. Whether you're a small-time entrepreneur
            looking to store valuable inventory or a seasoned criminal seeking a
            discreet hideout for your ill-gotten gains, our range of storage
            containers offers the perfect solution.dawdwdawdawa
          </p>
        </div>
        <div className="owners_container">
          <div className="owners">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt=""
            />
            <div className="owner-desc">
              <h2>CO-BOSS</h2>
              <p>Name : Rock D Xebec</p>
              <p>PH : 333-444</p>
            </div>
          </div>
          <div className="owners">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt=""
            />
            <div className="owner-desc">
              <h2>BOSS</h2>
              <p>Name : Eren</p>
              <p>PH : 333-444</p>
            </div>
          </div>
          <div className="owners">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              alt=""
            />
            <div className="owner-desc">
              <h2>CO-BOSS</h2>
              <p>Name : Market Raja</p>
              <p>PH : 333-444</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Price_Container">
        <h1>
          Realestate <span>Catalogue</span>{" "}
        </h1>
        <div className="price_card_container">
          <div className="Price_card">
            <img
              src="https://blueskystorage.ca/wp-content/uploads/2023/03/BSS-Slider-ShippingContainer-1-650x360.jpg.webp"
              alt=""
            />
            <div className="Price_card-desc">
              <h1>Container Storage</h1>
              <h2>Price : $1000000</h2>
              <button>BOOK</button>
            </div>
          </div>
          <div className="Price_card">
            <img
              src="https://blueskystorage.ca/wp-content/uploads/2023/03/BSS-Slider-ShippingContainer-1-650x360.jpg.webp"
              alt=""
            />
            <div className="Price_card-desc">
              <h1>Container Storage</h1>
              <h2>Price : $1000000</h2>
              <button>BOOK</button>
            </div>
          </div>
        </div>
      </div>
      <div className="locations">
        <h1>
          {" "}
          Realestate <span>Locations</span>
        </h1>
        <div className="map">
          <img src="src/assets/GTAV_ATLUS_8192x8192.png" alt="" />
        </div>
      </div>
      <footer>
        <div className="footer_tiltle">

      <h1>VASANTHA MAALIGAI & CO <br /> REALESTATE</h1>
        </div>

          
          <div className="footer-content">
            <div className="co-1">
            <p>DISCORD : https://discord.gg/KJnpYga2</p>
            <p>LOCATION : https://discord.gg/KJnpYga2</p>

            </div>
            <div className="co-2">

            <p>CONTANT : https://discord.gg/KJnpYga2</p>
            <p>EMAIL : https://discord.gg/KJnpYga2</p>
            </div>
          </div>

      </footer>
    </>
  );
}

export default App;
