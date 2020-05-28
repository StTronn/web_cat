import React from "react";
import KeyWord from "./KeyWord";
import GoogleTrends from "./GoogleTrends";

class KeyWordsCard extends React.Component {
  render() {
    let { keywords, flip, handleFlip } = this.props;
    if (!flip) {
      return (
        <div className="animate__animated animate__fadeInDown max-w-md rounded overflow-hidden shadow-lg mx-4 my-6 ">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Key Words</div>
          </div>
          <div className="px-6 py-4">
            {keywords.map((word, i) => (
              <KeyWord key={i} word={word} />
            ))}
          </div>
          <button
            onClick={handleFlip}
            className="bg-teal-500 p-3 flex w-full text-center text-white items-center justify-between transition hover:bg-teal-700"
          >
            Learn More
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <GoogleTrends word={keywords} />
          <button
            style={{ width: "40px", gridArea: "b" }}
            onClick={handleFlip}
            class="bg-teal-500  hover:bg-teal-700 text-white font- py-2 px-4 rounded-full"
          >
            X
          </button>
        </div>
      );
    }
  }
}
export default KeyWordsCard;
