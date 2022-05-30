console.log('**** Kredi Hesaplama *******');
const select = document.querySelector('.form-select');
const vade = document.querySelector('#vade');
const tutar = document.querySelector('#tutar');
const hesaplaBtn = document.querySelector('.btn-dark');
let oran = 0;
hesaplaBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(select.value === "Konut Kredisi"){
        oran = 1.29;
    } else if(select.value === "Ihtiyac Kredisi"){
        oran = 1.99;
    } else if(select.value === "Arac Kredisi"){
        oran = 1.79;
    }
   if(!select.value|| !vade.value || !tutar.value){
       alert('Lütfen Kredi Turu, Vade ve Tutarı Giriniz!')
   }
   const faiz = oran / 100;
   taksit =
     ((tutar.value * (faiz * (1 + faiz) ** vade.value)) /
     ((1 + faiz) ** vade.value - 1)).toFixed(2);
     console.log(taksit);
     sonuçlariGöster();
});
const sonuçlariGöster=()=>{
    const sonuclar =document.querySelector('.sonuclar');
    sonuclar.innerHTML = `<table class="table table-bordered border-primary">
  <tr>
      <th>Kredi Miktarı</th>
      <td>${tutar.value}</td>
      <th>Kredi Tipi</td>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Vade</th>
      <td>${vade.value}</td>
      <th>Faiz Orani</td>
      <td>${oran}</td>
    </tr>
    <tr>
      <th>Toplam Tutar</th>
      <td>${taksit*vade.value}</td>
      <th>Taksit Tutar</td>
      <td>${taksit}</td>
    </tr>
</table>`;
}