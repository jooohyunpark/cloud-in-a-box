import React from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  SoftShadows
} from '@react-three/drei'
import Box from '@/components/Box'
import Cloud from '@/components/Cloud'
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
          // maxPolarAngle={Math.PI * 0.5}
          minDistance={50}
          maxDistance={150}
        />

        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[0, 30, 0]}
          intensity={1.5}
          shadow-mapSize={1024}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-20, 20, -20, 20, 0.1, 50]}
          />
        </directionalLight>

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -15.1, 0]}
          receiveShadow
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} color="blue" />
        </mesh>

        <Box />
        <Cloud />

        <SoftShadows />
      </Canvas>
    </main>
  )
}

export default App
