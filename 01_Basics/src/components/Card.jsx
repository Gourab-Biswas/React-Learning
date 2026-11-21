const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
      <h1>{props.data.name}, {props.data.age}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      
    </div>
  );
};
export default Card;
