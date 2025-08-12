import truncate from '../utils/truncate'


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

export default RestaurantCard