
const Card = ({phrase,aut,reload}) => {

    return(
        <div className="card">
            <h2>{phrase}</h2>
            <h4>{aut}</h4>
            <button onClick={reload} className="buttom">New Quote</button>
        </div>
    )

}

export default Card