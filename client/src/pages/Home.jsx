import Header from "../components/Header";
import FiltersTutorial from "../components/FiltersTutorial";
import PlantCards from "../components/PlantCards";
import Footer from "../components/Footer";

import plants from "../plants.json";
import waterIconInactive from "../assets/icons/WaterGrey.png";
import waterIconActive from "../assets/icons/WaterBlue.png";


function Home() {
  return (
    <main>
      <Header />
      <FiltersTutorial />
      {plants.map((el) => (
        <PlantCards
          key={el.id}
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
          iconActive={waterIconActive}
          iconInactive={waterIconInactive}
          lightIdeal={el.lightIdeal}
          lightTolered={el.lightTolered}
        />
      ))}
      <Footer />
    </main>
  );
}

export default Home;
