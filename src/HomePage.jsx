import Navbar from "./Navbar";
// import RegisterPage from "./RegisterPage";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <div className="home-message-container">
          <h1>Welcome to XYZ .</h1>
          <p className="home-dummy-msg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dignissimos consectetur assumenda veritatis laudantium possimus
            iure. Aliquam porro necessitatibus iure.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="home-background-img">
          <img src="removed-bg.png" alt="image" style={{ height: "400px" }} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
