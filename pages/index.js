/** @jsxRuntime classic */
/** @jsx jsx */
import { 
  jsx,
  Box,
  Heading,
  Text,
  Button, 
  Image,
  Container,
  Grid,
  Card,
  Flex,
  Link
} from 'theme-ui';
import Event from "../components/event"
import React from 'react';

const Index = (props) => (
  <>
    <Box 
      bg="sunken" 
      sx={{
        width: '100%',
        textAlign: 'center',
        backgroundImage: theme => `radial-gradient(${theme.colors.slate}, ${theme.colors.darkless})`
      }}>
      <Container as="section" py={6} variant="copy" {...props}>
        <Image
          src="/logo.png"
          alt="hillsHacks Logo"
          width={600}
          sx={{
            userDrag: 'none',
            WebkitUserDrag: 'none'
          }}
        />
        <Heading mt={16} variant="subtitle" color="white">There's never been a better time to build. <b>And the world has never needed it more than now.</b></Heading>
        <Heading variant="subtitle" color="white">June 5, 2021</Heading>
        <Button variant="primary" as="a" target="_blank" my={2}
  href="https://docs.google.com/forms/d/e/1FAIpQLScEaeNmtv_REsOml_Odf0YShWCTSifJbTEXVpzvAyvCXTrzMw/viewform?usp=sf_link">Register</Button>
      </Container>
    </Box>
    <Container as="section" py={4} variant="copy" {...props}>
      <Heading variant="headline">This is not your typical hackathon.</Heading>
      <Text as="p" sx={{fontSize: 2}} mb={3}><b>hillsHacks was born with a mission:</b> to show that computer science is something anyone can learn. It's more than memorizing technical jargon and stuffing code into machines. CS is for innovators, creators, problem solvers, artists, and <i>you</i>.</Text>
      <Text as="p" sx={{fontSize: 2}} mb={3}>Rather than leave you alone expecting a full-fledged product launch at the end of the day, we'll guide you through the learning process with workshops from Watchung Hills alumni. Plus, we'll provide you one-on-one mentorship and an opportunity to listen in and ask questions about tech during our Panel Q&A session. Deviating from the traditional hackathon, you'll implement your ideas in our design challenge without needing to code, so when you leave you'll be ready to put your new-found skills into action.</Text>
      <Text variant="lead">This is the fourth iteration of hillsHacks, Watchung Hills' premier hackathon open to grades 6 through 12.</Text>
      <br/>
    </Container>
    <Container as="section" py={4} {...props}>
      <Heading variant="headline">FAQ</Heading>
      <h2>Why come to hillsHacks?</h2>
      <p>Can you spend a day without using some form of technology developed in the last 5 years? It would probably be difficult - technology has completely changed the way we live our lives. Regardless of your experience, you will learn something new at hillsHacks about how computer science is being used all around us - often in things we take for granted! All students grade 6 and up are welcome.</p>

      <h2>Where and when will the event take place?</h2>
      <p>We're taking hillsHacks virtually this year and will be using Zoom and email as our sole means of communication. Even though we can't physically gather, we'll strive for an authentic experience that retains the spirit of hacking!</p>
      <p>The event will take place on <b>Saturday, June 5, from 10:00 AM to 4:30 PM.</b></p>

      <h2>What if I don’t know anything about coding or computer science?</h2>
      <p>No problem! We highly encourage beginners to come, and our workshops will give you opportunities to learn about fundamental CS concepts. After creating an idea for the design challenge, you'll be ready to implement it on your own!</p>

      <h2>I’m an expert at coding. What do I get out of this event?</h2>
      <p>Take a look at some of our advanced workshops! Also, we recommend you to actively engage during our Panel Q&A session (this applies to beginners too!)</p>
      
      <h2>How much does this cost?</h2>
      <p>hillsHacks is completely free!</p>
      <h2>When do I have to register by?</h2>
      <p>The signup form will remain open until June 5th, the day of the event. However, we encourage you to sign up early so we can get a better feel of who will be attending.</p>
      <br/>
    </Container>
    <Container as="section" variant="copy" sx={{textAlign: "center"}} py={4} {...props}>
      <Heading variant="headline" mb={4}>Schedule</Heading>
      <Text>Coming soon! Check back later for details.</Text>
    </Container>
    <Container as="section" py={4} {...props}>
      <Card>
        <Flex sx={{flexWrap: 'wrap'}}>
          <Box sx={{flex: '1 1 auto'}}>
            <Heading as="h1" variant="headline">So...what are you waiting for?</Heading>
            <Heading variant="subtitle">Registration is free and only takes a minute!</Heading>
          </Box>
          <Box sx={{alignSelf: "center"}}>
          <Button variant="primary" as="a" target="_blank"  mr={4}
  href="https://docs.google.com/forms/d/e/1FAIpQLScEaeNmtv_REsOml_Odf0YShWCTSifJbTEXVpzvAyvCXTrzMw/viewform?usp=sf_link">Register Now</Button>
          </Box>
        </Flex>
      </Card>
    </Container>
    <footer sx={{textAlign: "center", padding: 4}}>
      <Text as="p" mb={2} sx={{fontSize: 1}}>Created with &#x3C;3 by hillsHacks. See the <Link href="https://github.com/googol88/hillshacks-iv">source</Link>.</Text>
      <Text as="p" sx={{fontSize: 1, color: "muted"}}>© Copyright 2020 hillsHacks</Text>
    </footer>
  </>
)

export default Index;

/*
navbar?
cards with perks
schedule
register (put in box)
footer with link to source
*/