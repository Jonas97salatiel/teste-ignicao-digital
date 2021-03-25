import { ReactComponent as Logo } from '../src/assets/Brand.svg'
import { ReactComponent as Home } from '../src/assets/home-icon.svg'
import { ReactComponent as ArrowDown } from '../src/assets/chevron-down-icon.svg'
import { ReactComponent as Email } from '../src/assets/mail-icon.svg'
import { ReactComponent as Message } from '../src/assets/message-square-icon.svg'
import { ReactComponent as Check } from '../src/assets/check-square-icon.svg'
import { ReactComponent as Calendar } from '../src/assets/calendar-icon.svg'
import { ReactComponent as Star } from '../src/assets/star.svg'
import { ReactComponent as Bell } from '../src/assets/bell.svg'
import { ReactComponent as Search } from '../src/assets/search.svg'

import userImg from '../src/assets/user.png'

import './App.css';


function App() {
  return (

    <section className="App">
      <div  className="menu-vertical-section">
        <div className="menu-vertical">

          <Logo className="menu-vertical-logo" />

          <div className="area-selection">
            <div>
              <Home className="area-selection-home" />
              <h3>Área do cliente</h3>
            </div>
            <ArrowDown />
          </div>

          <div className="menu-vertical-apps">
            <h3 className="menu-vertical-apps-title">APPS</h3>

            <ul className="list-apps">
              <li><Email /> <h5>Email</h5></li>
              <li><Message /> <h5>Conversar</h5></li>
              <li><Check /> <h5>Todo</h5></li>
              <li><Calendar /> <h5>Calendário</h5></li>
            </ul>
          </div>


        </div>
      </div>

      <div className="dashboard">

        <div className="dashboard-navbar">
          <div className="dashboard-navbar-icons">
            <Check />
            <Message />
            <Email />
            <Calendar />
            <Star />

          </div>

          <div className="dashboard-navbar-infos">
            <Bell />
            <Search />

            <div className="dashboard-navbar-infos-user">
              <div >
                <h3>Maria Elza</h3>
                <h5>Cliente VIP</h5>
              </div>
              <img src={userImg} alt="User" />
            </div>
          </div>

        </div>

      </div>



    </section >

  );
}

export default App;
