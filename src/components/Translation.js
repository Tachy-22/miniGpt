import PersonImg from "../Assets/person-button-svgrepo-com.svg";
import RobotImg from "../Assets/robot-svgrepo-com.svg";
function Translation({
  input,
  handleTextInput,
  handleReset,
  handleSubmit,
  revealButtons,
  updatedResponseArray,
  settings,
}) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  gap-6 w-full lg:h-full  h-fit   relative p-10 pt-16">
      <div
        className={`${
          settings ? "bg-white text-black" : "bg-gray-800"
        }  rounded-lg border text-xl w-full  flex  flex-col  p-5`}
      >
        <div className="flex items-start h-full">
          <div className="flex items-center">
            <picture className="flex justify-center w-16 mx-5 p-1 bg-gray-500 rounded-full">
              <img src={PersonImg} alt="personImg" />
            </picture>
            <p>:</p>
          </div>
          <div className="w-full h-full ">
            <textarea
              onChange={handleTextInput}
              value={input}
              className="bg-inherit flex flex-wrap text-xl  p-4 text-xl outline-none  w-full h-full "
              autoFocus={true}
            ></textarea>
          </div>
        </div>

        {revealButtons && (
          <div className="flex space-x-2 m-3 justify-end">
            <button
              onClick={handleSubmit}
              className="bg-teal-500 hover:bg-white hover:text-teal-500 p-2 rounded-lg"
            >
              Submit
            </button>
            <button
              onClick={handleReset}
              className=" border border-teal-500  hover:border-white p-2 rounded-lg"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      <div className="overflow-y-auto max-h-full space-y-4">
        {updatedResponseArray.map((item, index) => {
          return (
            <div
              key={index}
              className={`text-xl min-h-fit rounded-lg border ${
                settings ? "bg-white text-black" : "bg-gray-500 "
              }  w-full md:flex-nowrap flex flex-wrap  items-start p-5`}
            >
              <div className="flex items-center">
                <picture className="flex justify-center w-16 mx-5 p-2 bg-gray-500 rounded-full border border-4">
                  <img src={RobotImg} alt="robotImg"></img>
                </picture>
                :
              </div>

              <div className={`flex flex-wrap  h-full  w-full flex-col`}>
                {item?.map((lines, index2) => {
                  return (
                    <div className="flex break-words w-fit m-4">
                      <p
                        key={index2}
                        className={`flex  text-decoration underline underline-offset-8 w-fit  robot_font  hover:backdrop-brightness-50`}
                      >
                        {lines}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Translation;
