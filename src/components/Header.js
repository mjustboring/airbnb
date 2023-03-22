import logo from '../images/airbnb-logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <h4 className="logo-text">airbnb</h4>
    </header>
  );
}

export default Header;
