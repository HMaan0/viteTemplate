import { useState, useEffect } from "react";
import GitHubCalendar, { Activity } from "react-github-calendar";
import data from "../../data";
import GitHubLoading from "./GithubLoading";

const GithubGraph = () => {
  const username = data.Github.github_username;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const transformData = (contributions: Activity[]) => {
    const weeksToShow = 114;
    return contributions.slice(-weeksToShow);
  };

  return (
    <>
      <div className="flex w-min flex-col items-center justify-center">
        {loading && (
          <div className="flex items-center justify-center ">
            <GitHubLoading />
          </div>
        )}
        <div
          className={`custom__scrollbar overflow-hidden ${
            loading ? "hidden" : "block"
          }`}
        >
          <GitHubCalendar
            username={username}
            transformData={transformData}
            loading={loading}
            maxLevel={10}
            hideColorLegend={true}
            hideMonthLabels={true}
            hideTotalCount={true}
          />
        </div>
      </div>
    </>
  );
};

export default GithubGraph;
