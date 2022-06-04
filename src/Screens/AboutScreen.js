import { Link } from "react-router-dom"

export default function AboutScreen() {
    return (
        <body>
        {/* <!-- Responsive navbar--> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
                <Link className='navbar-brand' to="/">Sheppert Enterprises</Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><Link class="nav-link" aria-current="page" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link active" to="/about">About</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/services">Services</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/metamask">MetaMask</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Header--> */}
        <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-evenly">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="py-5 border-bottom">
            <div class="container px-5 my-5 px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="card mb-4">
                            <div class="card-body p-4">
                                <div class="d-flex">
                                    <div class="ms-4">
                                        <p class="mb-1">Sheppert Enterprises is a Provo based tech startup focused on blockchain and financial technology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* <br><br><br><br><br><br><br><br><br><br><br><br> */}

        {/* <!-- Footer--> */}
        <footer class="py-5 bg-dark footer-fix">
            <div class="container px-5"><p class="m-0 text-center text-white">Copyright &copy; Sheppert Enterprises LLC 2022</p></div>
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
    )
}


