import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Box from '@/components/Box'
import Cloud from '@/components/Cloud'
import { LayerMaterial, Color, Depth } from 'lamina'

import '@/styles/main.scss'

const App = () => {
  return (
    <main>
      <Canvas>
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
          maxDistance={100}
        />

        {/* <ambientLight intensity={1} /> */}

        <Box />
        <Cloud />

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
      </Canvas>
    </main>
  )
}

export default App
