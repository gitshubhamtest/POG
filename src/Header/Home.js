import "./Home.css";
const Home = () => {
  console.log("our");
  return (
    <div className="Home-outerdiv">
      <div className="Home-title">
        <h1>Welcome to POG</h1>
      </div>
      <hr />
      <h2>Help us to create beautiful world without creating New</h2>
      <div></div>
      <div className="home-goals">
        <h4>Our Goals</h4>
        <ul>
          <li>To create new stuff by reusing breaked material.</li>
          <li>
            The cost savings of recycling is in the use of energy. Compared to
            making glass from raw materials for the first time, cullet melts at
            a lower temperature. So we can save on energy needed to melt the
            glass.
          </li>
          <li>
            Glass produced from recycled glass reduces related air pollution by
            20% and related water pollution by 50%.
          </li>
          <li>
            Recycling glass reduces the space in landfills that would otherwise
            be taken up by used bottles and jars.
          </li>
          <li>
            Using glass for recycling means there are less glass objects lying
            around in he landfill or bin.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
