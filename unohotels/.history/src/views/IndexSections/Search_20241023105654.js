import React from "react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <div>
      <div
        className={`${styles["banner-text"]} ${styles.booking_ul_new} wow fadeIn`}
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
        <div
          className={`${styles.col_md_12} ${styles.form_group} has-feedback`}
        >
          <ul className={styles.booking_ul}>
            <li>
              <label>City</label>
              <select
                name="BookingEngine$DdlCity"
                id="BookingEngine_DdlCity"
                className={styles.form_control}
               
              >
                <option value="0">City</option>
                <option value="1113">Agra</option>
                <option value="1">Ahmedabad</option>
                <option value="1033">Ajmer</option>
                <option value="1094">Ambala</option>
                <option value="2">Amritsar</option>
                <option value="3">Bangalore</option>
                <option value="1064">Belagavi</option>
                <option value="1057">Bharatpur</option>
                <option value="4">Bharuch</option>
                <option value="1085">Bhopal</option>
                <option value="1004">Bhuj</option>
                <option value="1005">Chandigarh</option>
                <option value="1028">Chennai</option>
                <option value="1056">Dahej</option>
                <option value="1034">Dehradun</option>
                <option value="1082">Dharamshala</option>
                <option value="1088">Digha</option>
                <option value="1103">Gangtok</option>
                <option value="1007">Goa</option>
                <option value="1098">Greater Noida</option>
                <option value="1092">Guhagar</option>
                <option value="1075">Gurugram</option>
                <option value="2116">Gwalior</option>
                <option value="1009">Hampi</option>
                <option value="1026">Haridwar</option>
                <option value="1106">Igatpuri</option>
                <option value="1039">Indore</option>
                <option value="1012">Jaipur</option>
                <option value="1110">Jamnagar</option>
                <option value="1083">Jhansi</option>
                <option value="1074">Kabini Wildlife</option>
                <option value="1041">Kanpur</option>
                <option value="2110">Kasauli</option>
                <option value="1076">Kedarnath</option>
                <option value="1100">Kolhapur</option>
                <option value="1024">Kolkata</option>
                <option value="1070">Lonavala</option>
                <option value="1093">Lucknow</option>
                <option value="1031">Ludhiana</option>
                <option value="1014">Mahabaleshwar</option>
                <option value="1062">Manali</option>
                <option value="2115">Mashobra</option>
                <option value="1097">Mcleod Ganj</option>
                <option value="1084">Mohali</option>
                <option value="1069">Morbi</option>
                <option value="1111">Mumbai</option>
                <option value="1015">Mussoorie</option>
                <option value="1016">Mysore</option>
                <option value="1058">Nagpur</option>
                <option value="1046">Nashik</option>
                <option value="1018">Navi Mumbai</option>
                <option value="1096">Nellore</option>
                <option value="2109">Nepal</option>
                <option value="1068">Noida</option>
                <option value="1112">Panchkula</option>
                <option value="1066">Pench</option>
                <option value="1087">Phagwara</option>
                <option value="1019">Pune</option>
                <option value="2112">Puri</option>
                <option value="1027">Ranthambore</option>
                <option value="1067">Rishikesh</option>
                <option value="1107">Sakleshpur</option>
                <option value="1073">Sambalpur</option>
                <option value="1071">Shimla</option>
                <option value="1021">Shimoga</option>
                <option value="1055">Somnath</option>
                <option value="1099">Sri Lanka</option>
                <option value="1042">Srinagar</option>
                <option value="2113">Surat</option>
                <option value="1072">Udaipur</option>
                <option value="1023">Vadodara</option>
                <option value="1060">Vapi</option>
                <option value="1079">Varanasi</option>
              </select>
              <input
                type="hidden"
                name="BookingEngine$hidCityAbb"
                id="BookingEngine_hidCityAbb"
              />
            </li>
            <li className={styles.drop_hotel}>
              <label>Hotel</label>
              <div className="form_group">
                <select
                  name="BookingEngine$DdlHotel"
                  id="BookingEngine_DdlHotel"
                  className="form_control"
                >
                  <option value="0">Select Hotel</option>
                </select>
              </div>
            </li>
            <li>
              <label>Check In</label>
              <div className=form_group}>
                <input
                  id="dp1"
                  type="text"
                  className={`${styles.form_control} clickable input-md`}
                  readOnly
                  placeholder="Arrival"
                />
              </div>
            </li>
            <li>
              <label>Check Out</label>
              <div className={styles.form_group}>
                <input
                  id="dp2"
                  type="text"
                  className={`${styles.form_control} clickable input-md`}
                  readOnly
                  placeholder="Departure"
                />
              </div>
            </li>
            <li>
              <label>Rooms</label>
              <select name="room" id="room" className={styles.form_control}>
                <option value="0">Rooms</option>
                <option value="1" selected>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </li>
            <li>
              <label>Adults</label>
              <select className={styles.form_control} name="adut" id="adut">
                <option value="1">Adults</option>
                <option value="1">1</option>
                <option value="2" selected>
                  2
                </option>
                <option value="3">3</option>
              </select>
            </li>
            <li>
              <label>Children</label>
              <select className={styles.form_control} id="child">
                <option value="0">Children</option>
                <option value="0" selected>
                  0
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </li>
            <li>
              <label>Promo Code</label>
              <div className={styles.form_group}>
                <input
                  className={styles.form_control}
                  id="PromoCode"
                  autoComplete="off"
                  type="text"
                  placeholder="Promo Code"
                />
              </div>
            </li>
            <li>
              <label></label>
              <input
                name="bth"
                id="bth"
                value="Book Now"
                // Assuming you have this function defined
                className={styles.bkbtn}
                type="button"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
