import "./Banner.scss";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="bannerInfoContainer">
        <div>
          <p className="bannerTitle">Trending</p>
          <h3 className="bannerMovieTitle">JOKER</h3>
        </div>
        <p className="bannerTitleInfo">24 Stories</p>
      </div>
      <img
        className="bannerImg"
        src="./images/banner2.jpeg"
        alt="Trending Movie - Joker"
      />
    </div>
  );
};

export default Banner;
