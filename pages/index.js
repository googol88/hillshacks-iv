/** @jsxRuntime classic */
/** @jsx jsx */
import { 
  jsx,
  Box,
  Heading,
  Text,
  Button, 
  Container
} from 'theme-ui'

const Index = (props) => (
  <Container as="main" py={4} variant="copy" {...props}>
    <Box bg="slate" color="white">
      <Heading
        variant="ultratitle">
          hillsHacks IV
      </Heading>
    </Box>

    <Heading variant="subtitle">There's never been a better time to build. <strong>And the world has never needed it more than now.</strong></Heading>

    <Text variant="lead">This is the fourth iteration of hillsHacks, Watchung Hills' premier hackathon open to grades 7 through 12.</Text>
    <br/>
    <Button as="a" mt={16}
href="https://github.com/lachlanjc/next-theme-starter">Register</Button>
  </Container>
)

export default Index;

/*export default props => <Container as="main" py={4} variant="copy" {...props} />

# hillsHacks IV

There's never been a better time to build. And the world has never needed it more than now.

This is the fourth iteration of hillsHacks, Watchung Hills' premier hackathon open to grades 7 through 12.

[@lachlanjc/next-theme-starter](https://github.com/lachlanjc/next-theme-starter)

<Button as="a"
href="https://github.com/lachlanjc/next-theme-starter">GitHub</Button>*/