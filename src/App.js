import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  Preload,
  Clouds,
  Cloud
} from '@react-three/drei'

import '@/styles/main.scss'

const App = () => {
  return (
    <main>
      <Canvas shadows linear flat>
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
          minDistance={30}
          maxDistance={100}
        />

        <ambientLight intensity={1} />

        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" />
          <Cloud seed={1} scale={2} volume={5} color="white" fade={100} />
        </Clouds>

        <Preload all />
      </Canvas>
    </main>
  )
}

export default App
