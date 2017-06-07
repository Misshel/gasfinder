'use strict';

const stationDetails = (update) => {

  const button = $('<div class="col s3 btn-search"></div>');
  const search = $('<i class="fa fa-chevron-left"></i>');

  const container = $('<div class="container-fluid "></div>');
  const row = $('<div class="row row-datails"></div>');
  const details = $('<div class="col s11 offset-s1"></div>');

  const name = $('<h5>'+ state.selectedStation.name +'</h5><hr>');
  const address= $('<p>'+ state.selectedStation.address+'</p>');

  button.append(search);

  details.append(name);
  details.append(address);
  row.append(details);

  container.append(button);
  container.append(row);


    state.selectedStation.products.forEach((i)=>{
      const product = $('<div class="col s3 center-align product">'+ i +'</div>');
      details.append(product);
    });

    search.on('click',(e) => {
      e.preventDefault();
      state.selectedStation = null;
      update();
    })

  return container;
}
