const Card = ({data}) => {
  console.log(data)
  return (
    <div className="main">
      <div>
        <div className="top">
          <img
            src={data.logo}
          />
          <button>
            Save <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
        <div className="middle">
          <h3>
            {data.company}  <span> {data.posted}</span>
          </h3>
          <h2>{data.title}</h2>
          <div>
            <p>{data.jobType}</p>
            <p>{data.experience}</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <p>{data.salary}</p>
          <p>{data.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
