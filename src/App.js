import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import TeamsList from "./components/TeamsList";

function App() {
  const [teams, setTeams] = useState([]);
  const [searchBtn, setSearchBtn] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [tigeredBtn, setTrigeredBtn] = useState("1");

  const fetchTeamsHandler = async () => {
    const result = await axios("/data/v1/teams", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    }).then((response) => {
      setTeams(response.data.data);
    });
  };

  const handleSort = (value) => {
    let sorted = teams;
    if (value === "asc") {
      sorted = sorted.sort((a, b) =>
        a?.["team-full"]?.localeCompare(b?.["team-full"])
      );
      setTrigeredBtn("2");
    }
    if (value === "desc") {
      sorted = sorted.sort((a, b) =>
        b?.["team-full"]?.localeCompare(a?.["team-full"])
      );
      setTrigeredBtn("3");
    }

    setFiltered(sorted);
  };

  useEffect(() => {
    fetchTeamsHandler();
  }, []);

  const searchInputHandler = (event) => {
    setSearchBtn(event.target.value);
  };

  return (
    <React.Fragment>
      <nav className="button-box">
        <input type="text" placeholder="Search" onChange={searchInputHandler} />
        <div>
          <button
            onClick={() => {
              handleSort("asc");
            }}
          >
            ASC
          </button>
          <button
            onClick={() => {
              handleSort("desc");
            }}
          >
            DSC
          </button>
        </div>
      </nav>
      <section>
        <TeamsList
          teams={
            tigeredBtn === "1"
              ? teams
              : tigeredBtn === "2"
              ? filtered
              : tigeredBtn === "3"
              ? filtered
              : teams
          }
          search={searchBtn}
        />
      </section>
    </React.Fragment>
  );
}

export default App;
