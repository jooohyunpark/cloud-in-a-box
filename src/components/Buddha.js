import React from 'react'
import { Gltf } from '@react-three/drei'
import BuddhaGLB from '@/assets/model/buddha.glb'

const Buddha = props => {
  return <Gltf src={BuddhaGLB} castShadow receiveShadow {...props} />
}

export default Buddha
