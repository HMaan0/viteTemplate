const graphData = [
  [0, 1, 0, 3, 0, 2, 1, 3, 7, 8, 2, 4, 1, 9, 0, 6, 3],
  [1, 0, 2, 1, 0, 0, 0, 8, 4, 3, 2, 6, 7, 1, 0, 5, 9],
  [0, 2, 1, 0, 0, 3, 2, 7, 8, 4, 5, 1, 2, 3, 0, 9, 6],
  [0, 0, 3, 2, 1, 0, 0, 3, 7, 8, 1, 4, 2, 9, 6, 5, 0],
  [2, 1, 0, 3, 2, 2, 1, 8, 7, 4, 3, 1, 5, 0, 2, 6, 9],
  [0, 2, 1, 0, 0, 3, 2, 4, 8, 7, 1, 2, 3, 5, 0, 9, 6],
  [0, 0, 3, 2, 1, 0, 0, 4, 7, 8, 1, 5, 2, 6, 3, 9, 0],
];

const GitHubLoading = () => {
  const colorMap: { [key: number]: string } = {
    0: "bg-[#161b22]",
    1: "bg-[#0e4429]",
    2: "bg-[#006d32]",
    3: "bg-[#26a641]",
    4: "bg-[#39d353]",
  };

  return (
    <div className="flex flex-col gap-1  p-0 rounded-md">
      {graphData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((level, colIndex) => (
            <div
              key={colIndex}
              className={`w-3 h-3 rounded-sm ${colorMap[level]}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GitHubLoading;
