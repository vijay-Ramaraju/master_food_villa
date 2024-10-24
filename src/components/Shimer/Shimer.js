const Shimer = () => {
  return (
    <div className="flex flex-row justify-center flex-wrap p-2 gap-2">
      {Array(20)
        .fill("")
        .map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[280px] p-2 h-[400px] bg-[#eff0f5]"
          ></div>
        ))}
    </div>
  );
};

export default Shimer;
