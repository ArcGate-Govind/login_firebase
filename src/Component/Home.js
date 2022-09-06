import React from 'react'


const Home = () => {
  let userData = JSON.parse(sessionStorage.getItem('userData'))

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      <div className='userdata'>
        <h1 className='text-center m-5 text-info'>All Register User</h1>
      </div>
      <div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Users</th>
            </tr>
          </thead>
          <tbody>
            {
              userData ? 
              userData.map((data) => {
                return (
                  <tr>
                    <td key={data.email}>{data.name}</td>
                  </tr>
                )
              }) : 'Loading'
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home