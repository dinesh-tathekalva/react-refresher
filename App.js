
import React from 'react'
import ReactDOM from 'react-dom/client'
import index from './index.css'


const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" />

            </div>
            <div className='nav-items'>
                <ul>
                    <li>Name</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className='res-card'>
            <img className='res-logo' src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg" />
            <h3>
                Meghana Foods
            </h3>
            <div>
                Biriyani, North indian
            </div>
            <div>
                44 days ago
            </div>
            <div className='res-distance'>
                38 Minutes
            </div>
        </div>
    )
}


const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                search
            </div>
            <div className='res-container'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />

            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)