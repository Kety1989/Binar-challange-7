const Footer = () => {
  return (
    <section>
    <div className="container">
        <div className="row text-muted">
            <div className="col-md-3">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="col-md-2">
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark">Our services</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Why Us</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Testimonial</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">FAQ</a></li>
                </ul>
            </div>
            <div className="col-md-4 pe-0">
                <p>Connect with us</p>
                <ul className="nav justify-content-start mb-3">
                    <li className="nav-item me-2"><img src="./images/icon_facebook.png" alt=""></img></li>
                    <li className="nav-item me-2"><img src="./images/icon_instagram.png" alt=""></img></li>
                    <li className="nav-item me-2"><img src="./images/icon_twitter.png" alt=""></img></li>
                    <li className="nav-item me-2"><img src="./images/icon_mail.png" alt=""></img></li>
                    <li className="nav-item me-2"><img src="./images/icon_twitch.png" alt=""></img></li>
                </ul>
            </div>
            <div className="col-md-2">
                <p>Copyright Binar 2022</p>
                <a href="#" className="logo me-auto mb-2 mb-lg-0"><img src="./img/logo.png" alt="" className="img-fluid"></img></a>
            </div>
        </div>
    </div>
</section>
)
}
export default Footer;
 
