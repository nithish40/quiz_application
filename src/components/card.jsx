function Card(){
    return (
        <div className="card">
            <img className="card-image" src="https://thumbs.dreamstime.com/b/agriculture-vegetable-field-landscape-view-freshly-growing-84090367.jpg" alt="" />
            <h2>no code</h2>
            <p>I produce agriculture goods from land</p>
        </div>
    )
}

export default Card;


/**
 * .card{
    border: 1px solid silver;
    border-radius: 10px;
    box-shadow: 5px 5px 5px silver;
    padding: 10px;
    margin: 10px;
    text-align: center;
    max-width: 250px;
    display: inline-block;
}
.card-image{
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin: 10px;
}
 */