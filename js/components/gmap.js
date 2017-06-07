const gmap = (update) => {
  const container = $('<div class="container-fluid "></div>');
  const row = $('<div class="row row-map"></div>');
  const map = $('<div id="map" class="col s12 map"></div>');

  row.append(map);

  container.append(row);
  console.log(state.selectedStation.lat);

  $(  _=>{
    const map = new GMaps({
      div: '#map',
      lat: state.selectedStation.lat,
      lng: state.selectedStation.long
    });

    GMaps.geolocate({
      success: function(position) {
        map.setCenter(position.coords.latitude, position.coords.longitude);
        map.addMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude });
          map.drawRoute({
            origin: [position.coords.latitude, position.coords.longitude],
            destination: [state.selectedStation.lat, state.selectedStation.long],
            travelMode: 'driving',
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
          });

          },
          error: function(error) {
            alert('Geolocation failed: '+error.message);
          },
          not_supported: function() {
            alert("Your browser does not support geolocation");
          },
          always: function() {
            alert("Done!");
          }
        });



      });

      return container;

    }
