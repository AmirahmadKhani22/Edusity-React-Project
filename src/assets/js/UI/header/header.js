import Title from './components/title.js'
import Description from './components/description.js'
import ExploreMore from './components/exploreMore.js'

function Header() {
    return (
        <header className='header-container'>
            <div className='header-content-container'>
                <Title />
                <Description />
                <ExploreMore />
            </div>
        </header>
    )
}

export default Header
