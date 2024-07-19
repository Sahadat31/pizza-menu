export default function Pizza ({pizzObj}) {
    return <li className={`pizza ${pizzObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzObj.photoName} alt={pizzObj.photoName}/>
        <div>
            <h3>{pizzObj.name}</h3>
            <p>{pizzObj.ingredients}</p>
            <span>{pizzObj.soldOut ? 'SOLD OUT' : pizzObj.price}</span>
        </div>
    </li>  
}