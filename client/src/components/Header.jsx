import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { history } from '../store'
import { connect } from 'react-redux'
import ConnectModal from './ConnectModal'

const Header = (props) => {

  // default this to true if we're not linked
  const [connect, setConnect] = useState(false) // !props.profile.twitchLinked && !props.profile.ytLinked)

  // console.log(props.router)

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-header">
      <img src={require("../assets/lion.png")} width={50} height={50} />
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/creator">
              Creator Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewer">
            Viewer Dashboard
          </Link>
        </li>
        <li className="nav-item login-btn">
          <button onClick={() => setConnect(true)}>Connected Accounts</button>
        </li>
      </ul>
      <ConnectModal
        connectModal={connect}
        onConnect={setConnect}
        />
    </nav>
  );
}

// you still need to connect so that history updates
const mapStateToProps = (state) => {
  return {
    router: state.router,
    profile: state.reducers.profile
  }
}

export default connect(mapStateToProps)(Header)
