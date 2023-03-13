import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import { Categories } from "./Assets/ChatBotCategories";
import { useState } from "react";

function App() {
  const configuration = new Configuration({
    organization: "org-QJaTbGUUv2CbgM3EojHRd6Td",
    
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const [revealButtons, setRevealButtons] = useState(false);
  const [input, setInput] = useState("");
  const [option, setOption] = useState({});
  const [catSelect, setCatSelect] = useState(false);
  const [responseArray, setResponseArray] = useState([]);
  const [updatedResponseArray, setUpdatedResponseArray] = useState([]);

  const handleTextInput = (event) => {
    setInput(event.target.value);
    setRevealButtons(true);
  };

  const selectCategory = (option) => {
    // console.log(option);
    setOption(option);
    setCatSelect(!catSelect);
  };
  const handleSubmit = async () => {
    try {
      setResponseArray([]);
      setRevealButtons(false);
      let fullOptionObj = { ...option, prompt: input };
      // console.log(fullOptionObj);
      const response = await openai.createCompletion(fullOptionObj);
      // console.log(response);
      // console.log("response", response.data.choices[0].text);

      const responseArray = response.data.choices[0].text.split("\n");
      setResponseArray(responseArray);
      // console.log("rr", responseArray);
      setUpdatedResponseArray([
        ...updatedResponseArray,
        response.data.choices[0].text
          .split("\n")
          .filter((lines) => lines.length !== 0),
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("rr2", responseArray, updatedResponseArray);
  const handleReset = () => {
    setInput("");
    setRevealButtons(false);
    setUpdatedResponseArray([]);
  };
  return (
    <div className=" realtive w-full flex flex-col justify-center items-center">
      <OptionSelection
        Categories={Categories}
        selectCategory={selectCategory}
        catSelect={catSelect}
        handleTextInput={handleTextInput}
        input={input}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        revealButtons={revealButtons}
        updatedResponseArray={updatedResponseArray}
      ></OptionSelection>
    </div>
  );
}

export default App;
