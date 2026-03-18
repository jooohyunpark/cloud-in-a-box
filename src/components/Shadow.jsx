import React, { Fragment } from 'react'
import { SoftShadows } from '@react-three/drei'

export default () => {
  return (
    <Fragment>
      <directionalLight
        castShadow
        position={[0, 30, 0]}
        intensity={0}
        shadow-mapSize={1024}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-20, 20, -20, 20, 10, 50]}
        />
      </directionalLight>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -15.1, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 30]} />
        <shadowMaterial transparent opacity={0.5} color="#0000ff" />
      </mesh>

      <SoftShadows focus={0} />
    </Fragment>
  )
}
