import React from "react";

import Team from "./Team";
import "./TeamsList.scss";

const TeamsList = (props) => {
  return (
    <div className="teams-list">
      {props.teams
        .filter((team) => {
          if (props.search === "") {
            return team;
          }
          console.log(team.email);
          if (team['team-full'].toLowerCase().includes(props.search.toLowerCase())) {
            return team;
          }
        })
        .map((team) => (
          <Team
            key={team.id}
            fullName={team["team-full"]}
            description={team["constituency-description"]}
            establishment={team.establishment}
            email={team.email}
            phone={team.phone}
            address={team.address}
            website={team.website}
          />
        ))}
    </div>
  );
};

export default TeamsList;
