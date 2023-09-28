import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Stage,
  PerspectiveCamera,
  Environment,
  Preload,
  Loader
} from '@react-three/drei'

import Buddha from '@/components/Buddha'
import IMac from '@/components/IMac'
import studio from '@/assets/image/studio.hdr'

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
          maxDistance={120}
        />

        <ambientLight intensity={1} />

        <Suspense fallback={null}>
          <Stage
            adjustCamera={false}
            intensity={1}
            preset="soft"
            environment={null}
          >
            <Environment files={studio} />

            <group>
              <IMac />
              <Buddha />
            </group>
          </Stage>
        </Suspense>

        <Preload all />
      </Canvas>

      <Loader
        containerStyles={{ background: 'white' }}
        innerStyles={{ background: '#d8d8d8' }}
        barStyles={{ background: 'black' }}
        dataStyles={{ display: 'none' }}
      />
    </main>
  )
}

export default App
