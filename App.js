
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

const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
    return str;
  }

const RestaurantCard = ({resData}) => {
    const {info} = resData
    return (
        <div className='res-card'>
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info.cloudinaryImageId} width="20px" />
            <h3>
            {truncate(info.name, 18)}
            </h3>
            <div>
                {truncate(info.cuisines.join(', '), 25)}
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


const resObj1 = {
    "info": {
        "id": "398284",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/e86bb374-4c28-4fe7-b88b-ea75fbc8c47d_398284.JPG",
        "locality": "Revenue Ward - 18",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹120 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "7.7K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 1.5,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-07-30 23:00:00",
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
            "subHeader": "AT ₹124"
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
        "link": "https://www.swiggy.com/city/tirupati/nic-ice-creams-revenue-ward-18-ashok-nagar-rest398284",
        "type": "WEBLINK"
    }
}
const resObj2 = {
    "info": {
        "id": "652933",
        "name": "A2B - Adyar Ananda Bhavan",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/0cb5135f-6a6c-42d6-8a13-42d87ccce26d_652933.jpg",
        "locality": "Sivajothinagar",
        "areaName": "Korlagunta",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "South Indian",
            "North Indian",
            "Chinese",
            "Sweets"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "22",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-07-30 22:30:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                    "description": "Delivery!"
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
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "ABOVE ₹600",
            "discountTag": "FLAT DEAL"
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
        "link": "https://www.swiggy.com/city/tirupati/a2b-adyar-ananda-bhavan-sivajothinagar-korlagunta-rest652933",
        "type": "WEBLINK"
    }
}
const resObj3 = {
    "info": {
        "id": "398285",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/f95f790c-1bdd-473b-bbc5-682acf868a25_398285.jpg",
        "locality": "Revenue Ward - 18",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹120 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.2K+",
        "sla": {
            "deliveryTime": 12,
            "lastMileTravel": 1.5,
            "serviceability": "SERVICEABLE",
            "slaString": "10-15 mins",
            "lastMileTravelString": "1.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-07-30 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                    "description": "bolt!"
                },
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
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
                        },
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
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
            "subHeader": "AT ₹148"
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
        "link": "https://www.swiggy.com/city/tirupati/grameen-kulfi-revenue-ward-18-ashok-nagar-rest398285",
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
                <RestaurantCard resData={resObj1}/>
                <RestaurantCard resData={resObj2}/>
                <RestaurantCard resData={resObj3}/>
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