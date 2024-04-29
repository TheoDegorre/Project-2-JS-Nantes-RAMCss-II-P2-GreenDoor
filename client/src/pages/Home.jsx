import { useState, useEffect } from "react";
import Header from "../components/Header";
import FiltersTutorial from "../components/FiltersTutorial";
import StickyFilterParent from "../components/StickyFilterParent";
import PlantCards from "../components/PlantCards";
import QuizzRedirection from "../components/QuizzRedirection";
import Footer from "../components/Footer";

import plants from "../plants.json";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";
import lightIconInactive from "../assets/icons/SunGrey.png";
import lightIconActive from "../assets/icons/SunYellow.png";

function Home() {
  const [waterFilter, setWaterFilter] = useState(1);
  const [lightFilter, setLightFilter] = useState(1);

  const [search, setSearch] = useState("");
  const [filteredPlant, setFilteredPlant] = useState([]);

  useEffect(() => {
    const filteredData = plants.filter((el) => {
      if (search === "") {
        return true;
      }
      if (
        el.commonName !== null &&
        el.commonName.join("").toLowerCase().includes(search)
      ) {
        return true;
      }
      return false;
    });
    setFilteredPlant(filteredData);
  }, [search]);

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  const handleSubmit = (e) => {
    const targetSection = document.getElementsByClassName("cards-container")[0];
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <Header
        inputHandler={inputHandler}
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
        filteredPlant={filteredPlant}
        setFilteredPlant={setFilteredPlant}
      />

      <FiltersTutorial
        waterFilter={waterFilter}
        setWaterFilter={setWaterFilter}
        waterIconActive={waterIconActive}
        waterIconInactive={waterIconInactive}
        lightFilter={lightFilter}
        setLightFilter={setLightFilter}
        lightIconActive={lightIconActive}
        lightIconInactive={lightIconInactive}
      />

      <StickyFilterParent
        waterFilter={waterFilter}
        setWaterFilter={setWaterFilter}
        waterIconActive={waterIconActive}
        waterIconInactive={waterIconInactive}
        lightFilter={lightFilter}
        setLightFilter={setLightFilter}
        lightIconActive={lightIconActive}
        lightIconInactive={lightIconInactive}
      />

      <section className="cards-container">
        {filteredPlant.map((el) => (
          <PlantCards
            key={el.id}
            plantId={el.id}
            img={el.img}
            commonName={el.commonName}
            latinName={el.latinName}
            watering={el.watering}
            growth={el.growth}
            heightPotential={el.heightPotential.CM}
            pruning={el.pruning}
            temperatureMax={el.temperatureMax.C}
            temperatureMin={el.temperatureMin.C}
            disease={el.disease}
            insects={el.insects}
            waterIconActive={waterIconActive}
            waterIconInactive={waterIconInactive}
            lightIconActive={lightIconActive}
            lightIconInactive={lightIconInactive}
            lightIdeal={el.lightIdeal}
            lightTolered={el.lightTolered}
          />
        ))}
      </section>
      <QuizzRedirection />
      <Footer />
    </main>
  );
}

export default Home;
