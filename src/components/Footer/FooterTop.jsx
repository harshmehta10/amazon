import React from "react";

const FooterTop = () => {
  return (
    <div className="bg-[#232f3e] md:text-sm sm:text-xs">
      <div className="text-center bg-[#37475A] text-white p-2">Back to top</div>
      <div
        className="grid grid-cols-4 text-white bg-[#232f3e] p-2 md:text-sm sm:text-xs"
        style={{
          marginLeft: "calc(10% + 46px)",
          marginRight: "calc(10% + 46px)",
        }}
      >
        <div>
          <ul>
            <li>Get to know Us</li>
            <li>About Amazon</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Connect with us</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Make Money with Us</li>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Supply to Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Let Us Help You</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
