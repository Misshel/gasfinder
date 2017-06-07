const gmap = (update) => {
    const container = $('<div class="container-fluid "></div>');
    const row = $('<div class="row row-map"></div>');
    const map = $('<div id="map" class="col s12 map"></div>');

    row.append(map);

    container.append(row);
    console.log(state.selectedStation.lat);

  $(  _=>{
      new GMaps({
        div: '#map',
        lat: state.selectedStation.lat,
        lng: state.selectedStation.long
      });

    });
    // console.log(lat);

    return container;

}
