import RegionButton from "../components/RegionButton";

function Home() {
  return (
    <div>
      <h1 className="title">Welcome to GT7 Tracker!</h1>
      <div className="btn-group">
        <RegionButton region="Americas" />
        <RegionButton region="Europe" />
        <RegionButton region="Asia" />
      </div>
    </div>
  );
}

export default Home;
