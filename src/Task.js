import React from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMonths,
  formatDistanceToNow,
} from "date-fns";
// const eoLocale = require('date-fns/locale/eo')
import { tr as trLocale } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadLine = new Date(taskObj.deadline);
  const startDate = new Date();

  const result = formatDistanceToNow(deadLine, {
    locale: trLocale,
    addSuffix: true,
  });

  console.log("result", result);

  // const monthsDifference = differenceInMonths(deadLine, startDate);

  // const daysDifference = differenceInDays(deadLine, startDate);

  const hoursDifference = differenceInHours(deadLine, startDate);

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span
          className={hoursDifference < 72 ? "bg-[#ffd9d4]" : "bg-[#83A2FF]"}
        >
          {/* {" "}
          {Math.abs(hoursDifference) < 24
            ? hoursDifference > 0
              ? `yaklaşık ${hoursDifference} saat sonra `
              : `yaklaşık ${Math.abs(hoursDifference)} saat önce `
            : Math.abs(daysDifference) <= 31
            ? daysDifference > 0
              ? `${daysDifference} gün sonra `
              : `${Math.abs(daysDifference)} gün önce `
            : monthsDifference > 0
            ? `${monthsDifference} ay sonra`
            : `${Math.abs(monthsDifference)} ay önce`} */}
          {result}
        </span>
      </div>

      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
