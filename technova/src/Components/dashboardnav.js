import React from 'react'

const Dashboardnav = () => {

  return (
    <>
    <section className="navbar-bg dash-nav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand dashnav-brand" href="#">
              Technova 5.0
            </a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link dashnav-link" aria-current="page" href="#">
                    <img src="../../../images/user.png" className="userimg"/>
                    User
                  </a>
                </li>
              </ul>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Dashboardnav