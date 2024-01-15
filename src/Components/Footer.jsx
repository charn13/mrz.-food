import React from 'react'

const Footer = () => {
  return (
    
    <section className="">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                    <div className="lc-block mb-3"><a className="navbar-brand" href="img/MR.-removebg-preview.png">
                            <img className="img-fluid me-1" src="img/MR.-removebg-preview.png" alt="my brand" width="58px" height="58px" lc-helper="image" />
                        </a></div>
                    <div className="lc-block">
                        <div editable="rich">

                            <p className="text-muted">© 2022 Acme, Inc</p>
                        </div>
                    </div>

                </div>
                <div className="col offset-md-2 mb-3">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <h4>Get Started</h4>
                        </div>
                    </div>
                   
                    <div className="lc-block small">
                      
                        <div editable="rich" className="footer-links-list">

                            <ul>
                                <li><a href="#">One Item</a> </li>
                                <li><a href="#">Second Item</a></li>
                                <li><a href="#">Third Item</a> </li>
                                <li><a href="#">Fourth Item</a> </li>
                            </ul>

                        </div>
                    </div>
                   
                </div>
                <div className="col mb-3">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <h4>About us</h4>
                        </div>
                    </div>
                   
                    <div className="lc-block small">
                        <div editable="rich" className="footer-links-list">

                            <ul>
                                <li><a href="#">Story</a> </li>
                                <li><a href="#">Work with us</a></li>
                                <li><a href="#">Blog</a> </li>
                                <li><a href="#">News</a> </li>
                            </ul>

                        </div>
                    </div>
                  
                </div>
                <div className="col mb-3">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <h4>Downloads</h4>
                        </div>
                    </div>
                   
                    <div className="lc-block small">
                        <div editable="rich" className="footer-links-list">

                            <ul>
                                <li><a href="#">First Element</a> </li>
                                <li><a href="#">Second Element</a> </li>
                                <li><a href="#">Third Element</a> </li>
                                <li><a href="#">Fourth Element</a> </li>
                            </ul>

                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer