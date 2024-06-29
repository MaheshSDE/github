import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  state = {activeStatus: false}

  onClickMenuButton = () => {
    const {activeStatus} = this.state
    this.setState({activeStatus: !activeStatus})
  }

  /* onClickLink = () => {
    this.setState({color: true})
  } */

  render() {
    const {activeStatus} = this.state
    /* const cssStylingLink = color ? 'act-style-link' : '' */

    return (
      <div className="container">
        <nav className="header-container">
          <Link to="/" className="heading-nav-link">
            <h1 className="header-heading">Github Profile Visualizer</h1>
          </Link>

          <button
            className="menu-button"
            type="button"
            onClick={this.onClickMenuButton}
          >
            <img
              src="https://res.cloudinary.com/ddsn9feta/image/upload/v1718691523/menu_l33xs7.png"
              alt="menu"
              className="menuSize"
            />
          </button>
          <ul className="items-nav">
            <Link to="/" className="item-nav-link" onClick={this.onClickLink}>
              <li>Home</li>
            </Link>
            <Link to="/repositories" className="item-nav-link">
              <li>Repositories</li>
            </Link>
            <Link to="/analysis" className="item-nav-link">
              <li>Analysis</li>
            </Link>
          </ul>
        </nav>
        {activeStatus && (
          <ul className="nav-items-container">
            <Link to="/" className="item-link">
              <li>Home</li>
            </Link>
            <Link to="/repositories" className="item-link">
              <li>Repositories</li>
            </Link>
            <Link to="/analysis" className="item-link">
              <li>Analysis</li>
            </Link>
          </ul>
        )}
      </div>
    )
  }
}
export default Header
