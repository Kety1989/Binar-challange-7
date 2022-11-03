import Cheklist from "./../images/checklist.svg";
import Servicefoto from "./../images/girl.png";

const Girl = () => {
    return (
        <div className="container ">
<div className="row">
  <div className="col-lg-6  mx-auto " ><img src={Servicefoto} className="img align-self-center" alt="Best Car Rental" id="girlpict"/></div>
  <div className="col-lg-6" id="girljudul">  <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
      mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
    <ul className="list-group" id="kotak">
      <li className="list-group-item"><img src={Cheklist} alt="Checklist"/> Sewa Mobil Dengan Supir di Bali 12 Jam</li>
      <li className="list-group-item"><img src={Cheklist} alt="Checklist"/> Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
      <li className="list-group-item"><img src={Cheklist} alt="Checklist"/> Sewa Mobil Jangka Panjang Bulanan</li>
      <li className="list-group-item"><img src={Cheklist} alt="Checklist"/> Gratis Antar - Jemput Mobil di Bandara</li>
      <li className="list-group-item"><img src={Cheklist} alt="Checklist"/> Layanan Airport Transfer / Drop In Out</li>
    </ul></div>
</div>
</div>

    )

}
export default Girl;
