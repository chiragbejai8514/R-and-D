import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import { createBrowserHistory } from "history";

import { Responsive, WidthProvider } from "react-grid-layout";

import { Link, navigate } from "gatsby";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const history = createBrowserHistory();

class TeamSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMember: "",
      showJoinOurTeam: false
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.onpopstate = () => this.clearActiveMember();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activeMember) {
      navigate(`/${this.state.activeMember}/`, {
        state: this.state.members
      });
    }
  }

  clearActiveMember = () => {
    this.setState({
      activeMember: "",
      showJoinOurTeam: false
    });
  };

  handleKeyDown = e => {
    if (e.code === "Backspace" || e.code === "Escape") {
      this.onClose();
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.hideModal !== nextProps.hideModal) {
      this.clearActiveMember();
    }
  }

  onProfilePress = key => {
    // window.history.pushState(null, null,key);
    this.setState({ activeMember: key });
    //  return( <Profile activeMember={this.state.activeMember}/>)
  };

  onBreakpointChange = breakpoint => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onClose = () => {
    this.setState({ activeMember: "" });
    this.setState({ showJoinOurTeam: false });
    window.history.back();
  };

  closeActiveMember = () => {
    this.setState({ activeMember: "" });
    window.history.back();
  };

  closeJoinOurTeam = () => {
    this.setState({ joinOurTeam: false });
    window.history.back();
  };

  onJoinOurTeam = () => {
    this.setState({ showJoinOurTeam: !this.state.showJoinOurTeam });
    window.history.pushState(null, null, "Join-Our-Team");
  };

  teamMembers = rowHeight => {
    const { activeMember, showJoinOurTeam } = this.state;
    const { active, data, width, joinOurTeam, layout, members } = this.props;
    return (
      <div
        className={`grid grid--team fade-up duration-400 delay-700 aos-init ${
          active ? "aos-animate" : ""
        }`}
      >
        <ResponsiveReactGridLayout
          className="layout"
          layouts={layout}
          cols={{ lg: 60, md: 60, sm: 60, xs: 60, xxs: 60 }}
          rowHeight={rowHeight}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          isDraggable={false}
          isResizable={false}
          onBreakpointChange={this.onBreakpointChange}
          autoSize={true}
        >
          {members.map(member => (
            <div key={member.key}>
              <div
                className="grid__item"
                onClick={
                  member.pinToTop
                    ? () =>
                        // // this.setState({ activeMember: member.key }):null
                        navigate(`/Profile?${member.key}`)
                    : null
                  // this.onProfilePress(member.key):null
                }
                style={{
                  backgroundImage: `url(${member.thumbPhoto.childImageSharp &&
                    member.thumbPhoto.childImageSharp.fluid.src})`
                }}
                data-toggle="modal"
              >
                <div className="grid__item-info">
                  <h3 className="grid__item-title">{member.name}</h3>
                  <h5 className="grid__item-sub-title">{member.position}</h5>
                  {member.position && (
                    <span className="grid__item-arrow"></span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </div>
    );
  };

  render() {
    const { activeMember, showJoinOurTeam } = this.state;
    const { active, data, width, joinOurTeam, layout, members } = this.props;

    const joinOurTeamLayout = {
      lg: joinOurTeam.photos.map((m, index) => {
        return {
          i:
            (m.image.childImageSharp && m.image.childImageSharp.fluid.src) ||
            index,
          x: m.lg.x,
          y: m.lg.y,
          w: m.lg.width,
          h: m.lg.height
        };
      }),
      md: joinOurTeam.photos.map((m, index) => {
        return {
          i:
            (m.image.childImageSharp && m.image.childImageSharp.fluid.src) ||
            index,
          x: m.md.x,
          y: m.md.y,
          w: m.md.width,
          h: m.md.height
        };
      }),
      sm: joinOurTeam.photos.map((m, index) => {
        return {
          i:
            (m.image.childImageSharp && m.image.childImageSharp.fluid.src) ||
            index,
          x: m.sm.x,
          y: m.sm.y,
          w: m.sm.width,
          h: m.sm.height
        };
      }),
      xs: joinOurTeam.photos.map((m, index) => {
        return {
          i:
            (m.image.childImageSharp && m.image.childImageSharp.fluid.src) ||
            index,
          x: m.xs.x,
          y: m.xs.y,
          w: m.xs.width,
          h: m.xs.height
        };
      })
    };
    let rowHeight = 10;
    if (width < 768) {
      rowHeight = 1;
    } else if (width < 1040) {
      rowHeight = 5;
    } else if (width < 1300) {
      rowHeight = 6;
    }

    let joinOurTeamRowHeight = 10;
    if (width < 500) {
      joinOurTeamRowHeight = 4;
    } else if (width < 600) {
      joinOurTeamRowHeight = 10;
    } else if (width < 768) {
      joinOurTeamRowHeight = 15;
    } else if (width < 1040) {
      joinOurTeamRowHeight = 10;
    } else if (width < 1330) {
      joinOurTeamRowHeight = 20;
    }

    return (
      <div
        className="section fp-auto-height fp-section fp-table"
        data-anchor="team"
        data-fp-styles="null"
      >
        zz
        <div className="fp-tableCell">
          <div className="fp-scroller fp-scroller-custom">
            <section className="module module--light">
              <div className="wrapper">
                <div className="module__body">
                  <div className="module__content module__content--visible">
                    <div className="module__content-inner">
                      <h2
                        className={`module__title mobile-hidden fade-in duration-400 delay-700 aos-init ${
                          active ? "aos-animate" : ""
                        }`}
                      >
                        about
                      </h2>
                      <h2 className="module__title mobile-visible aos-init aos-animate aos-animate">
                        team
                      </h2>
                      <p
                        className={`fade-up duration-400 delay-700 aos-init ${
                          active ? "aos-animate" : ""
                        }`}
                      >
                        <span>{data.description}</span>
                      </p>

                      {/* this is start */}
                      <div className="module__wide-block">
                        {this.teamMembers(rowHeight)}
                        <div className="grid__item grid__item--text">
                          <span
                            className="grid__cta"
                            data-toggle="modal"
                            onClick={() =>
                              // this.onJoinOurTeam()
                              navigate("/JoinOurTeam/", {
                                state: {
                                  joinOurTeam,
                                  joinOurTeamRowHeight,
                                  joinOurTeamLayout
                                }
                              })
                            }
                          >
                            Join our team
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 30 30"
                            >
                              <title>Asset 48</title>
                              <g data-name="Layer 2">
                                <g>
                                  <path
                                    className="cls-1"
                                    d="M12.12,11.72V0h5.76V11.72H30v6.5H17.88V30H12.12V18.22H0v-6.5Z"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </div>
                        {/* <div style={{height: '1000px'}}></div> */}
                      </div>
                    </div>
                    {/* --------- */}
                  </div>

                  {/* join our team */}

                  <div
                    className={`module module--light module--modal ${
                      showJoinOurTeam ? "module--modal-on" : ""
                    }`}
                  >
                    <div className="wrapper">
                      <div className="module__content">
                        <h2 className="module__title aos-init">
                          {joinOurTeam.title}
                        </h2>
                        <span
                          className="module__close-btn"
                          style={{ cursor: "pointer" }}
                          onClick={() => this.onClose()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                          >
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
                            {/* <ResponsiveReactGridLayout
                                  className="layout"
                                  style={{backgroundColor: '#FFFFFF'}}
                                  layouts={joinOurTeamLayout}
                                  cols={{lg: 60, md: 60, sm: 30, xs: 30, xxs: 30}}
                                  rowHeight={joinOurTeamRowHeight}
                                  breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                >
                                  {joinOurTeam.photos.map(photo => (<div key={photo.image.childImageSharp && photo.image.childImageSharp.fluid.src} className="grid__item" style={{backgroundColor: '#FFFFFF'}}>
                                    <img alt="team" className="grid__imga" src={photo.image.childImageSharp && photo.image.childImageSharp.fluid.src} />
                                  </div>))}
                                </ResponsiveReactGridLayout> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {active && !active && (
            <div className="iScrollVerticalScrollbar iScrollLoneScrollbar iScrollVerticalScrollbar-custom">
              <div className="iScrollIndicator iScrollIndicator-custom-4"></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default TeamSection;
