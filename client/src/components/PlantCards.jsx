import PropTypes from "prop-types";
import WaterNeeds from "./WaterNeeds";
import LightNeeds from "./LightNeeds";

function PlantCard({
  img,
  commonName,
  latinName,
  watering,
  growth,
  heightPotential,
  pruning,
  temperatureMin,
  temperatureMax,
  insects,
  disease,
  lightIdeal,
  lightTolered,
  waterIconActive,
  waterIconInactive,
  lightIconActive,
  lightIconInactive,
}) {
  return (
    <article className="plant-card">
      <figure>
        <img src={img} alt={commonName} />
        <figcaption>
          <hgroup>
            <h2>{commonName}</h2>
            <h3>{latinName}</h3>
          </hgroup>
          <section className="needsIcons">
            <WaterNeeds
              watering={watering}
              iconActive={waterIconActive}
              iconInactive={waterIconInactive}
            />

            <LightNeeds
              lightIdeal={lightIdeal}
              lightTolered={lightTolered}
              iconActive={lightIconActive}
              iconInactive={lightIconInactive}
            />
          </section>
          <div>
            <h3>Entretien :</h3>
            <p>
              Plant with {growth} growth, can reach an average size of{" "}
              {heightPotential} cm, {pruning}, keep between {temperatureMin} °C
              and {temperatureMax} °C
            </p>
            <p>
              Main diseases :{" "}
              {disease === "N/A" ? "No known diseases" : disease} - Main pest :{" "}
              {insects.join("") === "N/A"
                ? "No known vulnerability"
                : insects.join(", ")}
            </p>
            {/* ne pas afficher les message si contenu = N/A */}
          </div>
        </figcaption>
      </figure>
    </article>
  );
}

PlantCard.propTypes = {
  img: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  latinName: PropTypes.string.isRequired,
  pruning: PropTypes.string.isRequired,
  watering: PropTypes.string.isRequired,
  heightPotential: PropTypes.number.isRequired,
  growth: PropTypes.string.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  temperatureMin: PropTypes.number.isRequired,
  insects: PropTypes.string.isRequired,
  disease: PropTypes.string.isRequired,
  lightIdeal: PropTypes.string.isRequired,
  lightTolered: PropTypes.string.isRequired,
  waterIconActive: PropTypes.string.isRequired,
  waterIconInactive: PropTypes.string.isRequired,
  lightIconActive: PropTypes.string.isRequired,
  lightIconInactive: PropTypes.string.isRequired,
};

export default PlantCard;