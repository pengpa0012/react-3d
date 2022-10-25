import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const [width, setWidth] = useState<number>(0)
  return (
    <div>
      <Canvas>
        <ambientLight intensity={.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[width, 2, 2]} />
        </mesh>
      </Canvas>
      <h1 onMouseOver={() => setWidth(width + 1)}>HOVER</h1>
    </div>
  )
}

export default Home
