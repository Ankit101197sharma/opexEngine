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
              <p className={classes.myMatrics}>MY Metrics</p>
              <hr className={classes.orangeLine} />
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
        <div className={classes.barDesktop}>
            <div className={classes.tab1}>
              <p>Financial</p>
              <hr className={classes.hrOrange} />
              <hr className={classes.hrDivider} />
            </div>
            <div className={classes.tab1}>
              <p>Saas Metrics</p>
              
              <hr className={classes.hrDivider1} />
            </div>
            <div className={classes.tab1}>
              <p>Sales</p>
              
              <hr className={classes.hrDivider3} />
            </div>
            <div className={classes.tab1}>
              <p>Marketing</p>
              
              <hr className={classes.hrDivider4} />
            </div>
            <div className={classes.tab1}>
              <p>Customers</p>
             
              <hr className={classes.hrDivider5} />
            </div>
            <div className={classes.tab1}>
              <p>R&D and Hosting</p>
            
              <hr className={classes.hrDivider6} />
            </div>
            <div className={classes.tab1}>
              <p>Services</p>
            
              <hr className={classes.hrDivider7} />
            </div>
            <div className={classes.tab1}>
              <p>G&A</p>
              
              <hr className={classes.hrDivider8} />
            </div>
            <div className={classes.tab1}>
              <p>HR</p>
             
              <hr className={classes.hrDivider} />
            </div>
        </div>
      </div>
     
    </div>
  );
};

export default LandingPage;
