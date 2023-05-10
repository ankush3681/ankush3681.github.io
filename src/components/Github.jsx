import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div id="githubs" className="max-width">
      <div className="main-text">
        <h2>
          <span>GitHub </span>Stats
        </h2>
      </div>
      <div id="stat">
        <div>
          <img
            className="ht1"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=ankush3681&count_private=true"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ankush3681&theme=outrun"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=ankush3681&theme=radical&hide_border=true&border_radius=6.5&date_format=m%20j%5b%2c%20y%5d"
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <img
          src="https://visitcount.itsvg.in/api?id=ankush3681&label=Profile%20Views&color=1&pretty=false"
          alt="count"
        />
      </div>
      <div className="react-activity-calendar" style={{margin : "10px auto 20px auto"}}>
        <GitHubCalendar username="ankush3681" />
      </div>
    </div>
  );
};

export default Github;
