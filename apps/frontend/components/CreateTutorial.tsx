import { useEffect, useState } from "react";

const promptPrefix: string = "Give me a tutorial around 1000 words long about the topic: ";

const SolanaTutorial = (props: {
  topic: string
}) => {

  const [tutorialText, setTutorialText] = useState<string>("");

  async function getTutorial(topic: string){
    const fullPrompt = promptPrefix + topic;
    const t = await SendPrompt(yourPrompt).catch(console.error);
    return t;
  }

  useEffect(() => {
    const tutorial =  getTutorial(props.topic)
    .then((tutorial: string) => {
      setTutorialText(tutorial);
    })
    .catch(err => {
      console.log(err);
    });
  })

  return (
    <div className="p-6">
      <div className="h-[600px] overflow-y-auto border rounded-xl border-gray-400 shadow-md p-6 text-left font-sans">
        <div className="prose prose-lg max-w-none">
          {tutorialText.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return <h2 key={index} className="text-3xl font-bold mb-4">{line.replace('# ', '')}</h2>;
            } else if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-semibold mb-3">{line.replace('## ', '')}</h2>;
            } else if (line.startsWith('- **')) {
              return <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />;
            } else if (line.startsWith('- ')) {
              return <li key={index} className="list-disc ml-6 mb-1">{line.replace('- ', '')}</li>;
            } else {
              return <p key={index} className="mb-2">{line}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

// Define types for the questions
interface Question {
  question: string;
  options: string[];
  correct_answer: string;
}

interface ApiResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

interface MultipleChoiceQuestions {
  questions: Question[];
}

// Function to extract the JSON content from the response
function extractJsonFromResponse(response: string): MultipleChoiceQuestions | null {
  // Find the start of the JSON part (after 'Multiple-Choice Questions (JSON format):')
  const jsonStartIndex = response.indexOf('Multiple-Choice Questions (JSON format):') + 41;

  // Extract the JSON string
  const jsonString = response.slice(jsonStartIndex).trim();

  try {
    // Parse the JSON string to an object
    const parsedJson: MultipleChoiceQuestions = JSON.parse(jsonString);
    return parsedJson;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

async function SendPrompt(prompt: string) {
  const response = await fetch('http://localhost:3001/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${await response.text()}`);
  }

  const data = await response.json();
  console.log(data);
  const strResponse = data.choices[0].message.content;
  
  // Extract the multiple-choice questions from the response
  const questionsData = extractJsonFromResponse(strResponse);

  if (questionsData) {
    console.log("Extracted questions:", questionsData);
  } else {
    console.log("Failed to extract questions.");
  }

  return strResponse;
}

// Example usage
const yourPrompt = `
Please create a tutorial about the topic Solana for around 1000 words. The tutorial should be in a string format and formatted well such that it hash bold and italic and according font size where necessary. 
Additionally, please generate multiple-choice questions related to React and TypeScript. 
The questions should be provided in a JSON format. 
The JSON should include the question, options, and the correct answer.
`;

export default SolanaTutorial;