import { userWatchList } from "../assets/data/watchList";
import { useState } from "react";

function Content({serie}) {
  const [wListe] = useState(userWatchList);

  const auClic =(item) => {
    serie(item)
  }

  return (
    <div>
      {wListe.map((item, index) => (
        <div key={index} className="col right">
          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <h6>Season {item.season}</h6>
                <h2>{item.series}</h2>
              </div>
              <div className="course-info">
                <h6>ep: S{item.season}E{item.episode < 10 ? '0' + item.episode : 
                item.episode}</h6>
                <h2>{item.title} </h2>
          
                <button className="bg-[#2A265F] p-3 rounded-lg text-white"
                onClick={() => {auClic(item.title)}}
                >
                {item.timeCursor !== '00:00:00' ? "Continue" : "Start"}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
