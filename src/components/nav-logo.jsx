import NavLogo from "../../public/Logo.svg";

const Logo = () => {
  return (
    <div className="logo shads1 fixed z-50 top-2 left-4 logo-animation">
      <img className="w-36 h-36 brightness-105" src={NavLogo} alt="" />
    </div>
  );
};

export default Logo;
