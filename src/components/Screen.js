import React, { useMemo, s } from 'react'
import * as THREE from 'three'
import { useVideoTexture } from '@react-three/drei'
import tv from '@/assets/video/tv.mp4'

const Screen = props => {
  const texture = useVideoTexture(tv)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.x = -1
  texture.offset.x = 1

  const ratio = 16 / 9
  const width = 100

  const r = useMemo(
    () =>
      texture.image
        ? texture.image.videoWidth / texture.image.videoHeight
        : ratio,
    [texture.image, ratio]
  )

  return (
    <mesh rotation={[0, Math.PI * -1, 0]} {...props}>
      <planeGeometry args={[30, 10]} castShadow receiveShadow />
      <meshPhysicalMaterial
        color="#fff"
        side={THREE.DoubleSide}
        map={texture}
        transparent
        emmisive="white"
      />
    </mesh>
  )
}

export default Screen
