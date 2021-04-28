import './character.style.css'

function CharacterComponents(props) {
    const {title, image, alt, description, price} = props.item;

    return <div className={'cart'}>
        <h2>{title}</h2>
        <img src={image} alt={alt}/>
        <p className={'description'}>{description}</p>
        <div className={'cart-buy'}>
            <p className='price'>{price} UAH</p>
            <button>Add to Cart</button>
        </div>
    </div>
}

export default CharacterComponents;
