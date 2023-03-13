import Translation from "./Translation";
import Header from "./Header";
import { useState } from "react";

function OptionSelection({
  Categories,
  selectCategory,
  catSelect,
  handleTextInput,
  input,
  handleReset,
  handleSubmit,
  revealButtons,
  updatedResponseArray,
}) {
  const [settings, setSettings] = useState(false);
  const changeSettings = () => {
    setSettings(!settings);
  };
  return (
    <>
      {catSelect ? (
        <div className="w-full h-screen">
          <Header changeSettings={changeSettings} settings={settings}></Header>
          <Translation
            input={input}
            handleTextInput={handleTextInput}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            revealButtons={revealButtons}
            updatedResponseArray={updatedResponseArray}
            settings={settings}
          ></Translation>
        </div>
      ) : (
        <>
          <h1 className="font-bold title_font text-5xl m-5 text-teal-200">
            REACT AI APP
          </h1>
          <div className="grid grid-cols-2 ">
            {Categories.map((categories, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => {
                      selectCategory(categories.option);
                    }}
                    className="flex hover:text-gray-900 hover:bg-blue-100 text-2xl flex-wrap  rounded-md flex-col p-5 m-2 border items-center "
                  >
                    <h2 className="text-3xl hover:text-teal-900">
                      {categories.name}
                    </h2>
                    <p className="text-center">{categories.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default OptionSelection;
