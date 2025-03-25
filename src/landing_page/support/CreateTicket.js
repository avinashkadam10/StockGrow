import React from "react";

const ticketCategories = [
  {
    title: "Account Opening",
    icon: "fa-circle-plus",
    links: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Your StockGrow Account",
    icon: "fa-user",
    links: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    title: "Kite",
    icon: "fa-signal",
    links: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
    ],
  },
  {
    title: "Funds",
    icon: "fa-money-check",
    links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    title: "Console",
    icon: "fa-circle-notch",
    links: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
    ],
  },
  {
    title: "Coin",
    icon: "fa-coins",
    links: [
      "Understanding mutual funds and Coin",
      "Coin app",
      "Coin web",
      "Transactions and reports",
      "National Pension Scheme (NPS)",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container mt-5">
      <h2 className="text-muted mb-4 text-center">
        To create a ticket, select a relevant topic
      </h2>
      <div className="row">
        {ticketCategories.map((category, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
            <h5 className="mb-3">
              <i className={`fa-solid ${category.icon} me-2`}></i>
              {category.title}
            </h5>
            <ul className="list-unstyled">
              {category.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-decoration-none d-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
