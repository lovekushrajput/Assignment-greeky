import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";


const Footer = () => {

  return (

    // footer
    <footer className="w-full">

      {/* footer-content */}
      <div className="py-12 px-5 max-w-[1200px] my-0 mx-auto flex flex-wrap gap-5  md:justify-between md:py-12 md:px-0">


        {/* col-1 */}
        <div className="max-w-xs">
          <div className="mb-5 text-xl">About</div>
          <div className="text-[rgba(0,0,0,0.5)] text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ratione sint commodi iusto repellendus
            accusamus non laboriosam eligendi soluta vero
            .</div>
        </div>


        {/* col-2 */}
        <div className="max-w-xs">
          <div className="mb-5 text-xl">Contact</div>

          <div className="text-[rgba(0,0,0,0.5)] text-base flex mb-3">
            <FaLocationArrow className="text-base mr-3 mt-1 text-[rgba(0,0,0,0.5)]" />
            <div>Kayaloram Rd, Punnaamada, Kattankulangara, Alappuzha, Kerala, 688006</div>
          </div>

          <div className="text-[rgba(0,0,0,0.5)] text-base flex mb-3">
            <FaMobileAlt className="text-base mr-3 mt-1 text-[rgba(0,0,0,0.5)]" />
            <div>Phone: 0574 537 8487</div>
          </div>

          <div className="text-[rgba(0,0,0,0.5)] text-base flex mb-3">
            <FaEnvelope className="text-base mr-3 mt-1 text-[rgba(0,0,0,0.5)]" />
            <div>Email: Store@js.com</div>
          </div>
        </div>


        {/* col-3 */}
        <div className="max-w-xs">
          <div className="mb-5 text-xl">Categories</div>

          {['Headphones', 'Smart Watches', 'Blutooth Speakers', 'Wireless Earbuds', 'Home Theater', 'Projecters'].map((Cat,i) => (

            <span
            key={i}
            className="text-[rgba(0,0,0,0.5)] text-base block mb-3">{Cat}</span>
          ))}

        </div>


        {/* col-4 */}
        <div className="max-w-xs">
          <div className="mb-5 text-xl">Pages</div>

          {['Home', 'About', 'Privacy Policy', 'Returns', 'Terms & Conditions', 'Contact Us'].map((page,i) => (
            <span
            key={i}
             className="text-[rgba(0,0,0,0.5)] text-base block mb-3">{page}</span>
          ))}
        </div>


      </div>

      {/* bottom */}
      <div className="border border-[rgba(0,0,0,0.1)]"> 
        {/* bottom-content */}
        <div className="p-5 flex flex-col items-center gap-3 text-center md:p-0 md:h-16 md:max-w-6xl md:flex-row md:my-0 md:mx-auto md:justify-between md:text-left">

          {/* text */}
          <div className="text-sm text-[rgba(0,0,0,0.5)]">
            SHOPPINGCART. 2022 CREATED BY LR DEV. PREMIUM E-COMMERCE SOLUTIONS.
          </div>

          <img src={Payment} alt="payment" />
        </div>
      </div>


    </footer>
  );
};

export default Footer;
