import Cards from "./Cards"


const Rightcontent = (props) => {
//    console.log(props.data)
  return (
    <div className='rightcontent'>
      {props.data.map((elem,idx)=>{
        // console.log(elem)
        return <Cards key={idx} data={elem}/>
      })}
    </div>
  )
}

export default Rightcontent