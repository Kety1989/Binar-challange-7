const tipedriver=document.getElementById('tipedriver');
const tanggal = document.getElementById('tanggal');
const capacity = document.getElementById('capacity');
const hasilcari=document.getElementById("hasilcari");
const btncari=document.getElementById("btncari");


const data=[
    {
      "id": "Dengan Sopir",
      "plate": "DBH-3491",
      "manufacture": "Ford",
      "model": "F150",
      "image": "./images/car01.min.jpg",
      "rentPerDay": 200000,
      "capacity": 2,
      "description": " Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
      "availableAt": "2022-10-01T00:00:00.000Z",
      "transmission": "Automatic",
      "available": true,
      "type": "Sedan",
      "year": 2022,
      "options": [
        "Cruise Control",
        "Tinted Glass",
        "Tinted Glass",
        "Tinted Glass",
        "AM/FM Stereo"
      ],
      "specs": [
        "Brake assist",
        "Leather-wrapped shift knob",
        "Glove box lamp",
        "Air conditioning w/in-cabin microfilter",
        "Body color folding remote-controlled pwr mirrors",
        "Dual-stage front airbags w/occupant classification system"
      ],
    },
    {
      "id": "Tanpa Sopir",
      "plate": "WXB-3984",
      "manufacture": "BMW",
      "model": "X5",
      "image": "./images/car02.min.jpg",
      "rentPerDay": 800000,
      "capacity": 6,
      "description": " Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
      "availableAt": "2022-10-05T00:00:00.000Z",
      "transmission": "Automatic",
      "available": false,
      "type": "Convertible",
      "year": 2019,
      "options": [
        "Keyless Entry",
        "Power Windows",
        "MP3 (Single Disc)",
        "CD (Multi Disc)",
        "Navigation"
      ],
      "specs": [
        "Rear passenger map pockets",
        "Electrochromic rearview mirror",
        "Dual chrome exhaust tips",
        "Locking glove box",
        "Pwr front vented disc/rear drum brakes"
      ]
    }

  ]


//   let card=`<div class="card">`;

//   for (let a=0;a<data.length;a++){
//     card+=`
//     <p>${data[a].id}
//     <br>${data[a].plate}</p>
//     `;
//     //hasilcari.append(card);

//   }
//   card+=`</div>`;
  
//   hasilcari.innerHTML=card;

btncari.addEventListener("click",()=>{


    if(tipedriver.value=='0' || tanggal.value=='' || capacity.value==''){
    alert('Pilih Tipe Driver , Tanggal dan Jumlah Penumpang');
    hasilcari.innerHTML='';   
    return false;  
    }
    let card=`<div class="card">`;

    for (let a=0;a<data.length;a++){
        
    if(data[a].id==tipedriver.value && tanggal.value>=data[a].availableAt  && capacity.value<=data[a].capacity && capacity.value>0){
        //contoh filter tersedia : dengan sopir, tgl 2/10/2022, kapasitas 2
        //contoh filter tersedia : tanpa sopir, tgl 6/10/2022, kapasitas 6
        card+=`
        <img src="${data[a].image}" width="300" height="250"/>
        <p>${data[a].manufacture} / ${data[a].model} / ${data[a].plate}</p>
        <b>Rp. ${data[a].rentPerDay}</b>
        <p>${data[a].description}<br>
        <i class="bi-people"></i> ${data[a].capacity}<br>
        <i class="bi-gear"></i> ${data[a].transmission}<br>
        <i class="bi-calendar"></i> ${data[a].year}
        </p>
        
        
       `;
       
    }
    
  }

  card+=`</div>`;
  
  hasilcari.innerHTML=card;
})


