import mobil from "./../images/mobil.png";


const Hero = () => {
    return (
        <div className="container">
      <div className="row">
        <div className="col-lg-6  mx-auto align-self-center" id="textmobil"><h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu
          siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <a href="cars" target="_blank"><button type="button" lassNames="btn btn-success">Mulai Sewa Mobil</button></a></div>
      <div className="col-lg-6 ms-auto" >  <img src={mobil} className="img" alt="Car"/></div>
    </div>
    </div>


    )

}
export default Hero;