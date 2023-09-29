import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  MeshReflectorMaterial
} from '@react-three/drei'
import Box from '@/components/Box'
import Cloud from '@/components/Cloud'
import Shadow from '@/components/Shadow'

import '@/styles/main.scss'

const App = () => {
  return (
    <main>
      <Canvas flat shadows>
        <color attach="background" args={['white']} />

        <PerspectiveCamera
          position={[70, 10, -50]}
          near={1}
          far={1000}
          fov={50}
          makeDefault
        />

        <OrbitControls
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={0.5}
          maxPolarAngle={Math.PI * 0.5}
          minDistance={50}
          maxDistance={150}
        />

        <ambientLight intensity={1} />

        <Shadow />

        <Box />
        <Cloud />
      </Canvas>
    </main>
  )
}

export default App
