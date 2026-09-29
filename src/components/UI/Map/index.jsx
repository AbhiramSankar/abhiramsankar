import './index.scss'
import canadaData from '../../../assets/data/canada.json'

import { useMemo, useRef } from 'react'
import { MapContainer, TileLayer, Marker, GeoJSON, Popup } from 'react-leaflet'
import * as turf from '@turf/turf'
import L from 'leaflet'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const redMarkerIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div class="marker-pin">
      <div class="marker-dot"></div>
    </div>
  `,
  iconSize: [32, 42],
  iconAnchor: [16, 42],
  popupAnchor: [0, -42],
})

const Map = () => {
  const mapRef = useRef(null)
  const position = [43.9, -78.87]
  const zoom = 9

  const reachabilityArea = useMemo(() => {
    const ontarioFeature = canadaData.features.find((feature) => {
      const name = feature?.properties?.name || feature?.properties?.NAME
      return name === 'Ontario'
    })

    const arcCenter = [-72.04, 37.02]
    const radiusKm = 1100

    const bigCircle = turf.circle(arcCenter, radiusKm, {
      units: 'kilometers',
      steps: 256,
    })

    const clipped = turf.intersect(
      turf.featureCollection([ontarioFeature, bigCircle])
    )

    return clipped
  }, [])

  const mapBounds = [
    [35.78, -88.55],
    [51.03, -69.19],
  ]

  const handleRecenter = () => {
    mapRef.current?.flyTo(position, zoom, { animate: true, duration: 1 })
  }

  return (
    <MapContainer
      ref={mapRef}
      center={position}
      zoom={zoom}
      minZoom={6}
      maxZoom={11}
      maxBounds={mapBounds}
      maxBoundsViscosity={1}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {reachabilityArea && (
        <GeoJSON
          data={reachabilityArea}
          style={{
            color: '#A10B0B',
            weight: 4,
            fillColor: '#A10B0B',
            fillOpacity: 0.12,
          }}
        />
      )}

      <Marker position={position} icon={redMarkerIcon}>
        <Popup>
          <div className="locationPopup">
            <strong>Oshawa, Ontario</strong>
            <span>
              Available for opportunities across Ontario and remote
              opportunities across Canada.
            </span>
          </div>
        </Popup>
      </Marker>

      <button type="button" className="recenterButton" onClick={handleRecenter}>
        <FontAwesomeIcon icon={faLocationCrosshairs} />
        <span className="buttonText">Tired of exploring? Back to Oshawa</span>
      </button>
    </MapContainer>
  )
}

export default Map
