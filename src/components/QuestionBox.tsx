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
  HStack
} from "@chakra-ui/react"
import parse from 'html-react-parser';
function QuestionBox ({question}:{question:any}){
  const [expanded, setExpanded] = useState(false);

  return (
    <Box width = "100%" bg = "#F5F5F5" borderRadius = "10" onClick={() => setExpanded(!expanded)}>
      <Box fontSize="sm" py = "20px" px = "20px" width = "100%" height = {expanded?"auto":"120px"}>
        <HStack width = "100%">
          <Text noOfLines={expanded?[]:[1]} width = {expanded?"auto":"30%"}>
            {question.title||"Question title goes here"}
          </Text>
          {question.tags.length >0?
          <Badge bg = "#6F6F6F">
            <Text color = "white">
            {question.tags[0]}
            </Text>
          </Badge>:<div/>}
        </HStack>
        <Box mt = "15px" overflowY="hidden" color="#6F6F6F" height = {expanded?"auto":"20px"}>
        <Text>
        {parse(`${question.body}`)}
          </Text>

          
        </Box>
      </Box>
    </Box>
  )
}
export default QuestionBox