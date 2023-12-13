import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
    const [data, setData] = useState(0);
    const [data2, setData2] = useState(0);
    const [data3, setData3] = useState(0);
    const [data4, setData4] = useState(0);
    const [data5, setData5] = useState(0);
    return (

        <>
            <Header />
            <div className="ho-main">
                <div className="container">
                    <div className="row">
                        {/* --Mortgage Calculator---- */}
                        {/* ---- */}
                        <div>
                            {/* <input type='range' className="less" min="0" max="100" step="10" value={data} onChange={(e)=>setData(e.target.value)}/>
<h3>{data}</h3> */}
                        </div>
                        <div className="col-md-3">
                            <h3 className="side-title mb-3 mt-4">Mortgage Calculator</h3>
                            <p className="paragraph">We've simplified our mortgage calculator to make it easier than ever to calculate your payment.</p>
                            <div className="">
                                <button className="side-button " type="button">Homes for Sale <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-hanging" class="svg-inline--fa fa-sign-hanging fa-fw icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M96 0c17.7 0 32 14.3 32 32V64l352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-352 0V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H32C14.3 128 0 113.7 0 96S14.3 64 32 64H64V32C64 14.3 78.3 0 96 0zm96 160H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"></path></svg></button>
                                <button className="side-button" type="button" role="tab">Mortgage Rates <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-percent" class="svg-inline--fa fa-badge-percent fa-fw icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM192 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM337 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L175 303c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L337 209z"></path></svg></button>
                                <button className="side-button" type="button">Get Pre-Approved <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-to-slot" class="svg-inline--fa fa-check-to-slot fa-fw icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M96 80c0-26.5 21.5-48 48-48H432c26.5 0 48 21.5 48 48V384H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48H64V416H512V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336z"></path></svg></button>
                                <button className="side-button" >For Agents & Lenders <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house-user" class="svg-inline--fa fa-house-user fa-fw icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className="icon" fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"></path></svg></button>
                            </div>
                        </div>

                        {/*---- Purchase Price--- */}
                        <div className="col-md-4">
                            <div className="light-background p-3">
                                <nav>
                                    <div className="nav nav-tabs d-flex flex-wrap justify-content-between " id="nav-tab" role="tablist">
                                        <button className="nav-link active background" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i class="fa fa-home" aria-hidden="true"></i></button>
                                        <button className="nav-link top-tab" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">FHA</button>
                                        <button className="nav-link top-tab" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">VA</button>
                                        <button className="nav-link top-tab" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">USDA</button>
                                    </div>
                                </nav>
                                <div className="tab-content mt-3" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"></div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                                </div>

                                <div className="bg-wt border radius ">
                                    <div className=" d-flex flex-wrap justify-content-between p-2">
                                        <h3 className="title">Purchase Price</h3>
                                        <h3 className="title">${data}</h3>
                                        {/* <h3 className="title">$1,260,000</h3> */}
                                    </div>

                                    <div className="mb-0 progress-main">
                                        <input type='range' className="less" min="0" max="75000" step="10" value={data} onChange={(e) => setData(e.target.value)} />
                                    </div>

                                </div>

                                {/* --Down Payment--- */}

                                <div className="border radius mt-3 bg-wt">
                                    <div className="d-flex flex-wrap justify-content-between p-2">
                                        <h3 className="title">Down Payment<span>0.0%</span></h3>
                                        <h3 className="title">${data2}</h3>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between p-2 bodercls">
                                        <div className="text-center down-pay-cls">
                                            <h3 className="persent">5%</h3>
                                            <h3 className="price">$63,000</h3>
                                        </div>
                                        <div className="text-center down-pay-cls">
                                            <h3 className="persent">5%</h3>
                                            <h3 className="price">$63,000</h3>
                                        </div>
                                        <div className="text-center down-pay-cls">
                                            <h3 className="persent">5%</h3>
                                            <h3 className="price">$63,000</h3>
                                        </div>

                                    </div>
                                    <div className="mb-0 progress-main">
                                        <input type='range' className="progress2" min="0" max="75000" step="10" value={data2} onChange={(e) => setData2(e.target.value)} />
                                    </div>
                                </div>

                                {/*-----Purchase---  */}

                                <div className="bg-wt border radius mt-3 mb-3 p-2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3 className="title mt-3">Interest Rate</h3>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex flex-wrap justify-content-between">
                                                <h3 className="title mt-3 ">6.75%</h3>
                                                <button className="btn btn-primary">+</button>
                                                <button className="btn btn-primary ml-1">-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ----year selectbox--- */}

                                <div className="bg-wt border radius p-2">
                                    <div className="">
                                        <div className="dropdown">
                                            <button className="dropdown-clss btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                2 years
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">1 years</a>
                                                <a className="dropdown-item" href="#">2 years</a>
                                                <a className="dropdown-item" href="#">3 years</a>
                                                <a className="dropdown-item" href="#">4 years</a>
                                                <a className="dropdown-item" href="#">5 years</a>
                                                <a className="dropdown-item" href="#">6 years</a>
                                                <a className="dropdown-item" href="#">7 years</a>
                                                <a className="dropdown-item" href="#">8 years</a>
                                                <a className="dropdown-item" href="#">9 years</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mt-2 main-title">Tax & Insurance</h3>
                                <div className="bg-wt border radius mb-3">
                                    <div className=" d-flex flex-wrap justify-content-between p-2 mb-3">
                                        <h3 className="title">Property Tax  <span className="sm-text ml-2 mt-1">0.6%</span></h3>
                                        <h3 className="title">${data3}</h3>
                                    </div>
                                    <div className="mb-0 progress-main">
                                        <input type='range' className="progress3" min="0" max="75000" step="10" value={data3} onChange={(e) => setData3(e.target.value)} />
                                    </div>

                                </div>

                                <div className="bg-wt border radius ">
                                    <div className="d-flex flex-wrap justify-content-between p-2">
                                        <h3 className="title">Insurance <span className="sm-text ml-2 mt-1">0.6%</span></h3>
                                        <h3 className="title">${data4}</h3>
                                    </div>
                                    <div className="mb-0 progress-main">
                                        <input type='range' className="progress4" min="0" max="75000" step="10" value={data4} onChange={(e) => setData4(e.target.value)} />
                                    </div>
                                </div>
                                <p className="mt-3 tax-cls"> • Tax & Insurance will adjust on price change • <span className="link-class">Lock</span></p>
                                <div className=" d-flex flex-wrap justify-content-between mt-3">

                                    <h3 className="main-title">PMI</h3>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                                <div className="bg-wt border radius">
                                    <div className=" d-flex flex-wrap justify-content-between p-2">
                                        <h3 className="title">Credit Score<span className="small-text">660-679</span></h3>
                                        <h3 className="title">${data5}</h3>
                                    </div>
                                    <div className="mb-0 progress-main">
                                        <input type='range' className="progress5" min="0" max="75000" step="10" value={data5} onChange={(e) => setData5(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --Monthly Payment-- */}
                        <div className="col-md-5">
                            <div className=" p-2 light-background">
                                <div className="d-flex flex-wrap justify-content-between mb-3">
                                    <h3 className="main-title">Monthly<br></br> Payment</h3>
                                    <h3 className="main-price">${data}</h3>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                <div className="side-progress">.</div> 
                                <div className="side-prog">.</div>
                                <div className="side-progre">.</div>
                                <div className="side-pr">.</div>
                                </div>
                              
                                <div className="d-flex flex-wrap justify-content-between mb-2">
                                    <ul className="ul-cls pl-0 ml-3">
                                        <li> <h3 className="title">Principal & Interest</h3></li>
                                    </ul>
                                    <h3 className="title"><b>${data}</b></h3>
                                </div>

                                <div className=" d-flex flex-wrap justify-content-between mb-2 ">
                                    <ul className="ul-cls1 pl-0 ml-3">
                                        <li> <h3 className="title">Property Tax</h3></li>
                                    </ul>
                                    <h3 className="title"><b>${data}</b></h3>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between mb-2 ">
                                    <ul className="ul-cls2 pl-0 ml-3">
                                        <li> <h3 className="title">Home Insurance</h3></li>
                                    </ul>
                                    <h3 className="title"><b>${data}</b></h3>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between mb-2 ">
                                    <ul className="ul-cls3 pl-0 ml-3">
                                        <li> <h3 className="title">Estimated PMI</h3></li>
                                    </ul>
                                    <h3 className="title"><b>${data}</b></h3>
                                </div>


                            </div>

                            <div className=" p-2 light-background mt-3">
                                <div className="d-flex flex-wrap justify-content-between mb-3">
                                    <h3 className="main-title">Loan</h3>
                                    <h3 className="main-price">${data}</h3>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between mb-3 ">
                                    <h3 className="title">Principal & Interest</h3>
                                    <h3 className="title"><b>${data}</b></h3>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between mb-3 ">
                                    <h3 className="title">Purchase Price</h3>
                                    <h3 className="title"><b>${data}</b></h3>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between mb-3 ">
                                    <h3 className="title">Down Payment<span className="smalltext">0.0%</span></h3>
                                    <h3 className="title"><b>${data}</b></h3>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between mb-3 ">
                                    <h3 className="title">Total Payments</h3>
                                    <h3 className="title"><b>${data}</b></h3>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default Home