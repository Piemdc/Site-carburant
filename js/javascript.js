const apiURL = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=prix_des_carburants_j_7&q=&facet=cp&facet=pop&facet=city&facet=automate_24_24&facet=fuel&facet=shortage&facet=update&facet=services&facet=brand"
const main =document.getElementById('main');
const preCity="&refine.city="
const preCarb="&refine.fuel="
let valid=document.getElementById('valider');
let form=document.getElementById("choix");




form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    main.innerHTML=""
     
    
    const ville=document.getElementById("ville").value.toUpperCase();
    const carb=document.getElementById("carbchoice").value;
    
    showCarbs(apiURL+preCity+ville+preCarb+carb,carb);
    console.log(apiURL+preCity+ville+preCarb+carb)

});



showCarbs();

function showCarbs(url,carb){
    

    fetch(url).then(res => res.json( ))

    .then(function(data){
        
        
    let adresse = data.records;
  
    
    return adresse.map(function(adresse){
        
        const tr =document.createElement('tr')
        const nomS = document.createElement('th');
        const prix = document.createElement('td');
        const adress = document.createElement('td');
        adress.setAttribute("id","adresse")
        

        
        adresse.fields.name ? nomS.innerHTML = `${adresse.fields.name} `+ `- ${adresse.fields.city}` : nomS.innerHTML = "" + `${adresse.fields.city}` ;

        
        prix.innerHTML = fuel(carb);
        adress.innerHTML = `${adresse.fields.address}`;
    
        tr.appendChild(nomS);
        tr.appendChild(prix);
        tr.appendChild(adress);
        main.appendChild(tr);
        


 function fuel (carb)
{
    switch (carb)
    {
        case 'E10':
            return `${adresse.fields.price_e10}`;
        break;
        case 'SP98':
            return `${adresse.fields.price_sp98}`;
        break;
        case 'Gazole':
            return `${adresse.fields.price_gazole}`;
        break;
        case 'E85':
            return `${adresse.fields.price_e85}`;
        break;
        case 'GPLc':
            return `${adresse.fields.price_gplc}`;
        break;
    }
}       
     
    })
    }); 
}

new Tablesort(document.getElementById('tableau'));



