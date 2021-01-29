import { createBrowserHistory } from "history";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import ReactMarkdown from "react-markdown";
export const history = createBrowserHistory();

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const JoinOurTeam = props => {
  const {
    joinOurTeam,
    joinOurTeamRowHeight,
    joinOurTeamLayout
  } = props.location.state;
  console.log(joinOurTeam);
  return (
    <div className="module module--light module--modal module--modal-on">
      <div className="wrapper">
        <div className="module__content">
          <h2 className="module__title aos-init">{joinOurTeam.title}</h2>
          <span
            className="module__close-btn"
            style={{ cursor: "pointer" }}
            onClick={() => window.history.back()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <defs></defs>
              <title>Get_In_Touch_Close_CTA</title>
              <g data-name="Layer 2">
                <g>
                  <path
                    className="cls-1"
                    d="M10,14.69.33,5.06,5.06.33,14.69,10l10-10L30,5.34l-10,10L29.72,25,25,29.72,15.31,20l-10,10L0,24.66Z"
                  ></path>
                </g>
              </g>
            </svg>
          </span>
          <p className="aos-init">
            <ReactMarkdown source={joinOurTeam.description} />
            <span>
              <strong>What We Value:</strong>
              <br />
              {joinOurTeam.whatWeHave}
              <br />
              <br />
              <strong>What We Expect:</strong>
              <br />
              {joinOurTeam.whatWeExpect} <br />
              <br />
              <strong>Our Goal: </strong>
              <br />
              {joinOurTeam.ourGoal}
            </span>
          </p>
          <div className="module__wide-block">
            <div className="grid aos-init">
              <div className="grid__gutter-sizer"></div>
              <div className="grid__sizer"></div>
              <ResponsiveReactGridLayout
                className="layout"
                style={{ backgroundColor: "#FFFFFF" }}
                layouts={joinOurTeamLayout}
                cols={{ lg: 60, md: 60, sm: 30, xs: 30, xxs: 30 }}
                rowHeight={joinOurTeamRowHeight}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                autoSize={true}
              >
                {joinOurTeam.photos.map(photo => (
                  <div
                    key={
                      photo.image.childImageSharp &&
                      photo.image.childImageSharp.fluid.src
                    }
                    className="grid__item"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <img
                      alt="team"
                      className="grid__imga"
                      src={
                        photo.image.childImageSharp &&
                        photo.image.childImageSharp.fluid.src
                      }
                    />
                  </div>
                ))}
              </ResponsiveReactGridLayout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
