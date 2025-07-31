
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

const RestaurantCard = ({resData}) => {
    const {info} = resData
    return (
        <div className='res-card'>
            <img className='res-logo' src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg" />
            <h3>
               {info.name}
            </h3>
            <div>
                {info.cuisines.join(', ')}
            </div>
            <div style={{marginTop: "1em"}}>
                {info.avgRating} {info.totalRatingsString}
            </div>
            <div className='res-distance' style={{marginBottom: "1em"}}>
                {info.sla.slaString}
            </div>
            <div>

            </div>
        </div>
    )
}

const TestingHtml = () => {
    return (
        <div> testing HTML</div>
    )
}

const resobj = {
    "info": {
        "id": "131588",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/e78e002e-ca74-4b5b-b454-eb90a8051d0f_131588.jpg",
        "locality": "Stv Nagar",
        "areaName": "Tirumala",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "20K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-07-30 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                    "description": "bolt!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-c5b3a188-c258-475e-9c90-69e9c2e20381"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/tirupati/mcdonalds-stv-nagar-tirumala-rest131588",
        "type": "WEBLINK"
    }
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                search
            </div>
            <div className='res-container'>
                <RestaurantCard resData={resobj}/>
                <RestaurantCard resData={resobj}/>
                <RestaurantCard resData={resobj}/>
                <RestaurantCard resData={resobj}/>
                
               
{/* {<TestingHtml />} */}
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