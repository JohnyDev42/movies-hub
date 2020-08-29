import React from "react";
import './MyCard.css'



const MyCard = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
          
        <img
          className="w-full"
          src={require("../../assets/profile.jpg")}
          alt="Display"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            John jonzz'
          </div>
          <p className="text-gray-700 text-base">
            When i’m not coding i switch to netflix with biscuits and cold tea
            as my companion. <span></span>😜
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="Tag">
            #Software Engineer
          </span>
          <span className="Tag">
            #Writter
          </span>
          <span className="Tag">
            #Public Speaker
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
