import React from "react";
import CreateTutorial from "./CreateTutorial"
// import SolanaTutorial from "./SolanaTutorial"

export default function Tutorial() {
    return (
        <div className="flex justify-end">
            <div>
                <p className="text-black-400 mt-10 text-4xl font-bold">Tutorial</p>
                {/* <SolanaTutorial></SolanaTutorial> */}
                <CreateTutorial
                    topic="Web 3"
                ></CreateTutorial>
            </div>
        </div>
    )
}