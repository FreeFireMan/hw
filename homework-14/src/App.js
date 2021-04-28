import './App.css';
import CharacterComponents from "./components/characters/character.components";

const charactres = [
    {
        title: 'JavaScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        alt: 'JS guide book.',
        price: '399',
        description: 'This is a book about JavaScript...This is a book about JavaScript...This is a book about JavaScript...'
    },
    {
        title: 'HTML',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png',
        alt: 'HTML guide book.',
        price: '199',
        description: 'This is a book about HTML...This is a book about HTML...This is a book about HTML...'
    },

    {
        title: 'CSS',
        image: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo.png',
        alt: 'CSS guide book.',
        price: '399',
        description: 'This is a book about CSS...This is a book about CSS...This is a book about CSS...'
    },
    {
        title: 'JavaScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        alt: 'JS guide book.',
        price: '399',
        description: 'This is a book about JavaScript...This is a book about JavaScript...This is a book about JavaScript...'
    },
    {
        title: 'HTML',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png',
        alt: 'HTML guide book.',
        price: '199',
        description: 'This is a book about HTML...This is a book about HTML...This is a book about HTML...'
    },
    {
        title: 'CSS',
        image: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo.png',
        alt: 'CSS guide book.',
        price: '399',
        description: 'This is a book about CSS...This is a book about CSS...This is a book about CSS...'
    }
]

function App() {
    return (
        <div className={'general'}>
            {charactres.map(value => {
                return <CharacterComponents items={value}/>
            })}
        </div>
    );
}

export default App;
