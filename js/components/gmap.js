const gmap = (update) => {
  const container = $('<div class="container-fluid "></div>');
  const row = $('<div class="row row-map"></div>');
  const map = $('<div id="map" class="col s12 map"></div>');

  row.append(map);

  container.append(row);

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
            strokeWeight: 6 });

            const rutaTotal = {origin: [position.coords.latitude, position.coords.longitude],
                              destination: [state.selectedStation.lat, state.selectedStation.long] };

            const distance = $('<span class="distance">Distancia:<br>' + getDistance (rutaTotal) +'</span>');
            row.append(distance);
            console.log(distance.html());

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


      const getDistance = (distance) => {

        for(let i=0;i<distance.origin.length;i++){
          for (let i = 0; i < distance.destination.length; i++) {

            const R = 6371;
            const dLat = (distance.destination[0]-distance.origin[0]) * (Math.PI/180);
            const dLon = (distance.destination[1]-distance.origin[1]) * (Math.PI/180);

            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(distance.origin[0] * (Math.PI/180)) * Math.cos(distance.destination[0] * (Math.PI/180)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            const d = (R * c).toFixed(2)+" km";
            return (d);
          }
        }

      }
