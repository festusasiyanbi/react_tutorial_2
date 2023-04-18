import './App';

const Header = ({ title }) => {
  return (
    <div>
        <header>
            <p> { title }</p>
        </header>
    </div>
  )
}

Header.defaultProps = {
   title: "Grocery List"
}

export default Header;
