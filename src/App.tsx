import * as React from "react"
import {useEffect, useState} from "react"
import axios from 'axios';
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
  Button,

} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import '@fontsource/bungee';
import '@fontsource/poppins/800.css';
import QuestionBox from "./components/QuestionBox";
import ApiClient from "./classes/ApiClient"
import OpenAI from "./classes/OpenAI"
export const App = () => {
  useEffect(() => {
    // Replace these values with your actual OAuth2 credentials
   const accessTokenParam = window.location.hash
      .substring(1) // Remove the '#' symbol from the URL fragment
      .split('&')
      .find((param) => param.startsWith('access_token='));

    if (accessTokenParam) {
      // Extract just the access token value
      const accessToken = accessTokenParam.split('=')[1]//.replace('))', '');
      console.log(accessToken);
      localStorage.setItem('access_token', accessToken);
      return; // Skip the redirection logic
    }
    // Create the authorization URL with query parameters
    const authorizationUrl = "https://stackoverflow.com/oauth/dialog?client_id=26882&scope=read_inbox,write_access,no_expiry&redirect_uri=http://localhost:3000/";

    // Redirect the user to the authorization URL immediately
    window.location.replace(authorizationUrl);
  }, []);
  const theme = extendTheme({
  fonts: {
      heading: `'Bungee', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
  })
  const [questions, setQuestions] = useState([{}]);
  const myAI = new OpenAI();
  const apiAuth = "/oauth/dialog?client_id=26882&scope=read_inbox,write_access,no_expiry&redirect_uri=http://localhost:3000/"
  const key = "DoslPho2rbSdieSWFDdclA(("
  async function qSearch(){
    try {
        const response = await axios.get("https://api.stackexchange.com/2.3/questions?key=DoslPho2rbSdieSWFDdclA((&order=desc&sort=creation&site=stackoverflow&filter=!)rmjGbaWZ(Y9-veJ0_)M");
        if (!response.data.items) {
          throw new Error('Items not found in response data.');
        }
        console.log(response.data);
        setQuestions(response.data.items);
      } catch (error:any) {
        console.error('Error fetching data:', error.message);
      }
  //"https://api.stackexchange.com/2.3/questions?key=DoslPho2rbSdieSWFDdclA((&order=desc&sort=creation&site=stackoverflow"
    //StackAPI.get("2.3/questions?key=DoslPho2rbSdieSWFDdclA((&order=desc&sort=creation&site=stackoverflow");
  }
  return(
  <ChakraProvider theme={theme}>
  <Container maxW='70%' py="150px" height="inherit">
    <Heading pb = "50px">
      Search the stack
    </Heading>
    
    <Button bg="blue.300" onClick={() => qSearch()}>
      <Text color = "white">
        Find Questions
      </Text>
    </Button>
    
    <VStack pt="100px">

      {questions.length>1?questions.map((question) => (
        <QuestionBox question={question} AI = {myAI}/>
      )):<div/>}
      
      
    </VStack>
    </Container>
  </ChakraProvider>
  )
}
