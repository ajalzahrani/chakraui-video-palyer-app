import 'survey-core/defaultV2.min.css';
import { Heading, VStack } from '@chakra-ui/react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';
import axios from 'axios';

const surveyJson = {
  elements: [
    {
      name: 'name',
      title: 'Enter your first name:',
      type: 'text',
    },
    {
      name: 'stampno',
      title: 'Type in your stamp:',
      type: 'text',
    },
    {
      name: 'satis',
      title: 'How would you describe satsfiction of the content',
      type: 'radiogroup',
      choices: [
        { value: 5, text: 'Fully satisfying' },
        { value: 4, text: 'Generally satisfying' },
        { value: 3, text: 'Neutral' },
        { value: 2, text: 'Rather unsatisfying' },
        { value: 1, text: 'Not satisfying at all' },
      ],
    },
  ],
};

export default function SurveryHome(isExpanded) {

  const survey = new Model(surveyJson);
  
  const surveyComplete = useCallback(sender => {
    post_survey(sender.data);
  }, []);
  
  survey.onComplete.add(surveyComplete);
  
  return (
    <VStack>
      <Heading fontSize={['xl', '2xl', '3xl']}>Your opinion matter !</Heading>
      <Survey model={survey} />;
    </VStack>
  );
}

async function post_survey(data) {
  try {
      console.log(data);
      const response = await axios.post('http://localhost:8000/survey', {
        data: data
      }, {
        'Content-Type': 'application/json;charset=UTF-8'
      })

      console.log(response);

    } catch (error) {
      console.log("Error sending to api", error);
    }
}