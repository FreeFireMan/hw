import './App.css';
import CharacterComponents from "./components/characters/character.components";

const data = [
    {
        title: 'JavaScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        alt: 'JS guide book.',
        price: '399',
        description: 'This is a book about JavaScript...This is a book about JavaScript...This is a book about JavaScript...',
    },
    {
        title: 'HTML',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png',
        alt: 'Html guide book.',
        price: '199',
        description: 'This is a book about JavaScript...This is a book about JavaScript...This is a book about JavaScript...',
    },
    {
        title: 'CSS',
        image: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo.png',
        alt: 'Css guide book.',
        price: '249',
        description: 'This is a book about JavaScript...This is a book about JavaScript...This is a book about JavaScript...'
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
        alt: 'Html guide book.',
        price: '199',
        description: 'This is a book about JavaScript...This is a book about JavaScript...This is a book about JavaScript...'
    },
    {
        title: 'CSS',
        image: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo.png',
        alt: 'Css guide book.',
        price: '249',
        description: 'This is a book about JavaScript...This is a book about JavaScript...This is a book about JavaScript...'
    }
];

function App() {
    return (
        <div className={'general'}>
            {data.map(item => {
                return <CharacterComponents item={item}/>
            })}
        </div>
    );
}

export default App;
