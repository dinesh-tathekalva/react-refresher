// RestaurantCard.jsx
import PropTypes from "prop-types";
import truncate from "../utils/truncate";
import { CDN_URL } from "../utils/constants";

const hasPureVegBadge = (info) => {
  const imgBadges =
    info?.badgesV2?.entityBadges?.imageBased?.badgeObject ?? [];
  return imgBadges.some((b) => {
    const desc = b?.attributes?.description?.toLowerCase?.();
    const img = b?.attributes?.imageId?.toLowerCase?.();
    return desc === "pureveg" || img?.includes("pure_veg");
  });
};

const RestaurantCard = ({ resData }) => {
  const info = resData?.info ?? {};

  const imageUrl = info?.cloudinaryImageId
    ? `${CDN_URL}${info.cloudinaryImageId}`
    : "";

  const cuisines = truncate(info?.cuisines?.join(", ") || "", 25);
  const name = truncate(info?.name || "", 18);
  const rating = info?.avgRating ?? "—";
  const ratingsCount = info?.totalRatingsString ?? "";
  const eta = info?.sla?.slaString ?? "";
  const offerHeader = info?.aggregatedDiscountInfoV3?.header;
  const offerSub = info?.aggregatedDiscountInfoV3?.subHeader;
  const isPureVeg = hasPureVegBadge(info);

  return (
    <article className="res-card" role="article" aria-label={info?.name}>
      <div className="res-media">
        <img
          className="res-logo"
          src={imageUrl}
          alt={info?.name ? `${info.name} image` : "Restaurant image"}
          loading="lazy"
        />
        {offerHeader && (
          <div className="res-offer" aria-label="offer">
            <span className="res-offer-header">{offerHeader}</span>
            {offerSub ? <span className="res-offer-sub"> {offerSub}</span> : null}
          </div>
        )}
        {isPureVeg && <span className="res-badge res-badge-veg">Pure Veg</span>}
      </div>

      <h3 className="res-name" title={info?.name || ""}>
        {name}
      </h3>

      <p className="res-cuisines" title={info?.cuisines?.join(", ") || ""}>
        {cuisines}
      </p>

      <div className="res-meta">
        <span className="res-rating" aria-label={`rating ${rating}`}>
          ★ {rating}
          {ratingsCount ? ` · ${ratingsCount}` : ""}
        </span>
        {eta && <span className="res-distance">{eta}</span>}
      </div>
    </article>
  );
};

RestaurantCard.propTypes = {
  resData: PropTypes.shape({
    info: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      cloudinaryImageId: PropTypes.string,
      cuisines: PropTypes.arrayOf(PropTypes.string),
      avgRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      totalRatingsString: PropTypes.string,
      sla: PropTypes.shape({
        slaString: PropTypes.string,
      }),
      aggregatedDiscountInfoV3: PropTypes.shape({
        header: PropTypes.string,
        subHeader: PropTypes.string,
      }),
      badgesV2: PropTypes.object,
    }),
  }),
};

export default RestaurantCard;
