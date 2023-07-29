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

function QuestionBox (props:any){
  const [expanded, setExpanded] = useState(false);
  return (
    <Box width = "100%" bg = "#F5F5F5" borderRadius = "10">
      <Box fontSize="sm" py = "20px" px = "20px" width = "100%" height = {expanded?"auto":"120px"}>
        <HStack width = "100%">
          <Text>
            {props.title||"Question title goes here"}
          </Text>
          <Badge bg = "#6F6F6F">
            <Text color = "white">
            Category
            </Text>
          </Badge>
        </HStack>
        <Box mt = "15px" height = {expanded?"auto":"20px"}>

          <Text color="#6F6F6F" noOfLines={[1, 2]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis mi vitae leo dignissim porttitor. Phasellus vitae nibh nec lacus iaculis ultricies vel ut est. Donec fermentum blandit euismod. Vivamus elementum nisl nisl, sit amet tincidunt erat maximus ac. Pellentesque iaculis ante urna, ut lacinia odio aliquam nec. Etiam tempor scelerisque justo, nec convallis felis venenatis et. Nullam pretium orci eros, a hendrerit magna gravida cursus.


          </Text>
        </Box>
      </Box>
    </Box>
  )
}
export default QuestionBox