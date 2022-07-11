import React from "react";
import classes from "./LandingPage.module.css";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import upload from "../../Assests/upload.svg"
import FormControl from "react-bootstrap/FormControl";
import icon1 from "../../Assests/icon1.svg";
import searchIcon from "../../Assests/searchIcon.svg"
 
const LandingPage = () => {
  return (
    <div className={classes.maindiv}>
      <div className={classes.subHeader}>
        <div className={classes.benchMark}>
          <p>
            {" "}
            BENCHMARKENGINE <span style={{ color: "orange" }}>/</span>{" "}
            <span style={{ fontWeight: "700" }}> MY Metrics</span>
          </p>
          <div className={classes.textDIv}>
            <img src={icon1} alt="" />
            <div className={classes.matricsText}>
              <div className={classes.hrLine}>
              <p className={classes.myMatrics}>MY Metrics</p>
              </div>
             
              
              <p className={classes.matricsPara}>
                Metrics are calculated from the data entered in My Data
              </p>
            </div>
          </div>
          
        </div>
        <div className={classes.buttonDiv} >
          <div className={classes.button1}>
            <img src={upload} alt="" />
            <p>Export to Excel</p>
          </div>
          <div className={classes.button2}>
          <img src={upload} alt="" />
            <p>Export to Excel</p>
          </div>
          
        </div>
        <div className={classes.searchBars}>
<div className={classes.searchIcon}>
<img src={searchIcon} alt="" />
</div>
<div className={classes.inputText}>
Search Metrics
</div>
        </div>
        
        <div className={classes.deskBar}>
          <div className={classes.financialDiv}>
            <div className={classes.fParaDiv}>
            <p className={classes.fPara}>Financial</p>
            <hr />
            </div>

          </div>
          <div className={classes.saasDiv}>
            <div className={classes.sParaDiv}>
            <p className={classes.sPara}>Saas Metrics</p>
            </div>

          </div>
          <div className={classes.salesDiv}>
            <div className={classes.salesParaDiv}>
            <p className={classes.salesPara}>Sales</p>
            </div>

          </div>
          <div className={classes.MarketingDiv}>
            <div className={classes.MarketingParaDiv}>
            <p className={classes.marketingPara}>Marketing</p>
            </div>

          </div>
          <div className={classes.customerDiv}>
            <div className={classes.customerParaDiv}>
            <p className={classes.customerPara}>Customer</p>
            </div>

          </div>
          <div className={classes.rdDiv}>
            <div className={classes.rdParaDiv}>
            <p className={classes.rdPara}>R&D and Hosting</p>
            </div>

          </div>
          <div className={classes.serviceDiv}>
            <div className={classes.serviceParaDiv}>
            <p className={classes.servicePara}>Services</p>
            </div>

          </div>
          <div className={classes.gaDiv}>
            <div className={classes.gaParaDiv}>
            <p className={classes.gaPara}>G&A</p>
            </div>

          </div>
          <div className={classes.hrDiv}>
            <div className={classes.hrParaDiv}>
            <p className={classes.hrPara}>HR</p>
            </div>

          </div>

        </div>
      </div>
     
    </div>
  );
};

export default LandingPage;
