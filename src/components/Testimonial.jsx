import photo1 from "./../images/photo1.png";
import photo2 from "./../images/photo2.png";
import rate from "./../images/Rate.png";

const Testi = () => {
    return (
        <div className="container" id="kolomtesti">
        <div className="justify-content-center">
          <div className="justify-content-center">
          <div className="text-center">
            <h1>Testimonial</h1>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div>
          <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner bg-light">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col col-sm-1">
                    <img src={photo1} className="img-fluid img-thumbnail" alt="Testi 1"/>
                  </div>
                  <div className="col col-md-5">
                    <img src={rate} className="img-fluid" alt="star"/>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod”</p>
                    <h6>John Dee 32, Bromo</h6>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col col-sm-1">
                    <img src={photo2} class="img-fluid img-thumbnail" alt="Testi 2"/>
                  </div>
                  <div className="col col-md-5">
                    <img src={rate} className="img-fluid" alt="star"/>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod”</p>
                    <h6>John Dee 32, Bromo</h6>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col col-sm-1">
                    <img src={photo1} className="img-fluid img-thumbnail" alt="Testi 3"/>
                  </div>
                  <div className="col col-md-5">
                    <img src={rate} className="img-fluid" alt="star"/>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod”</p>
                    <h6>John Dee 32, Bromo</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="container" id="tombolnavtest">
          <button className="btn btn-success" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
            <i className="bi bi-arrow-left-short"></i>
          </button>
          <button className="btn btn-success" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
            <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
        </div>
        </div>

    )

}
export default Testi;