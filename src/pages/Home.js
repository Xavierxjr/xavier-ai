import React from 'react'
import homeImage from "./images/home.jpg"
import anz from "./images/anz-logo.jpg"
import bnz from "./images/bnz.jpg"
import asb from "./images/asb.png"
import news from "./images/NZH-article.jpg"
import "./Home.css"

function Home() {
    return (
        <main>
            <section class="py-3 text-center container"
                style={{
                    minWidth: "100%",
                    backgroundImage: `url(${homeImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    verticalAlign: "middle",
                    zIndex: "-1",
                }}>
                <div class="row py-lg-5" style={{ textAlign: "center" }}>
                    <div class="col-lg-6 col-md-8 mx-auto"
                    >
                        <h1 class="fw-light" style={{ fontFamily: "Segoe", fontStyle: "italic", marginTop: "40px" }}>Welcome to Student Budgeting Rewards Website!</h1>
                        <p class="lead text-muted" style={{ fontFamily: "Segoe", marginTop: "30px" }}>How are you today? Try some functions below!</p>
                        <p style={{ marginTop: "30px" }}>
                            <a
                                href="./CsvReader"
                                class="btn btn-primary my-2"
                                style={{ marginRight: "40px" }}
                            >Analyse files</a>
                            <a
                                href="./Rewards"
                                class="btn btn-secondary my-2"
                                style={{ marginLeft: "40px" }}
                            >Exchange rewards</a>
                        </p>
                    </div>
                </div>
            </section>

            <div class="album py-5 bg-light"
                style={{
                    zIndex: "-1",
                }}>
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <div style={{ textAlign: "center" }}>
                            <div class="card shadow-sm" style={{ overflow: "hidden" }}>
                                <a href="https://tools.anz.co.nz/foreign-exchange/fx-rates/" target="_blank" >
                                    <img alt="anz" src={anz} className="anz" />
                                </a>
                                <div class="card-body">
                                    <p class="card-text" style={{ fontFamily: "serif", fontSize: "23px", fontWeight: "bold" }}>Check the exchange rates through ANZ</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginLeft: "180px", textAlign: "center" }}>
                            <div class="card shadow-sm" style={{ overflow: "hidden" }}>
                                <a href="https://www.bnz.co.nz/personal-banking/international/exchange-rates" target="_blank" >
                                    <img alt="bnz" src={bnz} className="bnz" />
                                </a>
                                <div class="card-body">
                                    <p class="card-text" style={{ fontFamily: "serif", fontSize: "23px", fontWeight: "bold" }}>Check the exchange rates through BNZ</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "40px", marginLeft: "330px", textAlign: "center" }}>
                            <div class="card shadow-sm" style={{ overflow: "hidden" }}>
                                <a href="https://www.asb.co.nz/foreign-exchange/foreign-exchange-rates.html" target="_blank" >
                                    <img alt="asb" src={asb} className="asb" />
                                </a>
                                <div class="card-body">
                                    <p class="card-text" style={{ fontFamily: "serif", fontSize: "23px", fontWeight: "bold" }}>Check the exchange rates through ASB</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "40px", marginLeft: "260px", textAlign: "center" }}>
                            <div class="card shadow-sm" style={{ overflow: "hidden" }}>
                                <a href="https://www.nzherald.co.nz/" target="_blank" >
                                    <img alt="news" src={news} className="news" />
                                </a>
                                <div class="card-body">
                                    <p class="card-text" style={{ fontFamily: "serif", fontSize: "23px", fontWeight: "bold" }}>Watch some New Zealand news</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <footer style={{
                clear: "both",
                height: "85px",
                width: "100%",
                paddingTop: "30px",
                backgroundColor: "#333333",
                color: "#ffffff",
                textAlign: "center",
                position: "fixed",
                bottom: "0",
            }}>
                <p>© 2021 Xavier.ai. Unitec Capstone Project</p>
            </footer>
        </main>

        // <div>
        //     <section style={{
        //         position: "absolute",
        //         top:"80px",
        //         left:"0",
        //         minWidth:"100%",
        //         minHeight:"100%",
        //         width: "100%",
        //         height: "100%",
        //         backgroundImage: `url(${homeImage})`,
        //         backgroundRepeat: "no-repeat",
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //         verticalAlign: "middle",
        //         zIndex: "-1",
        //     }}>
        //         <div className='container'
        //             style={{
        //                 textAlign: "center",
        //             }}>
        //             <h1 style={{
        //                 marginTop: "80px",
        //                 margin: "30px",
        //                 position: "center",
        //                 fontStyle: "italic",
        //                 fontFamily: "cursive",
        //                 fontSize: "47px",
        //                 fontWeight: "bold",
        //             }}>Welcome to Student Budgeting rewards App</h1><br />
        //         </div>

        //         {/* Left side form */}
        //         <div className="container" style={{
        //             float: "left",
        //             marginTop: "15px",
        //             width: "500px",
        //             paddingLeft: "330px",
        //         }}>
        //             {/* News table */}
        //             <div className="news"
        //                 style={{
        //                     backgroundImage: "none",
        //                     textAlign: "left",
        //                     boxSizing: "content-box",
        //                     backgroundColor: "#f2f2f2",
        //                     width: "490px",
        //                     height: "170px",
        //                     borderRadius: "12% / 55%",
        //                     border: "groove 1em #3399ff",
        //                 }}>
        //                 <div>
        //                     <h2 style={{
        //                         paddingLeft: "32px",
        //                         padding: "25px",
        //                         fontFamily: "sans-serif",
        //                     }}>What news in New Zealand?</h2>
        //                     <a href="https://www.nzherald.co.nz/"
        //                         target="_blank"
        //                         style={{
        //                             padding: "60px",
        //                             fontSize: "20px",
        //                         }}>
        //                         Watch some news
        //                     </a>
        //                 </div>
        //             </div>

        //             {/* Exchange rate table */}
        //             <div className="exchangRate"
        //                 style={{
        //                     backgroundImage: "none",
        //                     textAlign: "left",
        //                     boxSizing: "content-box",
        //                     backgroundColor: "#f2f2f2",
        //                     width: "490px",
        //                     height: "300px",
        //                     marginTop: "70px",
        //                     borderRadius: "12% / 55%",
        //                     border: "groove 1em #3399ff",
        //                 }}>
        //                 <div>
        //                     <h2 style={{
        //                         paddingLeft: "32px",
        //                         padding: "25px",
        //                         fontFamily: "sans-serif",
        //                     }}>Check exchange rate</h2>
        //                     <p style={{
        //                         paddingLeft: "60px",
        //                         fontSize: "18px",
        //                     }}>Check through?</p>
        //                     <a href="https://tools.anz.co.nz/foreign-exchange/fx-rates/"
        //                         target="_blank"
        //                         style={{
        //                             padding: "60px",
        //                             fontSize: "18px",
        //                         }}>
        //                         ANZ
        //                     </a><br /><br />
        //                     <a href="https://www.bnz.co.nz/personal-banking/international/exchange-rates"
        //                         target="_blank"
        //                         style={{
        //                             padding: "60px",
        //                             fontSize: "18px",
        //                         }}>
        //                         BNZ
        //                     </a><br /><br />
        //                     <a href="https://www.asb.co.nz/foreign-exchange/foreign-exchange-rates.html"
        //                         target="_blank"
        //                         style={{
        //                             padding: "60px",
        //                             fontSize: "18px",
        //                         }}>
        //                         ASB
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Right side form */}
        //         <div className="container" style={{
        //             float: "right",
        //             marginTop: "15px",
        //             width: "500px",
        //             paddingRight: "850px",
        //         }}>
        //             {/* News table */}
        //             <div className="news"
        //                 style={{
        //                     backgroundImage: "none",
        //                     textAlign: "left",
        //                     boxSizing: "content-box",
        //                     backgroundColor: "#f2f2f2",
        //                     width: "490px",
        //                     height: "500px",
        //                     borderRadius: "12% / 55%",
        //                     border: "groove 1em #3399ff",
        //                 }}>
        //                 <div>
        //                     <h2 style={{
        //                         paddingLeft: "32px",
        //                         padding: "25px",
        //                         fontFamily: "sans-serif",
        //                     }}>Try to manage you budget!</h2>
        //                     <p className="tutorial"
        //                         style={{
        //                             padding: "60px",
        //                             fontSize: "22px",
        //                             marginTop: "-60px",
        //                         }}>
        //                         Log into your online bank,<br />
        //                         export a duration of the transactions,<br />
        //                         download and upload here!</p>
        //                     <a className="toReader"
        //                         href="./csvReader"
        //                         style={{
        //                             padding: "60px",
        //                             fontSize: "20px",
        //                         }}>
        //                         Click here or select in the menu
        //                     </a><br /><br />
        //                     <a className="toSupport"
        //                         href="./support"
        //                         style={{
        //                             padding: "60px",
        //                             fontSize: "20px",
        //                         }}>
        //                         Or need help?
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //         
        // </div>
    );
}

export default Home
