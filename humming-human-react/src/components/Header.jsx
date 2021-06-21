import './style/Header.css';

const Header = () => {
  return (
    <header className='Header'>
      <div class='LogoTitle'>
        <h1 className='h1-style'>HummingHuman</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href='default.asp'>Home</a>
          </li>
          <li>
            <a href='news.asp'>Fresh</a>
          </li>
          <li>
            <a href='contact.asp'>Random</a>
          </li>
          <li>
            <a href='about.asp'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
