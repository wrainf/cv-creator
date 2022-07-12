import React from "react";

const Overview = (props) => {
  const { infos } = props;

  return (
    <div>
      {infos.map((info) => {
        return (
          <div>
            <h3>{info.title}</h3>
            <div>
              <h4>{info.role}</h4>
              <h4>{info.duration}</h4>
            </div>
            <ul>
              <li key={info.id+'1'}>{info.description}</li>
              <li key={info.id+'2'}>{info.achievement}</li>
              <li key={info.id+'3'}>{info.lesson}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;