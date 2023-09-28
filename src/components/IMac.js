import React, { forwardRef, useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import IMacGLB from '@/assets/model/imac.glb'
import textureMap from '@/assets/image/texture.jpg'

const Buddha = props => {
  const { scene } = useGLTF(IMacGLB)

  const texture = useTexture(textureMap)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.x = -1
  texture.offset.x = 1

  useEffect(() => {
    scene.traverse(function (object) {
      if (object.isMesh) {
        if (object.name === 'Screen_Main') {
          object.material = new THREE.MeshStandardMaterial({
            color: '#fff',
            map: texture,
            emissive: '#fff',
            emissiveIntensity: 0.2
          })
        }
      }
    })
  }, [])

  return (
    <primitive
      object={scene}
      scale={0.11}
      rotation={[0, Math.PI * 0.5, 0]}
      position={[0, 0.3, 30]}
      {...props}
    />
  )
}

export default Buddha
