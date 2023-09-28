import React, { useRef, Fragment } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Clouds, Cloud } from '@react-three/drei'

export default props => {
  const ref = useRef(null)
  const ref2 = useRef(null)

  useFrame((state, delta) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.07
    ref2.current.rotation.x = state.clock.elapsedTime * -0.07
  })

  return (
    <Fragment>
      <group ref={ref}>
        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud segments={40} bounds={[10, 3, 2]} volume={10} color="blue" />
        </Clouds>
      </group>
      <group ref={ref2}>
        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud segments={40} bounds={[10, 3, 2]} volume={10} color="blue" />
        </Clouds>
      </group>
    </Fragment>
  )
}
