import React from "react";

import HomeSection from "../sections/HomeSection/HomeSection";
import TechnologySection from "../sections/TechnologySection/TechnologySection";
import BenefitSection from "../sections/BenefitSection/BenefitSection";
import IndustrySection from "../sections/IndustrySection/IndustrySection";
import AboutSection from "../sections/AboutSection/AboutSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import TeamSection from "../sections/TeamSection/TeamSection";

import ReactFullpage from "@fullpage/react-fullpage";

import LeftNav from "../sections/LeftNav/LeftNav";
import PropTypes from "prop-types";

const pluginWrapper = () => { };

class IndexPageTemplate extends React.Component {
  constructor(props) {
    super(props);

    let nextX = 0;
    let nextY = 0;
    const newTeamMembers = props.data.about.team.members.filter(
      m => m.pinToTop
    );
    const restTeamMembers = props.data.about.team.members.filter(
      m => !m.pinToTop
    );

    while (restTeamMembers.length > 1) {
      const idx = Math.floor(Math.random() * restTeamMembers.length);
      newTeamMembers.push(restTeamMembers[idx]);
      restTeamMembers.splice(idx, 1);
    }

    newTeamMembers.push(restTeamMembers[0]);
    const layout = {
      lg: newTeamMembers.map(m => {
        let newWidth = Math.ceil(Math.random() * 2) * 12;
        if (newWidth === 24) {
          newWidth = Math.random() > 0.5 ? 24 : 12;
        }
        const width = nextX === 48 ? 12 : newWidth;
        const newMember = {
          i: m.key,
          x: nextX,
          y: nextY,
          w: width,
          h: width
        };
        if (nextX + width > 48) {
          nextX = 0;
          nextY += 12;
        } else {
          nextX = nextX + width;
        }
        return newMember;
      }),
      xs: newTeamMembers.map((m, index) => {
        const newMember = {
          i: m.key,
          x: (index % 3) * 20,
          y: Math.floor(index / 3) * 20,
          w: 20,
          h: 20
        };
        return newMember;
      })
    };

    this.state = {
      active: 0,
      showLeftNav: true,
      width: 0,
      randomImageIdx: Math.floor(props.data.images.length * Math.random()),
      teamLayout: layout,
      newTeamMembers
    };
  }

  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleLeave = (origin, destination) => {
    let newState = {
      active: destination.index,
      showLeftNav: true
    };

    if (destination.index === 0) {
      this.props.showNavbar(true);
    } else if (origin.index === 0) {
      this.props.showNavbar(false);
    }

    this.setState(newState);
  };

  render() {
    const {
      active,
      showLeftNav,
      width,
      randomImageIdx,
      teamLayout,
      newTeamMembers
    } = this.state;
    const { data, hideModal } = this.props;
    console.log(randomImageIdx);

    if (typeof window !== "undefined") {
      return (
        <body>
          <div>
            <ReactFullpage
              scrollingSpeed={1000} /* Options here */
              // autoScrolling={false}
              // navigation={true}
              sectionsColor={[
                "#000000",
                "#000000",
                "#000000",
                "#000000",
                "#000000",
                "#000000",
                "#000000"
              ]}
              scrollOverflow={true}
              // pluginWrapper={pluginWrapper}
              onLeave={this.handleLeave}
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <div>
                      <div active className="section s1" style={{ backgroundColor: 'red' }}>1</div>
                      <div className="section">2</div>
                      <div className="section">3</div>

                      <HomeSection
                        data={data}
                        active={active === 0}
                        randomImageIdx={randomImageIdx || 0}
                      />
                      <TechnologySection
                        data={data.technology.overview}
                        active={active === 1}
                        onShowLearnMore={() => this.props.showLearnMore()}
                      />
                      <BenefitSection
                        data={data.technology.benefits}
                        active={active === 2}
                        onShowLearnMore={() => this.props.showLearnMore()}
                      />
                      <IndustrySection
                        data={data.technology.industries}
                        active={active === 3}
                        onShowLearnMore={() => this.props.showLearnMore()}
                      />
                      <AboutSection
                        data={data.about.overview}
                        active={active === 4}
                      />
                      <TeamSection
                        layout={teamLayout}
                        data={data.about.team}
                        members={newTeamMembers}
                        joinOurTeam={data.joinOurTeam}
                        width={width}
                        active={active === 5}
                        hideModal={hideModal}
                      />
                      <ContactSection
                        data={data.investors}
                        width={width}
                        active={active === 6}
                        onShowForm={v => this.setState({ showLeftNav: v })}
                      />
                    </div>

                  </ReactFullpage.Wrapper>
                );
              }}
            />
            {showLeftNav && <LeftNav active={active} />}
          </div>
        </body>
      );
    }

    return null;
  }
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  showNavbar: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

export default IndexPageTemplate;
