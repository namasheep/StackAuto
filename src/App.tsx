import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  extendTheme,
  Container,
  Heading,
  Button
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import '@fontsource/bungee';
import '@fontsource/poppins/800.css';
import QuestionBox from "./components/QuestionBox";

export const App = () => {
  const theme = extendTheme({
  fonts: {
    heading: `'Bungee', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
})
  return(
  <ChakraProvider theme={theme}>
  <Container maxW='70%' py="150px" height="inherit">
    <Heading pb = "50px">
      Search the stack
    </Heading>
    <Button bg="blue.300">
      <Text color = "white">
        Find Questions
      </Text>
    </Button>
    <Box pt="100px">
      <QuestionBox/>
    </Box>

    </Container>
  </ChakraProvider>
)
}
