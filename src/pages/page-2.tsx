import React, {useState, useCallback} from "react"

export default function GeolocationPage() {

  return (
    <div>
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude:</p>
      <p>Longitude:</p>

      <button>
        Get Current Location
      </button>
    </div>
  );
}
