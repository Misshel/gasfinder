'use strict';

const stationItem = (station, update) => {
  const contStation=  $('<div class="col s12 item-station"></div>');

  const contName= $('<div class="col s9"></div>');
  const name = $('<h5>'+ station.name +'</h5>');

  const contLink = $('<div class="col s3"></div>');
  const mapIcon = $('<span class="map-icon material-icons">my_location</span>');

  const contAddres = $('<div class="col s12 item-station"></div>');
  const address= $('<p>'+ station.address+'</p>');

  contName.append(name);
  contLink.append(mapIcon);
  contAddres.append(address);

  contStation.append(contName);
  contStation.append(contLink);
  contStation.append(contAddres);

  return contStation;
}

const stationSearch = (update) => {
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row"></div>');
  const iconSearch = $('<span  class="material-icons">search</span>');
  const search = $('<input class="input-search col s12" placeholder="Ingresa tu distrito a buscar"></input>');
  const rowContainer = $('<div class="row stations"></div>');


  row.append(iconSearch);
  row.append(search);

  container.append(row);
  container.append(rowContainer);


    search.on('keyup',(e) => {
      const find = filterByDistrict(state.stations,search.val());
      reRender (rowContainer, find);
      return rowContainer;
    });

  return container;
}

const reRender = (rowContainer, find) => {
  rowContainer.empty();

  find.forEach((station)=>{
    rowContainer.append(stationItem(station,_=> {reRender(rowContainer, find);}));
  });
}
