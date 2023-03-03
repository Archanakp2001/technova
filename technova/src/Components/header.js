import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">

                        {/* ----- header left side ------- */}
                        <div className="col-12 col-lg-6 header-left-side justify-content-between align-items-center main-herosection-images">

                            <h1 className="display-2">Technova 5.0</h1>
                            <p className="main-hero-para">The heart of Insight, Technova.....
                                <br />
                                Technova has the power of knowledge, flavour of fun, attainment of experience and elation of victory. It has many competitions, games and itself can be measured as a fest. Let this heart connect with emotion and network with technologists.
                            </p>
                            <h4>Login to get Started...</h4>
                        </div>

                        {/* --------- header right side --------- */}
                        <div className="col-12 col-lg-6 header-right-side b-flex justify-content-between align-items-center">
                            <form className="fstyle">
                                <div className="mb-3">
                                    {/* <label for="exampleInputEmail1" className="form-label">Username</label> */}
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Username'/>
                                </div>
                                <div className="mb-3">
                                    {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                                </div>
                                <div className="mb-3 btn-2">
                                    <button type="submit" className="btn btn-primary" >Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header