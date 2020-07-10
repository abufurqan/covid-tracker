import React from 'react'

const CustomMarker = ({data}) => {
  return (<div
    lat = {data.countryInfo.lat}
    lng = {data.countryInfo.long}
    style={{
    color: "red",
    backgroundColor: '#FFF',
    height: "25px",
    width: "35px",
    }}
    >
    {data.cases}
    </div>)
}

export default CustomMarker;