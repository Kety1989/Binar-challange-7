import complete from "./../images/icon_complete.png";
import  price from "./../images/icon_price.png";
import  hrs from "./../images/icon_24hrs.png";
import  profesional from "./../images/icon_professional.png";


const Whyus = () => {
    return (
        <div class="container" id="whyus">
      <div class="container-fluid">
        <h1>Why Us?</h1>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-6 mb-4"  id="plus">
          <img src={complete} class="img" alt="Mobil Lengkap"/>
          <h6>Mobil Lengkap</h6>
          <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4"  id="plus">
          <img src={price} class="img" alt="Harga Murah"/>
          <h6>Harga Murah</h6>
          <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4"  id="plus">
          <img src={hrs} class="img" alt="Layanan 24 Jam"/>
          <h6>Layanan 24 Jam</h6>
          <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4"  id="plus">
          <img src={profesional} class="img" alt="Sopir Profesional"/>
          <h6>Sopir Profesional</h6>
          <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
        </div>
      </div>
    </div>


    )

}
export default Whyus;