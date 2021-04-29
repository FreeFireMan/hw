import './App.css';
import CharacterComponents from './components/characters/character.components';
import {useState} from 'react';

const charactres = [
    {
        id: 1,
        title: 'JavaScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        alt: 'JS logo.',
        price: '399',
        description: 'This is a book about JavaScript...This is a book about JavaScript...This is a book about JavaScript...'
    },
    {
        id: 2,
        title: 'HTML',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png',
        alt: 'HTML logo.',
        price: '199',
        description: 'This is a book about HTML...This is a book about HTML...This is a book about HTML...'
    },
    {
        id: 3,
        title: 'CSS',
        image: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo.png',
        alt: 'CSS logo.',
        price: '299',
        description: 'This is a book about CSS...This is a book about CSS...This is a book about CSS...'
    },
    {
        id: 4,
        title: 'React',
        image: 'https://ui-router.github.io/images/logos/react.png',
        alt: 'React logo.',
        price: '599',
        description: 'This is a book about React...This is a book about React...This is a book about React...'
    },
    {
        id: 5,
        title: 'Angular',
        image: 'https://user-images.githubusercontent.com/900523/101620109-0e5e1f00-3a0c-11eb-8c40-b1d9a8bb3c4c.png',
        alt: 'Angular logo.',
        price: '499',
        description: 'This is a book about Angular...This is a book about Angular...This is a book about Angular...'
    },
    {
        id: 6,
        title: 'Vue',
        image: 'https://zendev.com/assets/img/vue-logo.png',
        alt: 'Vue logo.',
        price: '249',
        description: 'This is a book about Vue...This is a book about Vue...This is a book about Vue...'
    }
]

function App() {
    let counter = 0;
    let [count, setCount] = useState(counter);
    const increment = () => {setCount(++count)};
    const decrement = () => {setCount(--count)};
    const inc100 = () => {setCount(count +=100)};
    const dec100 = () => {setCount(count -=100)};
    const reset = () => {setCount(count = 0)}


    let [books, setBooks] = useState(charactres);

    const deleteChosenCart = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    const deleteCart = () => {
        books.pop();
        setBooks([...books]);
    };

    const deleteAllCart = () => {
        books.splice(0, books.length);
        setBooks([...books]);
    };

    return (
        <div className={'general'}>
            {books.map((value, index) => {
                return <CharacterComponents key={index} {...value} deleteChosenCart={deleteChosenCart}/>
            })}
            <div className={'btn-del'}>
                <button className={'del'} onClick={deleteCart}>Delete cart</button>
                <button className={'del'}  onClick={deleteAllCart}>Delete all cart</button>
            </div>
            <div className={'counter'}>
                <p className={'count'}>{count}</p>
                <button className={'count-btn'} onClick={increment}>Increment +1</button>
                <button className={'count-btn'} onClick={decrement}>Decrement -1</button>
                <button className={'count-btn-low'} onClick={inc100}>+100</button>
                <button className={'count-btn-low'} onClick={dec100}>-100</button>
                <button className={'count-btn-low'} onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default App;
