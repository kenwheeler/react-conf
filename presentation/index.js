// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import styled from 'styled-components';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  bg: require('../assets/bg.jpg'),
  logo: require('../assets/formidable-logo.svg'),
  beavis: require('../assets/beavis.gif'),
  disgusting: require('../assets/disgusting.jpg'),
  rn: require('../assets/react-native.png'),
  cli: require('../assets/cli.gif'),
  gamekit: require('../assets/gamekit.gif'),
  westworld: require('../assets/westworld.png'),
  spectacle: require('../assets/spectacle.gif'),
  music: require('../assets/music.gif')
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const StyledListItem = styled(ListItem)`
  font-family: AvantGardeLT-Bold;
  color: #f0f0f0;
  margin: 0px 0px 20px 0px;
`;

const StrangeTop = styled.span`
  color: #DB0014;
  font-family: AGBenguiatCyrBook;
  vertical-align: top;
  font-size: 11rem;
  letter-spacing: -5px;
`;

const StrangeBottom = styled.span`
  color: #DB0014;
  font-family: AGBenguiatCyrBook;
  vertical-align: top;
  font-size: 9rem;
  letter-spacing: -5px;
`;

const StrangeLarge = styled.span`
  font-size: 13rem;
`;

const StrangeText = styled.span`
  font-family: AvantGardeLT-Bold;
  color: #f0f0f0;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["none"]} theme={theme} progress="bar">
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            <StrangeTop>
              <StrangeLarge>U</StrangeLarge>SIN<StrangeLarge>G</StrangeLarge>
            </StrangeTop>
          </Heading>
          <Heading size={2} caps lineHeight={1} textColor="secondary" style={{margin: "-30px 0px 0px"}}>
            <StrangeBottom>
              React
            </StrangeBottom>
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" style={{fontSize: 36}}>
            <StrangeText>FOR ANYTHING BUT WEBSITES</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Image src={images.logo} width="100%" />
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '7rem', textTransform: 'uppercase'}}>
            <StrangeText>Remember the first time you saw react?</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Image src={images.disgusting} />
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '3rem', margin: "0px 0px 30px 0px", textTransform: 'uppercase'}}>
            <StrangeText>I changed my mind after using it</StrangeText>
          </Text>
          <Image src={images.beavis} />
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text margin="10px 0 0" textColor="tertiary" style={{fontSize: '3rem', margin: "20px 0px", textTransform: 'uppercase'}}>
            <StrangeText>Components are the</StrangeText>
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" style={{fontSize: '7rem', margin: "20px 0px", textTransform: 'uppercase'}}>
            <StrangeText>perfect way</StrangeText>
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" style={{fontSize: '2rem', margin: "20px 0px", textTransform: 'uppercase'}}>
            <StrangeText>to declaratively describe and build</StrangeText>
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" style={{fontSize: '5rem', margin: "20px 0px", textTransform: 'uppercase'}}>
            <StrangeText>almost anything</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Image src={images.rn} width="100%" />
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', textTransform: 'uppercase'}}>
            <StrangeText>Historically, our JS would operate on our markup</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', textTransform: 'uppercase'}}>
            <StrangeText>With React, we own our output</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '3rem', margin: "0px 0px 30px"}}>
            <StrangeText>LETS TALK ABOUT BUILDING SOME</StrangeText>
          </Text>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            <StrangeTop>
              <StrangeLarge>S</StrangeLarge>TRANG<StrangeLarge>E</StrangeLarge>
            </StrangeTop>
          </Heading>
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            <StrangeBottom>
              THANGS
            </StrangeBottom>
          </Heading>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', margin: '0px 0px 30px', textTransform: 'uppercase'}}>
            <StrangeText>Spectacle</StrangeText>
          </Text>
          <Image src={images.spectacle} width="50%" />
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <List>
            <StyledListItem>JSX Based Presentation Library</StyledListItem>
            <StyledListItem>Uses context for theming and control</StyledListItem>
            <StyledListItem>Intercepts React.children and renders</StyledListItem>
            <StyledListItem>Still technically web markup</StyledListItem>
          </List>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', margin: "0px 0px 30px 0px", textTransform: 'uppercase'}}>
            <StrangeText>VICTORY CLI</StrangeText>
          </Text>
          <Image src={images.cli} width="75%" />
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <List>
            <StyledListItem>Uses Victory React Charting Library</StyledListItem>
            <StyledListItem>Victory outputs valid SVG</StyledListItem>
            <StyledListItem>Components get rendered to string</StyledListItem>
            <StyledListItem>SVG is output or converted to png</StyledListItem>
          </List>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '7rem', textTransform: 'uppercase'}}>
            <StrangeText>react-fs-renderer</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <List>
            <StyledListItem>Use JSX to scaffold out files and dirs</StyledListItem>
            <StyledListItem>Traverses component tree</StyledListItem>
            <StyledListItem>Creates fs entries based upon markup</StyledListItem>
          </List>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', margin: "0px 0px 30px 0px", textTransform: 'uppercase'}}>
            <StrangeText>react-game-kit</StrangeText>
          </Text>
          <Image src={images.gamekit} width="75%" />
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <List>
            <StyledListItem>Use JSX to describe game logic</StyledListItem>
            <StyledListItem>Passes tick via context</StyledListItem>
            <StyledListItem>Maintains adjacent physics world with MatterJS</StyledListItem>
          </List>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            <StrangeTop>
              <StrangeLarge>R</StrangeLarge>ende<StrangeLarge>r</StrangeLarge>
            </StrangeTop>
          </Heading>
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            <StrangeBottom>
              less
            </StrangeBottom>
          </Heading>
          <Text textColor="tertiary" style={{fontSize: '3rem', margin: "30px 0px 0px"}}>
            <StrangeText>COMPONENT METHOD</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <List>
            <StyledListItem>Renders a noop element, like a span</StyledListItem>
            <StyledListItem>Output is in browser, but not DOM tree</StyledListItem>
            <StyledListItem>Access to lifecycle methods/updates</StyledListItem>
          </List>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', margin: '0px 0px 30px', textTransform: 'uppercase'}}>
            <StrangeText>react-music</StrangeText>
          </Text>
          <Image src={images.music} width="50%" />
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <List>
            <StyledListItem>Use JSX to write music</StyledListItem>
            <StyledListItem>Web Audio API</StyledListItem>
            <StyledListItem>Context driven node connection</StyledListItem>
            <StyledListItem>Renders to an AudioContext</StyledListItem>
            <StyledListItem>Central scheduler</StyledListItem>
            <StyledListItem>Creates chain of AudioNodes</StyledListItem>
          </List>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            <StrangeTop>
              <StrangeLarge>C</StrangeLarge>usto<StrangeLarge>M</StrangeLarge>
            </StrangeTop>
          </Heading>
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            <StrangeBottom>
              Renderers
            </StrangeBottom>
          </Heading>
          <Text textColor="tertiary" style={{fontSize: '3rem', margin: "30px 0px 0px"}}>
            <StrangeText>VIA INJECTION METHOD</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <List>
            <StyledListItem>React Native</StyledListItem>
            <StyledListItem>react-blessed</StyledListItem>
            <StyledListItem>react-hardware</StyledListItem>
          </List>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', textTransform: 'uppercase'}}>
            <StrangeText>YOU CAN INJECT OVERRIDES INTO REACT INTERNALS</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <CodePane lang="javascript" textSize={24} source={`import ReactInjection from 'react/lib/ReactInjection';

function inject() {
  ReactInjection.NativeComponent.injectGenericComponentClass(
    MyCustomComponentClass
  );
}`}/>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', textTransform: 'uppercase'}}>
            <StrangeText>This allows you to write your own renderer</StrangeText>
          </Text> 
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', textTransform: 'uppercase'}}>
            <StrangeText>FUTURE</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Image src={images.westworld} width="75%" />
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', textTransform: 'uppercase'}}>
            <StrangeText>Fiber: first class custom rendering API</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', textTransform: 'uppercase'}}>
            <StrangeText>You can do all this with react, but should you?</StrangeText>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgDarken={0.25}>
          <Text textColor="tertiary" style={{fontSize: '5rem', textTransform: 'uppercase'}}>
            <StrangeText>Yes. Go Have Fun!</StrangeText>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
