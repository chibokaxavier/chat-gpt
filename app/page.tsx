import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col px-2 h-screen items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex flex-row space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "What is the difference between a Cat and a Dog?"
            </p>
            <p className="infoText"> "What is the color of the Sun ?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT model to use</p>
            <p className="infoText">
              Messages are stored in Firebase's Firestore
            </p>
            <p className="infoText">
              {" "}
              Hot Toast notification when ChatGPT is thinking!{" "}
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate wrong information{" "}
            </p>
            <p className="infoText">
              May occasionally provideharmful instructions or biased content
            </p>
            <p className="infoText">Limited Knowledge and world after 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
