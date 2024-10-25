import React from "react";

export default function HomeDestinationcard() {
    return (
      <div class="container">
        <div class="text-mx-auto">
          <h1 class="fw-light">Distinctly Warm Indian Hospitality </h1>
          <p class="lead text-body-secondary">
            Business Hotels | Holiday Destinations | Wildlife Parks | Wedding
            Destinations | Religious Sites | Historic Sites
          </p>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
}
