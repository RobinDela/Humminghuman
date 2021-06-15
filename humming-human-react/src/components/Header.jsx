import './style/Header.css';

const Header = () => {
  return (
    <header className='Header'>
      <div class='LogoTitle'>
        <img
          class='logo'
          src='https://www.canva.com/design/DAEhc6X7fsM/5k95y15pN4gXN6HE1k5ZtQ/view?utm_content=DAEhc6X7fsM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
          alt='Logo'
        />
        <h1 class='h1-style'>HummingHuman</h1>
        <img
          class='logo'
          src='https://www.canva.com/design/DAEhc6X7fsM/5k95y15pN4gXN6HE1k5ZtQ/view?utm_content=DAEhc6X7fsM&utm_campaign=designshare&utm_medium=link&utm_source=viewer'
          alt='Logo'
        />
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
