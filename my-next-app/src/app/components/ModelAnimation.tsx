"use client"
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const RotatingBox = () => {
    const meshRef: any = useRef();
  
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005; // Вращение по оси X
        meshRef.current.rotation.y += 0.005; // Вращение по оси Y
      }
    });
  
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    );
  };

export const ModelAnimation = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <RotatingBox />
        </Canvas>
    )
}