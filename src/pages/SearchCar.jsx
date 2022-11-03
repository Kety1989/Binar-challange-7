import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import mobil from "./../images/mobil.png";


const SearchCar = () => {
    const [listmobil,setlistmobil] = useState();
    const [tipemobil,settipemobil] = useState();
    const [capacity,setcapacity] = useState();
    
    
    const getalldata = async () => {
        const {data} = await axios("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
        setlistmobil(data);
    }

    const searchcar = () => {
        const hasilfilter = listmobil?.filter((mobil)=> {
            return mobil.type == tipemobil || mobil.capacity == capacity
        })

        setlistmobil(hasilfilter);
      
    }
    useEffect(()=> {
        getalldata();

    },[])

    return (
    <>
        
        <h1>Halaman Cari Mobil</h1>
          <div className="row">
      <div className="card" id="cari">
        
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
      

          
              <small>
                  <table className="table table-borderless">
                      <thead>
                          <tr>
                              <th scope="col">Tipe Mobil</th>
                              <th scope="col">Jumlah Penumpang</th>
                              
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>
                                  <select className="form-select form-select-lg mb-3"
                                      aria-label=".form-select-lg example" id="tipe" onChange={(event)=> settipemobil(event.target.value)}>
                                      <option selected value="0">Pilih Tipe Mobil</option>
                                      <option value="Sedan">Sedan</option>
                                      <option value="Convertible">Convertible</option>
                                      <option value="Hatchback">Hatchback</option>
                                      <option value="Minivan">Minivan</option>
                                      <option value="Regular Cab Pickup">Regular Cab Pickup</option>
                                      <option value="Extended Cab Pickup">Extended Cab Pickup</option>
                                      <option value="Coupe">Coupe</option>
                                      <option value="Passenger Van">Passenger Van</option>
                                      <option value="SUV">SUV</option>
                                    </select>
                              </td>
                              <td>
                              <input type="number" className="form-control" placeholder="Jumlah Penumpang" id="capacity" onChange={(event)=> setcapacity(event.target.value)}/>
                              </td>
                                                  
                              
                              <td>
                                  <button className="btn btn-success" href="" id="btncari" onClick={searchcar}>Cari Mobil</button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </small>
      </div>
  </div>
        
        {listmobil?.map((mobil)=>{
            
            return (
           
                <div className="container">
                      <div className="card">
                      <p>Plate: {mobil.plate}</p>
                      <p>Manufacture: {mobil.manufacture}</p>
                      <p>Model: {mobil.model}</p>
                      <p>Tipe: {mobil.type}</p>  
                      <p>Capacity: {mobil.capacity}</p> 
                          
                    </div>
                 </div>

            )
        })}
    </>
        
    )
}
export default SearchCar;