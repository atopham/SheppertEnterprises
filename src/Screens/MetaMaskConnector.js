import React, { useState } from 'react';
import Web3 from 'web3';
import { Link } from 'react-router-dom';

function MetaMaskConnector() {
    const [account, setAccount] = useState("");
    const [balanceW, setBalanceW] = useState("");
    const [balanceE, setBalanceE] = useState(false);

    const getAccounts = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      .catch((e) => {
          console.error(e.message)
          return
      })
      if (accounts) {
          setAccount(accounts[0]);
      } else {
        console.log("nothing retrieved")
      }
    }

    const getBalance = async () => {
      try{
        let web3 = new Web3(window.ethereum);
        await web3.eth.getBalance(account).then(setBalanceW)
        let balE = web3.utils.fromWei(balanceW, 'ether');
        setBalanceE(balE);
      } catch {
        console.log("this method won't get the balance");
      }
    }

    // useEffect(() => {
    //     getAccounts();
    //     getBalance();
    // }, [balanceE])
    getAccounts();
    getBalance();

    return (
        <body>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <Link className='navbar-brand' to="/">Sheppert Enterprises</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><Link class="nav-link" aria-current="page" to="/">Home</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/services">Services</Link></li>
                            <li class="nav-item"><Link class="nav-link active" to="/metamask">MetaMask</Link></li>
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
                                <h1 class="display-5 fw-bolder text-white mb-2">MetaMask</h1>
                                <p class="lead text-white-50 mb-4">Login to MetaMask and see your ethereum balance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section>
                {/* <div className='card'>
                    <h3>{account}</h3>
                    <h4>{balanceE} ETH</h4>
                </div> */}
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="card mb-4">
                            <div class="card-body p-4">
                                <div class="d-flex">
                                    <div class="ms-4">
                                        {/* {balanceE ? (<p className="mb-1">The wallet with the address of {account} has an ethereum balance of {balanceE} ETH</p>) : (<p className="mb-1">Please login to MetaMask</p>)} */}
                                        <p className="mb-1">The wallet with the address of {account} has an ethereum balance of {balanceE} ETH</p>
                                        <div class="small text-muted"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>

            </section>

            {/* <!-- Footer--> */}
            <footer class="py-5 bg-dark footer-fix">
                <div class="container px-5"><p class="m-0 text-center text-white">Copyright &copy; Sheppert Enterprises LLC 2022</p></div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="js/scripts.js"></script>

            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </body>
    )
}

export default MetaMaskConnector;