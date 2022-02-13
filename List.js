import React, { useEffect, useState } from "react";

export default function InvoiceList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      let localItems = JSON.parse(window.localStorage.getItem("invoices"));
      setData(localItems);
    };

    const timer = setTimeout(() => {
      getData();
    }, 500);

    return () => clearTimeout(timer);
  }, [data]);

  const handleRemove = (id) => {
    let newItems = data.filter(function (obj) {
      return obj.id !== id;
    });
    window.localStorage.setItem("invoices", JSON.stringify(newItems));
    setData(newItems);
  };

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
                <h3>List</h3>
              </div>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Apps</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Invoice</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a href="javascript:void(0);">List</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a href="/invoiceadd">Add New</a>
                </li>
                {/* <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">Edit</a></li> */}
              </ol>
            </nav>
            <div className="toggle-switch">
              <label className="switch s-icons s-outline  s-outline-secondary">
                <input
                  type="checkbox"
                  defaultChecked
                  className="theme-shifter"
                />
                <span className="slider round">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-sun"
                  >
                    <circle cx={12} cy={12} r={5} />
                    <line x1={12} y1={1} x2={12} y2={3} />
                    <line x1={12} y1={21} x2={12} y2={23} />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1={1} y1={12} x2={3} y2={12} />
                    <line x1={21} y1={12} x2={23} y2={12} />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-moon"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className="row" id="cancel-row">
            <div className="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
              <div className="widget-content widget-content-area br-6">
                <div
                  id="invoice-list_wrapper"
                  className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                >
                  <div className="inv-list-top-section">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 d-flex justify-content-md-start justify-content-center">
                        <div
                          className="dataTables_length"
                          id="invoice-list_length"
                        >
                          <label>
                            Results :{" "}
                            <select
                              name="invoice-list_length"
                              aria-controls="invoice-list"
                              className="form-control"
                            >
                              <option value={7}>7</option>
                              <option value={10}>10</option>
                              <option value={20}>20</option>
                              <option value={50}>50</option>
                            </select>
                          </label>
                        </div>
                        <div className="dt-action-buttons align-self-center">
                          <div className="dt-buttons">
                            <button
                              className="dt-button btn btn-primary btn-sm"
                              tabIndex={0}
                              aria-controls="invoice-list"
                            >
                              <span>
                                <a
                                  style={{ color: "white" }}
                                  href="/invoiceadd"
                                >
                                  Add New
                                </a>
                              </span>
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-center mt-md-0 mt-3">
                        <div
                          id="invoice-list_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-search"
                            >
                              <circle cx={11} cy={11} r={8} />
                              <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            </svg>
                            <input
                              type="search"
                              className="form-control"
                              placeholder="Search..."
                              aria-controls="invoice-list"
                            />
                          </label>
                        </div>
                        <div className="toolbar align-self-center">
                          <button
                            className="dt-button dt-delete btn btn-danger btn-sm"
                            tabIndex={0}
                            aria-controls="invoice-list"
                          >
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="invoice-list"
                      className="table table-hover dataTable no-footer"
                      style={{ width: "100%" }}
                      role="grid"
                      aria-describedby="invoice-list_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="checkbox-column sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            aria-label=" Record no. "
                            style={{ width: "82px" }}
                          >
                            <label className="new-control new-checkbox checkbox-primary m-auto">
                              <input
                                type="checkbox"
                                className="new-control-input chk-parent select-customers-info"
                                id="customer-all-info"
                              />
                              <span className="new-control-indicator" />
                              <span style={{ visibility: "hidden" }}>c</span>
                            </label>
                          </th>
                          <th
                            className="sorting_asc"
                            tabIndex={0}
                            aria-controls="invoice-list"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label="Invoice Id: activate to sort column descending"
                            style={{ width: "87px" }}
                          >
                            Invoice Id
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="invoice-list"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Name: activate to sort column ascending"
                            style={{ width: "181px" }}
                          >
                            Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="invoice-list"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Email: activate to sort column ascending"
                            style={{ width: "242px" }}
                          >
                            Email
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="invoice-list"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Date: activate to sort column ascending"
                            style={{ width: "95px" }}
                          >
                            Date
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="invoice-list"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Amount: activate to sort column ascending"
                            style={{ width: "70px" }}
                          >
                            Amount
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="invoice-list"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Status: activate to sort column ascending"
                            style={{ width: "65px" }}
                          >
                            Status
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="invoice-list"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Actions: activate to sort column ascending"
                            style={{ width: "67px" }}
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((e, i) => {
                          let total =
                            e.items.reduce(
                              (a, b) => parseInt(a) + parseInt(b.itemAmount),
                              0
                            ) - parseInt(e.discount);
                          return (
                            <tr role="row" key={i}>
                              <td className="checkbox-column">
                                <label className="new-control new-checkbox checkbox-primary  m-auto">
                                  <input
                                    type="checkbox"
                                    className="new-control-input child-chk select-customers-info"
                                    id="customer-all-info"
                                  />
                                  <span className="new-control-indicator" />
                                  <span style={{ visibility: "hidden" }}>
                                    c
                                  </span>
                                </label>
                              </td>
                              <td className="sorting_1">
                                <a href="apps_invoice-preview.html">
                                  <span className="inv-number">#{e.id}</span>
                                </a>
                              </td>
                              <td>
                                <div className="d-flex">
                                  <div className="usr-img-frame mr-2 rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="img-fluid rounded-circle"
                                      src="assets/img/profile-30.png"
                                    />
                                  </div>
                                  <p className="align-self-center mb-0 user-name">
                                    {e.billToName}
                                  </p>
                                </div>
                              </td>
                              <td>
                                <span className="inv-email">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-mail"
                                  >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                  </svg>{" "}
                                  {e.billToEmail}
                                </span>
                              </td>
                              <td>
                                <span className="inv-date">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-calendar"
                                  >
                                    <rect
                                      x={3}
                                      y={4}
                                      width={18}
                                      height={18}
                                      rx={2}
                                      ry={2}
                                    />
                                    <line x1={16} y1={2} x2={16} y2={6} />
                                    <line x1={8} y1={2} x2={8} y2={6} />
                                    <line x1={3} y1={10} x2={21} y2={10} />
                                  </svg>{" "}
                                  {new Date(e?.date).toDateString()}
                                </span>
                              </td>
                              <td>
                                <span className="inv-amount">${total}</span>
                              </td>
                              <td>
                                <span
                                  className={`badge ${
                                    e.status === "Paid"
                                      ? "badge-success"
                                      : "badge-danger"
                                  } inv-status`}
                                >
                                  {e.status}
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <a
                                    className="dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink2"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-more-horizontal"
                                    >
                                      <circle cx={12} cy={12} r={1} />
                                      <circle cx={19} cy={12} r={1} />
                                      <circle cx={5} cy={12} r={1} />
                                    </svg>
                                  </a>
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink2"
                                  >
                                    <a
                                      className="dropdown-item action-edit"
                                      href={`/invoiceedit?id=${e.id}`}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-edit-3"
                                      >
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                      </svg>
                                      Edit
                                    </a>
                                    <a
                                      className="dropdown-item action-delete"
                                      href="javascript:void(0);"
                                      onClick={() => handleRemove(e.id)}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-trash"
                                      >
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                      </svg>
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="inv-list-bottom-section d-sm-flex justify-content-sm-between text-center">
                    <div className="inv-list-pages-count  mb-sm-0 mb-3">
                      <div
                        className="dataTables_info"
                        id="invoice-list_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing page 1 of 2
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
            <p className>
              Copyright © 2021{" "}
              <a target="_blank" href="https://designreset.com/">
                DesignReset
              </a>
              , All rights reserved.
            </p>
          </div>
          <div className="footer-section f-section-2">
            <p className>
              Coded with{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      {/*  END CONTENT AREA  */}
    </div>
  );
}
