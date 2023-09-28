import React from 'react'
import * as THREE from 'three'
import { MeshTransmissionMaterial } from '@react-three/drei'

export default props => {
  return (
    <mesh scale={30}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshTransmissionMaterial
        resolution={2048}
        distortion={0}
        color="#ffffff"
        thickness={0.1}
        anisotropy={0}
      />
    </mesh>
  )
}
