import * as React from "react"
import {useState} from "react"
import {
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
  Flex,
  Badge,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea
} from "@chakra-ui/react"
import parse from 'html-react-parser';
import '@fontsource/poppins/400.css';
import OpenAI from "../classes/OpenAI"

function QuestionBox ({question,AI}:{question:any,AI:OpenAI}){
  const [expanded, setExpanded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()

  /*const theme= extendTheme({
  
        heading: `'Bungee', sans-serif`,
        body: `'Poppins', sans-serif`,
      
})*/
  let [value, setValue] = React.useState('')

  let handleInputChange = (e:any) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  async function generateAI(){
    console.log("AI STUFF")
    try {
      console.log("AI STUFF")
      
      const str = await AI.complete(question.body);
      console.log(str);
      setValue(str);
    } catch (error:any) {
      console.error('Error generating AI:', error.message);
    }
  }
  return (
    <>
    <Box width = "100%" bg = "#F5F5F5" borderRadius = "10" onClick={onOpen}>
      <Box fontSize="sm" py = "20px" px = "20px" width = "100%" height = {expanded?"auto":"120px"}>
        <HStack width = "100%">
          <Text as='b' noOfLines={expanded?[]:[1]} width = {expanded?"auto":"30%"}>
            {question.title||"Question title goes here"}
          </Text>
          {question.tags!=null&&question.tags.length>0?
          <Badge bg = "#6F6F6F">
            <Text fontFamily = "Poppins" color = "white">
            {question.tags[0]}
            </Text>
          </Badge>:<div/>}
          <Text>
            {`Anwsers: ${question.answer_count}`}
          </Text>
        </HStack>
        <Box mt = "15px" overflowY="hidden" color="#6F6F6F" height = {expanded?"auto":"25px"}>
        <Text>
        {parse(`${question.body}`)}
          </Text>

          
        </Box>
      </Box>
    </Box>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth = "1000px">
          <ModalHeader>{question.title||"Question title goes here"}
          <HStack>
          {question.tags.map((tag:any) => (
            <Badge bg = "#6F6F6F"><Text fontFamily = "Poppins" color = "white">{tag}</Text> </Badge>
          ))} 
          </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box overflowX="scroll">
            <Text>
              {parse(`${question.body}`)}
            </Text>
            </Box>
            <br/>
            <br/>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder='Here is a sample placeholder'
              size='md'
              resize="vertical"
              minHeight = "100px"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} isDisabled={!(value.length>=10)}>
              Post
            </Button>
            <Button colorScheme='green' onClick={() => generateAI()}>Generate AI</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default QuestionBox