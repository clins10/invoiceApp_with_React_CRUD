import React from 'react'

export default function InvoicePreview() {
    return (
        <div className="main-container" id="container">
            <div className="overlay" />
            <div className="search-overlay" />
            {/*  BEGIN CONTENT AREA  */}
            <div id="content" className="main-content">
                <div className="layout-px-spacing">
                    <div className="page-header">
                        <nav className="breadcrumb-one" aria-label="breadcrumb">
                            <div className="title">
                                <h3>Preview</h3>
                            </div>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Apps</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Invoice</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">Preview</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="/">List</a></li>
                            </ol>
                        </nav>
                        <div className="toggle-switch">
                            <label className="switch s-icons s-outline  s-outline-secondary">
                                <input type="checkbox" defaultChecked className="theme-shifter" />
                                <span className="slider round">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx={12} cy={12} r={5} /><line x1={12} y1={1} x2={12} y2={3} /><line x1={12} y1={21} x2={12} y2={23} /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1={1} y1={12} x2={3} y2={12} /><line x1={21} y1={12} x2={23} y2={12} /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="row invoice layout-spacing">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="doc-container">
                                <div className="row">
                                    <div className="col-xl-9">
                                        <div className="invoice-container">
                                            <div className="invoice-inbox">
                                                <div id="ct" className>
                                                    <div className="invoice-00001">
                                                        <div className="content-section">
                                                            <div className="inv--head-section inv--detail-section">
                                                                <div className="row">
                                                                    <div className="col-sm-6 col-12 mr-auto">
                                                                        <div className="d-flex">
                                                                            <img className="company-logo" src="assets/img/cork-logo.png" alt="company" />
                                                                            <h3 className="in-heading align-self-center">Cork Inc.</h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 text-sm-right">
                                                                        <p className="inv-list-number"><span className="inv-title">Invoice : </span> <span className="inv-number">#0001</span></p>
                                                                    </div>
                                                                    <div className="col-sm-6 align-self-center mt-3">
                                                                        <p className="inv-street-addr">XYZ Delta Street</p>
                                                                        <p className="inv-email-address">info@company.com</p>
                                                                        <p className="inv-email-address">(120) 456 789</p>
                                                                    </div>
                                                                    <div className="col-sm-6 align-self-center mt-3 text-sm-right">
                                                                        <p className="inv-created-date"><span className="inv-title">Invoice Date : </span> <span className="inv-date">20 Aug 2020</span></p>
                                                                        <p className="inv-due-date"><span className="inv-title">Due Date : </span> <span className="inv-date">26 Aug 2020</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="inv--detail-section inv--customer-detail-section">
                                                                <div className="row">
                                                                    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center">
                                                                        <p className="inv-to">Invoice To</p>
                                                                    </div>
                                                                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info">
                                                                        <h6 className=" inv-title">Payment Info:</h6>
                                                                    </div>
                                                                    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                                                                        <p className="inv-customer-name">Jesse Cory</p>
                                                                        <p className="inv-street-addr">405 Mulberry Rd. Mc Grady, NC, 28649</p>
                                                                        <p className="inv-email-address">redq@company.com</p>
                                                                        <p className="inv-email-address">(128) 666 070</p>
                                                                    </div>
                                                                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1">
                                                                        <div className="inv--payment-info">
                                                                            <p><span className=" inv-subtitle">Bank Name:</span> <span>Bank of America</span></p>
                                                                            <p><span className=" inv-subtitle">Account Number: </span> <span>1234567890</span></p>
                                                                            <p><span className=" inv-subtitle">SWIFT code:</span> <span>VS70134</span></p>
                                                                            <p><span className=" inv-subtitle">Country: </span> <span>United States</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="inv--product-table-section">
                                                                <div className="table-responsive">
                                                                    <table className="table">
                                                                        <thead className>
                                                                            <tr>
                                                                                <th scope="col">S.No</th>
                                                                                <th scope="col">Items</th>
                                                                                <th className="text-right" scope="col">Qty</th>
                                                                                <th className="text-right" scope="col">Price</th>
                                                                                <th className="text-right" scope="col">Amount</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td>Calendar App Customization</td>
                                                                                <td className="text-right">1</td>
                                                                                <td className="text-right">$120</td>
                                                                                <td className="text-right">$120</td>
                                                                            </tr>
                                                                            {/* <tr>
                                                                                <td>2</td>
                                                                                <td>Chat App Customization</td>
                                                                                <td className="text-right">1</td>
                                                                                <td className="text-right">$230</td>
                                                                                <td className="text-right">$230</td>
                                                                            </tr> */}
                                                                          
                                                                        
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div className="inv--total-amounts">
                                                                <div className="row mt-4">
                                                                    <div className="col-sm-5 col-12 order-sm-0 order-1">
                                                                    </div>
                                                                    <div className="col-sm-7 col-12 order-sm-1 order-0">
                                                                        <div className="text-sm-right">
                                                                            <div className="row">
                                                                                <div className="col-sm-8 col-7">
                                                                                    <p className>Sub Total: </p>
                                                                                </div>
                                                                                <div className="col-sm-4 col-5">
                                                                                    <p className>$3155</p>
                                                                                </div>
                                                                                <div className="col-sm-8 col-7">
                                                                                    <p className>Tax Amount: </p>
                                                                                </div>
                                                                                <div className="col-sm-4 col-5">
                                                                                    <p className>$700</p>
                                                                                </div>
                                                                                <div className="col-sm-8 col-7">
                                                                                    <p className=" discount-rate">Discount : <span className="discount-percentage">5%</span> </p>
                                                                                </div>
                                                                                <div className="col-sm-4 col-5">
                                                                                    <p className>$10</p>
                                                                                </div>
                                                                                <div className="col-sm-8 col-7 grand-total-title">
                                                                                    <h4 className>Grand Total : </h4>
                                                                                </div>
                                                                                <div className="col-sm-4 col-5 grand-total-amount">
                                                                                    <h4 className>$3845</h4>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="inv--note">
                                                                <div className="row mt-4">
                                                                    <div className="col-sm-12 col-12 order-sm-0 order-1">
                                                                        <p>Note: Thank you for doing Business with us.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="invoice-actions-btn">
                                            <div className="invoice-action-btn">
                                                <div className="row">
                                                    <div className="col-xl-12 col-md-3 col-sm-6">
                                                        <a href="javascript:void(0);" className="btn btn-primary btn-send">Send Invoice</a>
                                                    </div>
                                                    <div className="col-xl-12 col-md-3 col-sm-6">
                                                        <a href="javascript:void(0);" className="btn btn-secondary btn-print  action-print">Print</a>
                                                    </div>
                                                    <div className="col-xl-12 col-md-3 col-sm-6">
                                                        <a href="javascript:void(0);" className="btn btn-success btn-download">Download</a>
                                                    </div>
                                                    <div className="col-xl-12 col-md-3 col-sm-6">
                                                        <a href="apps_invoice-edit.html" className="btn btn-dark btn-edit">Edit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper">
                    <div className="footer-section f-section-1">
                        <p className>Copyright © 2021 <a target="_blank" href="https://designreset.com/">DesignReset</a>, All rights reserved.</p>
                    </div>
                    <div className="footer-section f-section-2">
                        <p className>Coded with <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></p>
                    </div>
                </div>
            </div>
            {/*  END CONTENT AREA  */}
        </div>

    )
}
