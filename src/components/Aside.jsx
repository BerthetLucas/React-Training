import { userWatchList } from "../assets/data/watchList";
import { useState } from "react";

function Aside({test}) {
  const [wList] = useState(userWatchList);

  return (
    <div className="row">
      <div className="col left w-full">
        <ul>
          <li className="mb-8">Séries en cours</li>
          {wList.map((item, index) => (
            <li key={index}>
              {item.timeCursor !== "00:00:00" ? item.series : ""}
            </li>
          ))}
        </ul>
        <span>▶ Lecture en cours: {test} </span>
      </div>
    </div>
  );
}

export default Aside;
