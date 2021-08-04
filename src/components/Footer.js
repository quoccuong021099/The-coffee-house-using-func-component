import React from "react";
import appstore from "../image/appstore.png";
import ggplay from "../image/google-play-badge.png";
import gov from "../image/gov.png";
import logofooter from "../image/logo_footer.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <ul className="list-footer">
          <li className="list-item">
            <img src={logofooter} width="122" height="108" alt="a" />
            <div className="socials">
              <a href="#a" className="social__item">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                  </svg>
                </span>
              </a>
              <a href="#a" className="social__item">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="black"
                      fill="#fff"
                      d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"
                    ></path>
                    <circle cx="14.87" cy="5.26" r="1.09" fill="#fff"></circle>
                    <path
                      stroke="black"
                      fill="#fff"
                      d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </li>
          <li className="list-item">
            <div className="about-us">
              <p className="about-us__left">VỀ CHÚNG TÔI</p>
              <p className="about-us__right">
                CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ TRÀ CÀ PHÊ VN
              </p>
            </div>
            <a href="#a" className="about-us__link">
              Điều khoản và điều kiện
            </a>
            <a href="#a" className="about-us__link">
              Chính sách bảo mật
            </a>
            <img
              src={gov}
              width="200"
              height="75"
              alt="a"
              className="about-us__img"
            />
          </li>
          <li className="list-item">
            <h1 className="app-download">ỨNG DỤNG THE COFFEE HOUSE</h1>
            <img
              src={appstore}
              alt="a"
              className="app-download__img"
              width="115"
              height="40"
            />
            <img
              src={ggplay}
              alt="a"
              className="app-download__img"
              width="127"
              height="40"
            />
          </li>
          <li className="list-item">
            <h1 className="support">HỖ TRỢ KHÁCH HÀNG</h1>
            <p className="delivery-phone">Delivery: 1800 6936</p>
            <p className="hont-line">Hotline: 02871 087 088</p>
            <address className="adrress-support">
              Địa chỉ: Lầu 7, 62 Trần Quang Khải, phường Tân Định, quận 1, HCMC
            </address>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          © 2018 CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ TRÀ CÀ PHÊ VN
        </p>
        <address className="adrress-company">
          86-88 Cao Thắng, phường 4, quận 3, Hồ Chí Minh
        </address>
        <p className="license">
          Số giấy phép ĐKKD: 0312867172 do sở kế hoạch đầu tư TPHCM ngày
          23/07/2014
        </p>
      </div>
    </footer>
  );
}
