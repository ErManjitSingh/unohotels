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
        <div className="col-md-12">
          <form>
            <ul className="booking_ul"></ul>
            <div class="form-group">
              <label for="exampleFormControlSelect1">City</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Dharamshala</option>
                <option>Shimla</option>
                <option>Manali</option>
                <option>Kashmir</option>
                <option>Goa</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
