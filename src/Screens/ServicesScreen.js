import { Link } from "react-router-dom"

export default function ServicesScreen() {
    return (
        <body>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark to-front">
                <div class="container px-5">
                    <Link className='navbar-brand' to="/">Sheppert Enterprises</Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><Link class="nav-link" aria-current="page" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                        <li class="nav-item"><Link class="nav-link active" to="/services">Services</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/metamask">MetaMask</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <!-- Side navigation --> */}
            <div class="sidenav" id="category-list">
                {/* <br><br><br> */}
                <div className="sidenav-text">
                    <a href="#Crypto" className="sidenav-text">Crypto</a>
                    <a href="#ArtificialIntelligence">Artificial Intelligence</a>
                    <a href="#GeneralTechStack">General Tech Stack</a>
                </div>

            </div>
        
            {/* <!-- Page content --> */}
            <div class="main" data-bs-spy="scroll" data-bs-target="#category-list" data-bs-smooth-scroll="true" tabindex="0">

                {/* <!-- Features section--> */}
                <section class="py-5 border-bottom" id="features">

                    <div class="row justify-content-center">
                        <div class="col-2">
                        <h1 id="Crypto">Crypto</h1>
                        </div>
                    </div>

                    <div class="container px-5 my-5">
                        <div class="row gx-5 pb-5">
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-currency-bitcoin"></i></div> --> */}

                                <h2 class="h4 fw-bolder">Dogeball</h2>
                                <ul>
                                    <li>Engineered the blockchain code for this multiplayer NFT video game</li>
                                    <li>Built a novel Eliptical Digital Curve Signature method</li>
                                    <li>Built a novel way for people to whitelist securely for free</li>
                                </ul>
                                <a class="text-decoration-none" href="https://dogeball.game/">
                                    Dogeball
                                </a>
                            </div>
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-brightness-high"></i></div> --> */}
                                <h2 class="h4 fw-bolder">Lazy 8 Yacht Club</h2>
                                <ul>
                                    <li>Integrated IPFS and all dynamics for the Lazy 8 Yacht Club Launch</li>
                                    <li>Built the world supporting l8 behind the blockchain</li>
                                    <li>A huge NFT drop in the yachting world that has been all over the news</li>
                                </ul>
                                <a class="text-decoration-none" href="https://www.l8yachtclub.io/">
                                    Lazy 8 Yacht Club
                                </a>
                            </div>

                            <div class="col-lg-4">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-stack"></i></div> --> */}
                                <h2 class="h4 fw-bolder">Fever Dream Friends NFT</h2>
                                <ul>
                                    <li>Building the blockchain code backing this intensely designed crypto project</li>
                                    <li>An NFT project partnered with several big brands, Fever-Dream Friends exists to bring people's dreams to life</li>
                                </ul>
                                <a class="text-decoration-none" href="https://feverdreamfriends.io/">
                                    Fever Dream Friends
                                </a>
                            </div>
                        </div>

                        <div class="row gx-5 pb-5">
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-currency-bitcoin"></i></div> --> */}
                                <h2 class="h4 fw-bolder">OmniLegion NFT</h2>
                                <ul>
                                    <li>Wrote and deployed the smart contract used for OmniLegion in Solidity</li>
                                    <li>Completed IPFS integration</li>
                                    <li>Created minting website in React</li>
                                    <li>Made $150,000 for the company in the first hour</li>
                                </ul>
                                <a class="text-decoration-none" href="https://opensea.io/collection/omni-legion-2">
                                    OmniLegion Collection
                                </a>
                            </div>
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-brightness-high"></i></div> --> */}
                                <h2 class="h4 fw-bolder">PolarPals NFT</h2>
                                <ul>
                                    <li>Wrote and deployed the smart contract used for PolarPals in Solidity</li>
                                    <li>Completed IPFS integration</li>
                                    <li>Made $1,200,000 for the company</li>
                                </ul>
                                <a class="text-decoration-none" href="https://opensea.io/collection/polar-pals-bobsledding">
                                    Polar Pals Collection
                                </a>
                            </div>
                            <div class="col-lg-4">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-stack"></i></div> --> */}
                                <h2 class="h4 fw-bolder">VURG</h2>
                                <p>Hired on as a consulting advisor to help with the economics of the coming P2P crypto network Vurg and the sister company that does celebrity NFTs</p>
                                <a class="text-decoration-none" href="https://vurg.com/about-us">
                                    VURG
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-3">
                        <h1 id="ArtificialIntelligence">Artificial Intelligence</h1>
                        </div>
                    </div>

                    <div class="container px-5 my-5">
                        <div class="row gx-5 pb-5">
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-currency-bitcoin"></i></div> --> */}
                                <h2 class="h4 fw-bolder">Apollo Crypto</h2>
                                <p>Market making for Apollo INU. Building AI to efficiently keep crypto markets liquid on centralized exchanges.</p>
                                <a class="text-decoration-none" href="https://www.apollocrypto.org/">
                                    Apollo Crypto
                                </a>
                            </div>
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-brightness-high"></i></div> --> */}
                                <h2 class="h4 fw-bolder">Top Flight Apps</h2>
                                <p>Helped engineer a fintech solution for various tech projects looking to integrate finance into their mobile apps</p>
                                <a class="text-decoration-none" href="https://topflightapps.com/">
                                    Top Flight Apps
                                </a>
                            </div>
                            <div class="col-lg-4">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-stack"></i></div> --> */}
                                <h2 class="h4 fw-bolder">Upwork</h2>
                                <p>I have developed hundreds of trading bots for various firms through the freelancing site upwork.com that are trading different portfolios automatically across the market today. Overtime I have maintained a 5-star rating and have recieved the "top-rated" award.</p>
                                <a class="text-decoration-none" href="#!">
                                    Upwork Profile
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-3">
                        <h1 id="GeneralTechStack">General Tech Stack</h1>
                        </div>
                    </div>

                    <div class="container px-5 my-5">
                        <div class="row gx-5 pb-5">
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-currency-bitcoin"></i></div> --> */}
                                <h2 class="h4 fw-bolder">Friendemic</h2>
                                <p>Built web Scrapers</p>
                            </div>
                            <div class="col-lg-4">
                                {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-stack"></i></div> --> */}
                                <h2 class="h4 fw-bolder">Financial Derivative Optimization</h2>
                                <p>Stock option greek analysis, futures hedging, mathematical optimization.</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            {/* <!-- Footer--> */}
            <footer class="py-5 bg-dark footer-rel">
                <div class="container px-5"><p class="m-0 text-center text-white">Copyright &copy; Sheppert Enterprises LLC 2022</p></div>
            </footer>
        </body>
    )
}

