import './Shimer.css'


const Shimer = () => {
    return (
      <div className="Shimer-main-card ">
        {Array(20)
          .fill("")
          .map((data, index) => (
            <div key={index} className=" shimer-card"></div>
          ))}
      </div>
    );
}
export default Shimer;

