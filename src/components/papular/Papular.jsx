import "./papular.css";
import lmage from "./lmage.svg";

export default function Papular() {
  return (
    <div>
      <h1>We help more than 1500 companies from all sectors</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
        suscipit tellus et pellentesque.
      </p>
      <div>
        <img src={lmage} alt="" />
        <h1>Business strategy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et,{" "}
        </p>
      </div>
    </div>
  );
}
