import React from 'react'
import * as THREE from 'three'
import { LayerMaterial, Color, Depth } from 'lamina'

export default () => {
  return (
    <mesh scale={100}>
      <sphereGeometry args={[1, 128, 128]} />
      <LayerMaterial side={THREE.BackSide}>
        <Color color="#fff" alpha={1} mode="normal" />
        <Depth
          colorA="red"
          colorB="blue"
          alpha={1}
          mode="normal"
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  )
}
