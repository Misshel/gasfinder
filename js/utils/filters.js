'use strict';

const filterByDistrict = (stations,query) => {
 const district = stations.filter( (station) => {
   return (station.district.toLowerCase().indexOf(query.toLowerCase())!= -1);
 });
// console.log(district);
 return district;
}
