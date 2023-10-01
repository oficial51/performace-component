import "./App.css";
import Skills from "./components/Skills";
import ray from "./assets/images/icon-reaction.svg";
import brain from "./assets/images/icon-memory.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

function App() {
  return (

      <main className="flex items-center center flex-col md:shadow-xl rounded-b-4xl md:flex-row justify-center">
        <div className="h-[355px] w-screen md:h-[515px] md:w-[370px] flex flex-col items-center rounded-b-4xl bga">
          <h2 className="text-[#CCC2FF] relative top-[30px] md:top-[25px] font-bold md:text-[24px] text-[20px] text-center">
            Your Result
          </h2>
          <div className="w-[140px] md:w-[200px] md:h-[200px] h-[140px] flex justify-center flex-col items-center relative top-[51px] md:[top-31px] rounded-full bgLinear">
            <p className="text-[44px] md:text-[65px] font-extrabold text-white">76</p>
            <p className="text-[#CCC2FF] md:font-bold md:text-[18px]">of 100</p>
          </div>
          <div className="top-[65px] md:top-[85px] w-[265px] h-[80px] flex flex-col items-center relative">
            <h3 className="text-white font-bold md:text-[34px]  text-[24px]">Great</h3>
            <p className="text-center md:mt-4 md:text-[19px] text-[#CCC2FF] ">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="h-[455px] md:ml-[40px] md:w-[330px] w-[315px]">
          <h3 className="text-[#0C1427] my-[29px] md:text-[24px] md:font-bold md:mt-[6px]">Summary</h3>
          <Skills icon={ray} bg="bgred" number="80" color="textred"></Skills>
          <Skills
            icon={brain}
            bg="bgyellow"
            number="92"
            color="textyellow"
          ></Skills>
          <Skills
            icon={verbal}
            bg="bggreen"
            number="61"
            color="textgreen"
          ></Skills>
          <Skills
            icon={visual}
            bg="bgblue"
            number="72"
            color="textblue"
          ></Skills>
          <div>
            <button className="text-white md:w-[290px] button mt-[26px] w-[315px] h-[56px] rounded-full text-center">
              Continue
            </button>
          </div>
        </div>
      </main>

  );
}

export default App;
