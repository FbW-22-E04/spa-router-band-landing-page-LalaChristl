import { NavLink } from "react-router-dom";
// import Logo from '../images/logo2.png'
function Header() {
  return (
    <div>
      <NavLink className='link' activeclassname="active" to="/" end>
       {/* <img className = 'logo' src={Logo} alt="logo" /> */}
       <h1>A Tribe Called Quest</h1>
      </NavLink>

      <ul className="nav-bar">
        <NavLink className='link' to="/q-tip">
          <li>QTIP</li>
        </NavLink>

        <NavLink className='link' to="/ali-shaheed">
          <li>Ali Shaheed Muhammad</li>
        </NavLink>

        <NavLink className='link' to="/jarobi-white">
          <li>Jarobi White</li>
        </NavLink>

        <NavLink className='link' to="/phife-dawg">
          <li>Phife Dawg</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
