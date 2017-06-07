'use strict';

const stationItem = (station, update, reRender ) => {
  // console.log(update);
  const contStation=  $('<div class="col s12 item-station"></div>');

  const contName= $('<div class="col s9"></div>');
  const name = $('<h5>'+ station.name +'</h5>');

  const contLink = $('<div class="col s3 btn-map center-align"></div>');
  const mapIcon = $('<i class="fa fa-map"></i>');

  const contAddres = $('<div class="col s12 item-station"></div>');
  const address= $('<p>'+ station.address+'<br>'+ station.district +'</p>');

  contName.append(name);
  contLink.append(mapIcon);
  contAddres.append(address);

  contStation.append(contName);
  contStation.append(contLink);
  contStation.append(contAddres);

  mapIcon.on('click',(e) => {
    e.preventDefault();

    state.selectedStation = station;
    update();
  });

  return contStation ;
}

const stationSearch = (update) => {
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row search"></div>');
  const iconSearch = $('<span  class="material-icons">search</span>');
  const search = $('<input class="input-search col s12" placeholder="Ingresa tu distrito a buscar"></input>');
  const rowContainer = $('<div class="row stations"></div>');


  row.append(iconSearch);
  row.append(search);

  container.append(row);
  container.append(rowContainer);


    search.on('keyup',(e) => {
      const find = filterByDistrict(state.stations,search.val());

      reRender (rowContainer, find, update);
    });


  return container;
}

const reRender = (rowContainer, find, update) => {
  rowContainer.empty();

  find.forEach((station)=>{
    rowContainer.append(stationItem(station,update,_=> {reRender(rowContainer, find);}));

  });
}
