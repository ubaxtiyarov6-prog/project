import "./header.css";
import logo from "./Logo.svg";
import rasm from "./Rasm.svg";

export default function Header() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <nav>
        <a href="">About Us</a>
        <a href="">cAREERS</a>
        <a href="">Services</a>
        <a href="">Blog</a>
        <a href="">Contact us</a>
      </nav>
      <img src={rasm} alt="Rasm" />
    </div>
  );
}
