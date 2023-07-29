import { VStack, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import SurveryHome from './SurveyHome'

let videoArray =[
  'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',  
]
 
const Videos = () => {
  const [video, setVideo]= useState(videoArray[0])

  return (
    <VStack spacing={4} m={4} align={['center', 'center', 'initial']}>
    <ReactPlayer width="100%" playing={true} controls url={video} style={{ height: '70vh' }} />
    <VStack width="100%">
      <Heading fontSize={['xl', '2xl', '3xl']}>Breast Canser Tutorial</Heading>
      <Text textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates repudiandae ex, itaque necessitatibus consectetur iure adipisci incidunt nobis autem!</Text>
    </VStack>
    <SurveryHome isExpanded={false} />
  </VStack>
  )
}

export default Videos