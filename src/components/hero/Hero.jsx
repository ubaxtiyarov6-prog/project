import "./hero.css";
import rasmm from "./Rasmm.svg";
import hero from "./Hero.svg";

export default function Hero() {
  return (
    <div>
      <h1>Prosper with our bespoke solutions</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique
      </p>
      <button>See our services</button>
      <h2>See All Services</h2>
      <p>Worked with 100+ Companies</p>
      <img src={rasmm} alt="Hero Image" srcset="" />
      <div>
        <img src={hero} alt="Hero Image" />
      </div>
    </div>
  );
}
