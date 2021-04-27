import './character.style.css'

function CharacterComponents(props) {
    return <div className={'cart'}>
        <h2>{props.title}</h2>
        <img src={props.image} alt={props.alt}/>
        <p className={'description'}>{props.description}</p>
        <div className={'cart-buy'}>
            <p className='price'>{props.price} UAH</p>
            <button>Add to Cart</button>
        </div>
    </div>
}

export default CharacterComponents;