import './style/Header.css';


const Header = () => {
  return (
    
    <header className="Header">
        <div class="LogoTitle">
        <img class = "logo" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Open_Source_Initiative_keyhole.svg/1024px-Open_Source_Initiative_keyhole.svg.png" />
        <h1 class="h1-style">HummingHuman</h1>
        <img class = "logo" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Open_Source_Initiative_keyhole.svg/1024px-Open_Source_Initiative_keyhole.svg.png" />
        </div>
        <nav>
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">Fresh</a></li>
                <li><a href="contact.asp">Random</a></li>
                <li><a href="about.asp">Contact</a></li>
              </ul>
            </nav>

    </header>
    
  );
};
export default Header;
