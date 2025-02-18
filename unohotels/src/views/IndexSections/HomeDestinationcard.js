import React from "react";
import bannerImage from "assets/img/brand/banner.png";

export default function HomeDestinationcard() {
  return (
    <div class="container">
      <div class="pt-4 pb-4 text-center mx-auto">
        <h1 class="fw-black">Our Luxury Hotel Collections </h1>
        <p class="lead text-body-secondary">
          Business Hotels | Holiday Destinations | Destinations Wedding |
          Honeymoon Destinations | Historic Sites
        </p>
      </div>
      <div class="mb-4 row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        <div class="col">
          <div class="card shadow-sm">
            <div
              style={{
                backgroundImage: `url(https://pandorahotels.co.in/Latest-image/pandora-kufri.webp)`,
                backgroundSize: "cover", // Optional: for better fitting
                height: "300px",
                boxShadow: "10px 10px 10px 10px #ccc",
                borderRadius: "10px",
              }}
              className="business_card"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text
                style={{
                  width: "100%",
                  float: "left",
                  background: "#000",
                  textAlign: "center",
                  color: "#fff",
                  textTransform: "uppercase",
                  position: "absolute",
                  bottom: "0",
                  padding: "10px",
                }}
              >
                Hotel Ashirdwad Castle by UNO Hotels
              </text>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div
              style={{
                backgroundImage: `url(https://lh3.googleusercontent.com/p/AF1QipONgtLmgezT-kjTHEvDmoODptU9sD5uWXbBlHkI=s680-w680-h510)`,
                backgroundSize: "cover", // Optional: for better fitting
                backgroundPosition: "center", // Optional: for better positioning
                height: "300px",
                boxShadow: "10px 10px 10px 10px #ccc",
                borderRadius: "10px",
              }}
              className="business_card"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text
                style={{
                  width: "100%",
                  float: "left",
                  background: "#000",
                  textAlign: "center",
                  color: "#fff",
                  textTransform: "uppercase",
                  position: "absolute",
                  bottom: "0",
                  padding: "10px",
                }}
              >
                River Pine Resorts by UNO Hotels
              </text>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div
              style={{
                backgroundImage: `url(https://lh3.googleusercontent.com/p/AF1QipPwpCfek6nQ7TYjeIlE4f8i2SyKfx4_4_2G2_dI=s1360-w1360-h1020)`,
                backgroundSize: "cover", // Optional: for better fitting
                height: "300px",
                boxShadow: "10px 10px 10px 10px #ccc",
                borderRadius: "10px",
              }}
              className="business_card"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text
                style={{
                  width: "100%",
                  float: "left",
                  background: "#000",
                  textAlign: "center",
                  color: "#fff",
                  textTransform: "uppercase",
                  position: "absolute",
                  bottom: "0",
                  padding: "10px",
                }}
              >
                Alpine Hotel and villa By UNO Hotels
              </text>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div
              style={{
                backgroundImage: `url(https://www.royalorchidhotels.com/Images/slide-wildlife.webp)`,
                backgroundSize: "cover", // Optional: for better fitting
                backgroundPosition: "center", // Optional: for better positioning
                height: "300px",
                boxShadow: "10px 10px 10px 10px #ccc",
                borderRadius: "10px",
              }}
              className="business_card"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text
                style={{
                  width: "100%",
                  float: "left",
                  background: "#000",
                  textAlign: "center",
                  color: "#fff",
                  textTransform: "uppercase",
                  position: "absolute",
                  bottom: "0",
                  padding: "10px",
                }}
              >
                Grand Hills Hotel and spa by UNO hotels
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
