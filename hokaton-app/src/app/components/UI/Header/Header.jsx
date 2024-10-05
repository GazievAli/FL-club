import "./Header.css"

const Header = ({ header }) => {
  return ( 
    <header className="Header">
      <div className="container">
        <ul className="container__list">
          {
            header.navbar.map((el, index) => {
              return (
                <li key={ index }>{ el }</li>
              )
            })
          }
          <li className="active">test</li>
        </ul>
        <div className="input_field">
          <input />
        </div>
      </div>
    </header>
   );
}
 
export default Header;