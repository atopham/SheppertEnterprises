import { Link } from "react-router-dom"

export default function HomeScreen() {
    return (
        <body>
        {/* <!-- Responsive navbar--> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
                <a class="navbar-brand" href="#!">Sheppert Enterprises</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/services">Services</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/metamask">MetaMask</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Header--> */}
        <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">Sheppert Enterprises LLC</h1>
                            <p class="lead text-white-50 mb-4">Quickly get your blockchain, artificial intelligence, machine learning, and general software solutions.</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                <Link className="btn btn-outline-light btn-lg px-4" to="/about">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* <!-- Features section--> */}
        <section class="py-5 border-bottom" id="features">

            <div class="row justify-content-center">
                <div class="col-2">
                  <h1>What We Do</h1>
                </div>
            </div>

            <div class="container px-5 my-5">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        {/* <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div> --> */}
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-currency-bitcoin"></i></div>

                        <h2 class="h4 fw-bolder">Crypto Projects</h2>
                        <ul>
                            <li>NFT Launch</li>
                            <li>Coins</li>
                            <li>Intense payment platforms and dynamics</li>
                        </ul>
                        <Link class="text-decoration-none" to="/services#Crypto">
                            Past Crypto Projects
                            <i class="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-brightness-high"></i></div>
                        <h2 class="h4 fw-bolder">Artificial Intelligence</h2>
                        <ul>
                            <li>Machine Learning</li>
                            <li>Financial Trading Bots</li>
                            <li>Financial Machine Learning and optimization in different markets, stocks, derivatives, FTX, crypto</li>
                        </ul>
                        <Link class="text-decoration-none" to="/services#ArtificialIntelligence">
                            Past AI Projects
                            <i class="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                    <div class="col-lg-4">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi-stack"></i></div>
                        <h2 class="h4 fw-bolder">General Tech Stack Projects</h2>
                        <p>Any general tech stack project under the sun from websites, to web apps, to data analytics</p>
                        <Link class="text-decoration-none" to="/services#GeneralTechStack">
                            Past General Projects
                            <i class="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Testimonials section--> */}
        <section class="py-5 border-bottom">
            <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bolder">Customer testimonials</h2>
                    <p class="lead mb-0">Our customers love working with us</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        {/* <!-- Testimonial 1--> */}
                        <div class="card mb-4">
                            <div class="card-body p-4">
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div class="ms-4">
                                        <p class="mb-1">"Alex is extremely knowledgeable and I look forward to working with him soon. I scheduled a 60 minute consultation where he answered every question I had in great detail. He outlined the risks to consider before moving on. He provided me with multiple different options with different prices to meet my needs. I got exactly what I wanted on the first delivery. No revisions needed."</p>
                                        <div class="small text-muted">- 60 minute consultation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial 2--> */}
                        <div class="card mb-4">
                            <div class="card-body p-4">
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div class="ms-4">
                                        <p class="mb-1">"Very diligent, intelligent, and capable developer / data scientist. An asset to any team. Thank you Alex!"</p>
                                        <div class="small text-muted">- Algo Trading Strategy Development</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial 3--> */}
                        <div class="card mb-4">
                            <div class="card-body p-4">
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div class="ms-4">
                                        <p class="mb-1">"Great person to work with. Will use him on future projects. Gave me exactly what I asked for."</p>
                                        <div class="small text-muted">- Crypto Trading Bot</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial 4--> */}
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div class="ms-4">
                                        <p class="mb-1">"Alex was quick to respond to all types of communication and checked in with me periodically to make sure I was satisfied with the deliverables. Great job overall."</p>
                                        <div class="small text-muted">- Extract text from PDF and put into JSON</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light py-5">
            <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                    <h2 class="fw-bolder">Get in touch</h2>
                    <p class="lead mb-0">We'd love to hear from you</p>
                    {/* <br> */}
                    <h3>Contact us at sheppertenterprises@gmail.com</h3>
                </div>
            </div>
        </section>

        {/* <!-- Footer--> */}
        <footer class="py-5 bg-dark">
            <div class="container px-5"><p class="m-0 text-center text-white">Copyright &copy; Sheppert Enterprises LLC 2022</p></div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>

        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
    )
}