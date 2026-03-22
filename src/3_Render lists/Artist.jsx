function Artist ({ title="Realistic Potrait", price=1000}) {

    const artworks = [
        {id: 1, title:"Sketch",price:800},
        {id: 2, title:"Painting",price:1800},
        {id: 3, title:"Caricature",price:500},
        {id: 4, title:"Abstract",price:1200},

    ]

    const cards = artworks.map(card => <li key={card.id}>{card.title} - {card.price}</li>)
    return (
        <ul>{cards}</ul>
    )
}

export default Artist;