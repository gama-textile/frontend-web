import React, { Component } from "react";

export default class ProductDetailFooter extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Review
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Q&A
            </a>
          </li>
        </ul>
        <div
          className="tab-content  border"
          id="myTabContent"
          style={{ padding: "20px" }}
        >
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            Etsy mixtape wayfarers, ethical wes anderson tofu before they sold
            out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
            readymade. Messenger bag gentrify pitchfork tattooed craft beer,
            iphone skateboard locavore carles etsy salvia banksy hoodie
            helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit
            cred pitchfork. Williamsburg banh mi whatever gluten-free, carles
            pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester
            cred you probably haven't heard of them, vinyl craft beer blog
            stumptown. Pitchfork sustainable tofu synth chambray yr.
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            Etsy mixtape wayfarers, ethical wes anderson tofu before they sold
            out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
            readymade. Messenger bag gentrify pitchfork tattooed craft beer,
            iphone skateboard locavore carles etsy salvia banksy hoodie
            helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit
            cred pitchfork. Williamsburg banh mi whatever gluten-free, carles
            pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester
            cred you probably haven't heard of them, vinyl craft beer blog
            stumptown. Pitchfork sustainable tofu synth chambray yr.
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            Etsy mixtape wayfarers, ethical wes anderson tofu before they sold
            out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
            readymade. Messenger bag gentrify pitchfork tattooed craft beer,
            iphone skateboard locavore carles etsy salvia banksy hoodie
            helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit
            cred pitchfork. Williamsburg banh mi whatever gluten-free, carles
            pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester
            cred you probably haven't heard of them, vinyl craft beer blog
            stumptown. Pitchfork sustainable tofu synth chambray yr.
          </div>
        </div>
      </div>
    );
  }
}
