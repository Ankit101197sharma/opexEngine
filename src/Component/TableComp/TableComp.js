import React from "react";
import "./TableComp.css";
import infoCircle from "../../Assests/infoCircle.svg";

const TableComp = () => {
  return (
    <>
      <div className="mainContainer">
        <h1 className="heading1">Financials</h1>
        <div className="subContainer">
          <div className="leftContainer">
            <p className="sideHeading">Metric</p>
            <p className="sideHeading subHeadingBg"> Recognized Revenue</p>
            <div className="normalText iconDiv">
              <p>Recognized Revenue </p>
              <img src={infoCircle} alt="" />
            </div>

            <p className="sideHeading subHeadingBg">
              Recognized Revenue Components (As A % OF Total Recognized Revenue)
            </p>
            <div className="normalText iconDiv">
              <p>
                Perpetual License Software Revenue (excluding any SaaS revenue){" "}
              </p>
              <img src={infoCircle} alt="" />
            </div>
            <div className="normalText iconDiv subHeadingBg">
              <p>Software as a Service Subscription Revenue</p>
              <img src={infoCircle} alt="" />
            </div>
            <div className="normalText iconDiv">
              <p>
                Services Revenue (Professional Services and Training excluding
                Maintenance)
              </p>
              <img src={infoCircle} alt="" />
            </div>
            <div className="normalText subHeadingBg iconDiv">
              <p>Maintenance Revenue</p>
              <img src={infoCircle} alt="" />
            </div>
            <div className="normalText iconDiv">
              <p>Transaction or Usage Revenue not part of a subscription </p>
              <img src={infoCircle} alt="" />
            </div>
            <div className="normalText subHeadingBg iconDiv">
              <p>Total Recognized Revenue</p>
              <img src={infoCircle} alt="" />
            </div>

            <p className="sideHeading subHeadingBg">Total Recognized Revenue</p>
          </div>
          <div className="rightContainer">
            <p className="sideHeading mr">Value</p>
            <p className="normalText subHeadingBg mr"></p>
            <p className="normalText mr">$51,582,700</p>
            <p className="normalText subHeadingBg mr"></p>
            <p className="normalText mr">---</p>
            <p className="normalText subHeadingBg mr">93.05%</p>
            <p className="normalText mr">6.91%</p>
            <p className="normalText subHeadingBg mr">0.03%</p>
            <p className="normalText mr">---</p>
            <p className="normalText subHeadingBg mr">100.00%</p>
            <p className="normalText subHeadingBg mr"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComp;
