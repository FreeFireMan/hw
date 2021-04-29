import './character.style.css'

function CharacterComponents(props) {
    const {id, title, image, alt, description, price, deleteChosenCart} = props;

    return <div className={'cart'}>
        <h2>{title}</h2>
        <img src={image} alt={alt}/>
        <p className={'description'}>{description}</p>
        <div className={'cart-buy'}>
            <p className='price'>{price} UAH</p>
            <button onClick={() => deleteChosenCart(id)}>Delete Cart</button>
        </div>
    </div>
}

export default CharacterComponents;
