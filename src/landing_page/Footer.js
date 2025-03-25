import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container border-top mt-5 pt-4">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <img src="media/images/logo.svg" alt="logo" style={{ width: "50%" }} />
          <p className="text-muted small">© 2024 - 2025, StockGrow Broking Ltd. All rights reserved.</p>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <p className="fs-5 fw-bold">Company</p>
          <ul className="list-unstyled">
            <li><Link to="about" className="text-primary text-decoration-none">About</Link></li>
            <li><Link to="product" className="text-primary text-decoration-none">Products</Link></li>
            <li><Link to="pricing" className="text-primary text-decoration-none">Pricing</Link></li>
            <li><a href="#" className="text-primary text-decoration-none">Referral Programme</a></li>
            <li><a href="#" className="text-primary text-decoration-none">Careers</a></li>
            <li><a href="#" className="text-primary text-decoration-none">StockGrow.tech</a></li>
            <li><a href="#" className="text-primary text-decoration-none">Press & Media</a></li>
            <li><a href="#" className="text-primary text-decoration-none">StockGrow Cares (CSR)</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <p className="fs-5 fw-bold">Support</p>
          <ul className="list-unstyled">
            <li><a href="#" className="text-primary text-decoration-none">Contact Us</a></li>
            <li><a href="#" className="text-primary text-decoration-none">Support Portal</a></li>
            <li><a href="#" className="text-primary text-decoration-none">S-Connect Blog</a></li>
            <li><a href="#" className="text-primary text-decoration-none">List of Charges</a></li>
            <li><a href="#" className="text-primary text-decoration-none">Downloads & Resources</a></li>
            <li><a href="#" className="text-primary text-decoration-none">Videos</a></li>
            <li><a href="#" className="text-primary text-decoration-none">Market Overview</a></li>
            <li><a href="#" className="text-primary text-decoration-none">How to File a Complaint?</a></li>
            <li><a href="#" className="text-primary text-decoration-none">Status of Your Complaints</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <p className="fs-5 fw-bold">Account</p>
          <ul className="list-unstyled">
            <li><a href="#" className="text-primary text-decoration-none">Open an Account</a></li>
            <li><a href="#" className="text-primary text-decoration-none">Fund Transfer</a></li>
          </ul>
        </div>
      </div>

      {/* Legal Disclaimer Section */}
      <div className="mt-5 text-muted small" style={{ lineHeight: "1.5" }}>
        <p>
          <strong>StockGrow Broking Ltd.</strong>: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633
          CDSL/NSDL: Depository services through StockGrow Broking Ltd. – SEBI Registration no.: IN-DP-431-2024
          Commodity Trading through StockGrow Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
          no.: INZ000038238. Registered Address: StockGrow Broking Ltd., #153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
        </p>

        <p>
          For any complaints regarding securities broking, please email: <a href="mailto:complaints@StockGrow.com">complaints@StockGrow.com</a>.
          For DP-related complaints, contact: <a href="mailto:dp@StockGrow.com">dp@StockGrow.com</a>.
        </p>

        <p>
          <strong>Procedure to file a complaint on SEBI SCORES:</strong> Register on the 
          <a href="https://scores.gov.in/" target="_blank" rel="noopener noreferrer"> SCORES portal</a>.
          Required details: Name, PAN, Address, Mobile Number, Email ID.
        </p>

        <p>Smart Online Dispute Resolution | Grievance Redressal Mechanism</p>

        <p>
          <strong>Investment Warning:</strong> Investments in the securities market are subject to market risks;
          read all related documents carefully before investing.
        </p>

        <p>
          <strong>Investor Alerts:</strong> Stock brokers can accept securities as margins only via the pledge system 
          in the depository system (effective from September 01, 2024). Update your contact details with your 
          stock broker/depository participant to receive OTP verification. Review your securities in the consolidated 
          account statement issued by NSDL/CDSL monthly.
        </p>

        <p>
          <strong>Prevent Unauthorized Transactions:</strong> Update your mobile number and email with your stock broker.
          Get transaction details from the Exchange at the end of the day. KYC is a one-time process across all SEBI-registered 
          intermediaries (brokers, DPs, Mutual Funds, etc.).
        </p>

        <p>
          <strong>IPO Subscription:</strong> No need to issue a cheque. Authorize your bank via the IPO application form.
          If allotment is not received, funds remain in your bank account. 
        </p>

        <p>
          As a business, we <strong>do not provide stock tips</strong> or authorize trading on behalf of others. If someone 
          claims to be from StockGrow offering such services, please report it.
        </p>
      </div>
    </div>
  );
}

export default Footer;
