// RestaurantCard.jsx
import { useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import truncate from "../utils/truncate";


const hasPureVegBadge = (info) => {
  const imgBadges =
    info?.badgesV2?.entityBadges?.imageBased?.badgeObject ?? [];
  return imgBadges.some((b) => {
    const desc = b?.attributes?.description?.toLowerCase?.();
    const img = b?.attributes?.imageId?.toLowerCase?.();
    return desc === "pureveg" || img?.includes("pure_veg") || img?.includes("pureveg");
  });
};

const getImageBadges = (info) => {
  const imgBadges =
    info?.badgesV2?.entityBadges?.imageBased?.badgeObject ?? [];
  return imgBadges
    .map((b) => b?.attributes)
    .filter(Boolean)
    .map(({ description, imageId }) => ({
      description,
      imageId,
    }));
};

const ratingClass = (rating) => {
  const r = parseFloat(rating);
  if (Number.isNaN(r)) return "rating--na";
  if (r >= 4.5) return "rating--great";
  if (r >= 4.0) return "rating--good";
  if (r >= 3.5) return "rating--ok";
  return "rating--low";
};

const EMPTY_IMG =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";


const Shimmer = () => (
  <div className="res-card shimmer" aria-hidden="true">
    <div className="res-media shimmer-block" />
    <div className="shimmer-line" />
    <div className="shimmer-line short" />
    <div className="shimmer-line tiny" />
  </div>
);

const RestaurantCard1 = ({ resData, loading = false, onClick }) => {
  if (loading) return <Shimmer />;

  const info = resData?.info ?? {};
  const isPureVeg = hasPureVegBadge(info);
  const imageUrl = info?.cloudinaryImageId
    ? `${CDN_URL}${info.cloudinaryImageId}`
    : EMPTY_IMG;

  const [imgSrc, setImgSrc] = useState(imageUrl);

  const cuisinesFull = useMemo(
    () => info?.cuisines?.join(", ") || "",
    [info?.cuisines]
  );

  const cuisinesShort = useMemo(
    () => truncate(cuisinesFull, 40),
    [cuisinesFull]
  );

  const name = useMemo(() => truncate(info?.name || "", 24), [info?.name]);

  const offerHeader = info?.aggregatedDiscountInfoV3?.header;
  const offerSub = info?.aggregatedDiscountInfoV3?.subHeader;
  const priceForTwo = info?.costForTwo ?? "";
  const eta = info?.sla?.slaString ?? "";
  const distance =
    info?.sla?.lastMileTravelString || // e.g., "1.5 km"
    (info?.sla?.lastMileTravel != null ? `${info?.sla?.lastMileTravel} km` : "");

  const rating = info?.avgRating ?? "—";
  const ratingsCount = info?.totalRatingsString ?? "";
  const externalRating = info?.externalRatings?.aggregatedRating?.rating;

  const badges = useMemo(() => getImageBadges(info), [info]);

  const handleImgError = useCallback(() => {
    setImgSrc(EMPTY_IMG);
  }, []);

  const ariaLabel =
    info?.name && eta
      ? `${info.name}. ETA ${eta}. Rating ${rating}`
      : info?.name || "Restaurant card";

  const handleCardClick = useCallback(
    (e) => {
      if (onClick) onClick(info);
      // If you want to navigate with SPA router, intercept here.
    },
    [onClick, info]
  );

  const ctaLink = resData?.cta?.link;

  return (
    <article
      className="res-card"
      role="article"
      aria-label={ariaLabel}
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleCardClick();
      }}
    >
      <div className="res-media">
        <img
          className="res-logo"
          src={imgSrc}
          alt={info?.name ? `${info.name} image` : "Restaurant image"}
          loading="lazy"
          onError={handleImgError}
        />

        {(offerHeader || offerSub) && (
          <div className="res-offer" aria-label="current offer">
            <span className="res-offer-header">{offerHeader}</span>
            {offerSub ? <span className="res-offer-sub"> {offerSub}</span> : null}
          </div>
        )}

        {isPureVeg && <span className="res-badge res-badge-veg">Pure Veg</span>}

        {badges?.length > 0 && (
          <div className="res-badges">
            {badges.slice(0, 3).map((b, i) => (
              <span key={i} className="res-badge res-badge-img" title={b.description}>
                
                {b.imageId ? <img src={`${CDN_URL}${b.imageId}`} alt={b.description || "badge"} /> : (b.description || "Badge")}
              </span>
            ))}
          </div>
        )}
      </div>

      <h3 className="res-name" title={info?.name || ""}>
        {name}{" "}
        {info?.veg && <span className="veg-dot" aria-label="vegetarian">●</span>}
      </h3>

      <p className="res-cuisines" title={cuisinesFull}>
        {cuisinesShort}
      </p>

      <div className="res-meta">
        <span
          className={`res-rating ${ratingClass(rating)}`}
          aria-label={`rating ${rating}${ratingsCount ? ` out of ${ratingsCount}` : ""}`}
          title={externalRating && externalRating !== "--" ? `Ext. rating: ${externalRating}` : undefined}
        >
          ★ {rating}
          {ratingsCount ? ` · ${ratingsCount}` : ""}
        </span>

        {eta && <span className="res-eta" aria-label={`delivery time ${eta}`}>{eta}</span>}
        {distance && <span className="res-distance">{distance}</span>}
        {priceForTwo && <span className="res-price">{priceForTwo}</span>}
      </div>

      <div className="res-actions">
        {ctaLink ? (
          <a
            className="btn btn-primary"
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${info?.name} menu in new tab`}
            onClick={(e) => e.stopPropagation()}
          >
            View menu
          </a>
        ) : null}

        <button
          className="btn btn-ghost"
          type="button"
          aria-label="Save to favorites"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          ♥
        </button>
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
      costForTwo: PropTypes.string,
      veg: PropTypes.bool,
      sla: PropTypes.shape({
        slaString: PropTypes.string,
        lastMileTravel: PropTypes.number,
        lastMileTravelString: PropTypes.string,
      }),
      aggregatedDiscountInfoV3: PropTypes.shape({
        header: PropTypes.string,
        subHeader: PropTypes.string,
      }),
      badgesV2: PropTypes.object,
    }),
  }),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default RestaurantCard1;

